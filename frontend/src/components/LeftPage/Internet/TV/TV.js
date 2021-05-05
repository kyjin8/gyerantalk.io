import React, { useState } from 'react'
import client from 'cheerio-httpcli'
import cheerio from 'cheerio'
import axios from 'axios'

const TV = () => {
    //츄 검색
    // const url = 'https://www.youtube.com/results?search_query=%EC%B8%84'
    // const url = 'http://www.google.com/search';
    // const word = '츄';
    // const param = {};
    // const [result, setResult] = useState('');

    // client.fetch(url, {q:word}, function(err, $, res, body){
    //     if(err){console.log(err); return}

    //     // $('#video-title > yt-formatted-string').each(function(post){
    //     //     console.log($(this).text());
    //     // });
    //     const alist = $('div.rc').find('.r').find('a');
    //     for (let i = 0; i < alist.length; i++) {
    //         console.log($(alist[i]).text());
    //         console.log($(alist[i]).attr('href'));
    //     }
    // })
    //
    
    // let $href = [];
    // // axios.get(`https://www.youtube.com/results?search_query=%EC%B8%84`)
    // axios.get(`https://news.naver.com/`)
    // .then(dataa => {
    //     console.log(dataa);
    //     // const $ = cheerio.load(dataa.data);
    //     // $('#video-title > yt-formatted-string').each((index, item) => { $href.push(item.attribs.href)});
    // })

    //됨
    // async function getHTML() {
    //     try {
    //     //   return await axios.get("https://chaewonkong.github.io");
    //     return await axios.get("https://www.youtube.com/results?search_query=%EC%B8%84");
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    //     // getHTML 함수 실행 후 데이터에서
    //     // body > main > div > section > ul > li > article > h2 > a
    //     // 에 속하는 제목을 titleList에 저장
    //   getHTML()
    //   .then(html => {
    //     let titleList = [];
    //     const $ = cheerio.load(html.data);
    //     // ul.list--posts를 찾고 그 children 노드를 bodyList에 저장
    //     const bodyList = $("ul.list--posts").children("li.item--post");
    
    //     // bodyList를 순회하며 titleList에 h2 > a의 내용을 저장
    //     bodyList.each(function(i, elem) {
    //       titleList[i] = {
    //         title: $(this)
    //           .find("h2 a")
    //           .text()
    //       };
    //     });
    //     return titleList;
    //   })
    //   .then(res => console.log(res)); // 저장된 결과를 출력
      
    //네이버웹툰- cors
    // const axios = require("axios");
    // const cheerio = require("cheerio");
    // const client = require("cheerio-httpcli");
    // client.fetch(
    //   "http://comic.naver.com/webtoon/weekday.nhn",
    //   {},
    //   function (err, $, res, body) {
    //     var list = $(".list_area .col_selected li");
    //     list.each(function () {
    //       console.log($(this).find(".title").text()); // 제목을 검색해서 출력한다
    //       console.log($(this).find("div.thumb a img").attr("src")); //이미지를 검색해서 출력한다
    //     });
    //   }
    // );

    axios.get('/api/videos')
    .then(response => {
        const { data } = response.data;
        console.log('aaaaaaaaaa', response.data);
    })

    return (
        <div>
            
        </div>
    )
}

export default TV;