const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = process.env.saltRounds;
const jwt = require('jsonwebtoken');
const Joi = require("joi");

// 몽고 DB 스키마
const userSchema = mongoose.Schema({
    // 이름, 비밀번호, 아이디, 닉네임, 이미지
    userName : {
        type : String,
        minlength : 1,
        maxlength : 20,
        required : true,
    },
    password : {
        type : String,
        minlength : 5,
        maxlength : 50,
        trim : true, // 빈칸 없애주는 역할
        required : true,
    },
    userNickName : {
        type : String,
        minlength : 1,
        maxlength : 50,
        trim : true,
        required : true,
    },
    userId : {
        type : String,
        maxlength : 50,
        unique : true,
    },
    role : { // 번호에 따라 관리자인지 일반유저인지 판별
        type : Number,
        default : 0,
    },
    image : String,
    token : { // 토큰
        type : String,
    },
    tokenExp : { // 토큰 유효 기간
        type : Number,
    }
});

// method
// 스키마가 만들어지고 난 후 기본적으로 설정된 메소드를 상속받아 사용한다.
// 사용자 커스텀 메소드를 정의할 수 있다.
// pre
// 몽구스의 middleware기능이다. init, validate, save, remove 메소드 수행 시 처리되는 미들웨어 펑션이다.
// 복잡한 유효성 검사, 트리거 이벤트 처리 등 사용자를 삭제하면 사용자 관련 블로그 포스트도 삭제하기 같은 경우
// 또는 에러 헨들링에 쓰인다.

userSchema.pre('save', function(next) {

    // 몽구스 userSchema
    const user = this;

    // 패스워드가 바뀌는 것을 감지하면 아래의 해쉬를 사용한다.
    if(user.isModified('password')){
        // bcrypt 라이브러리로
        // 비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) return next(err);
            
            // 해쉬값 부여
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err);
                user.password = hash;
                next();
            })
        })
    }else{
        // 비밀번호가 아닌 다른 것을 바꿀때는 넘기기만 하면 된다.
        next();
    }
    
})

// 유저 스키마 모델 만들기
const User = mongoose.model('User',userSchema);

// 유저 스키마 공유
module.exports = { User };