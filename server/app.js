require("dotenv").config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 몽구스 DB 연결 설정
const connect = mongoose.connect(process.env.mongoURI,{
  // 에러같은 것들이 조금 뜨기는 하는데 안뜨게 하는 설정
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})
// 연결 성공시
.then(()=>console.log('MongoDB Connected...'))
// 연결 실패시
.catch((err)=>console.log(err))

// 라우터 설정
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const chatRouter = require('./routes/chats');
// 라우터 적용
app.use('/', indexRouter); // index 위치
app.use('/api/users', usersRouter); // 로그인 / 회원가입 위치
app.use('/api/chats', chatRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// const { Chat } = require('./public/models/Chat');

// io = require('socket.io')();
// io.on('connection',socket=>{
//   console.log('소켓연결')
//   socket.on('Input Chat Message', msg=>{
//     console.log('11111111111');
//     connect.then(db => {
//       console.log('2222222222');
//       try {
//         let chat = new Chat({
//           message : msg.chatMessage, 
//           sender : msg._id,
//           type : msg.type,
//         })

//         chat.save((err,doc) => {
//           if(err) return res.json({success : false, err})

//           Chat.find({"_id":doc._id})
//           .populate("sender")
//           .exec((err,doc));

//           return io.emit("Output Chat Message", doc);
//         })
//       } catch (error) {
//         console.error(error);
//       }
//     })
//   })
// })

