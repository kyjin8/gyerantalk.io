var express = require('express');
const { User } = require('../public/models/Users');
const { auth } = require('../public/middleware/auth');
const bodyParser = require('body-parser');
const { Friend } = require('../public/models/Friends');
const { Chat } = require('../public/models/Chat');
const multer = require('multer');
const fs = require('fs');
var router = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`)
    },
    // fileFilter: (req, file, cb) => {
    //   const ext = path.extname(file.originalname)
    //   if (ext !== '.jpg' && ext !== '.png' && ext !== '.mp4') {
    //     return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
    //   }
    //   cb(null, true)
    // }
  })

var upload = multer({storage:storage}).single('file')

router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

/* GET users listing. */
router.get('/getChat' , async(req, res) => {
    await Chat.find()
        .populate("sender")
        .exec((err, chats) => {
            if(err) return res.status(400).send(err);
            res.status(200).send(chats)
        })
});

router.post('/uploadfiles', auth,(req,res)=>{
    upload(req, res, err =>{
        if(err){
            return res.json({success:false,err})
        }
        return res.json({success:true, url : res.req.file.path})
    });
  });

module.exports = router;
