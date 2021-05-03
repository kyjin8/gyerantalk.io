const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 몽고 DB 스키마
const chatSchema = mongoose.Schema({
    // 이름, 비밀번호, 아이디, 닉네임, 이미지
    message : {
        type : String,
    },
    sendUser : {
        type : Schema.Types.ObjectId,
        ref : 'User',
    },
    roomName : {
        type : String,  
    },
    // anotherUser : {
    //     type : String,
    // },
    readMessage : {
        type : Boolean,
        default : false,
    },
    // anotherUser : {
    //     type : String,
    // },
},{timestamps:true});

// 유저 스키마 모델 만들기
const Chat = mongoose.model('Chat',chatSchema);

// 유저 스키마 공유
module.exports = { Chat };