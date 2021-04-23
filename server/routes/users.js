var express = require('express');
const { User } = require('../public/models/Users');
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
    if(err) return res.json({ success : false, err });
    return res.status(200).json({
      success : true
    })
  })
});

module.exports = router;
