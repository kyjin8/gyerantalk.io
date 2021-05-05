const express = require('express');
const router = express.Router();
const cheerio = require("cheerio");
const client = require("cheerio-httpcli");

router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    let titleList = [];
    let titleli=""

    client.fetch(
    //   "http://comic.naver.com/webtoon/weekday.nhn",
    "https://www.youtube.com/results?search_query=%EC%B8%84",
      {},
      function (err, $, response, body) {
        // const list = $(".list_area .col_selected li");
        // list.each(function (i, elem) {
        //     titleList[i] = {
        //         title: $(this).find('.title').text(),
        //         img: $(this).find("div.thumb a img").attr("src")
        //     }
        // });
        const list = $('ytd-vertical-list-renderer.ytd-shelf-renderer div#items ytd-video-renderer.ytd-vertical-list-renderer')
        list.each(function(i, elem){
            // console.log($(this).text());
            titleList[i] = {
                title: $(this).find('yt-formatted-string').attr('title'),
                // img: $(this).find("div.thumb a img").attr("src")
            }
        });

        if(err) return res.json({success : false, err});
        return res.status(200).json({
            success:true,
            titleList: titleList,
            title: titleli
        })
      }
    );
});

module.exports = router;