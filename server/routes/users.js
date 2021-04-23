var express = require('express');
const { User } = require('../public/models/Users');
const { auth } = require('../public/middleware/auth');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',(req,res)=>{
  // 회원가입 할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 가져온다.
  const user = new User(req.body);

  // 몽고 DB 함수
  user.save((err,doc)=>{

    if(err) return res.json({ success : false, err })

    return res.status(200).json({
      success : true
    })
  })
});

router.post('/login',(req,res)=>{

  // 요청된 아이디를 데이터베이스에서 있는지 찾는다.
  User.findOne({ userId : req.body.userId },(err,user)=>{
    if(!user){
      return res.json({
        loginSuccess : false,
        message : "입력하신 아이디는 없습니다."
      })
    }
    
    // 요청된 아이디가 데이터베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인
    user.comparePassword(req.body.password, (err, isMatch)=>{
      if(!isMatch) return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." });

      // 비밀번호까지 맞다면 토큰을 생성하기
      user.generateToken((err,user)=>{
        if(err) return res.status(400).send(err);

        // 토큰을 저장한다. 어디에? 쿠키, 로컬스토리지
        res.cookie("x_auth",user.token).status(200).json({loginSuccess:true, userId : user._id});
      })
    })
  })
})

router.get('/auth',auth,(req,res)=>{
  res.status(200).json({
    userId : req.user.userId,
     // role이 0이면 일반유저 role이 1 2 3 이든 0이 아니면 관리자
    isAdmin : req.user.role === 0 ? false : true,
    isAuth : true,
    userName : req.user.userName,
    userNickName : req.user.userNickName,
    role : req.user.role,
    image : req.user.image
  });
})

router.get('/logout', auth,(req, res)=>{
  User.findOneAndUpdate({ userId : req.user.userId },
      { token : "" }, (err, user) =>{
              if(err) return res.json({ success : false, err });
              return res.status(200).send({
                  success : true
              })
          }
      )
})

module.exports = router;
