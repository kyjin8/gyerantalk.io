import React, { useEffect, useState } from 'react'
import client from 'cheerio-httpcli'
import cheerio from 'cheerio'
import axios from 'axios'
import '../../../MainPage/Main.scss';

const TV = () => {

    const [Chu, setChu] = useState([]);
    useEffect(() => {
        axios.get('/api/videos')
            .then(response => {
                const { data } = response.data;
                console.log('aaaaaaaaaa', response.data.result);
                setChu(response.data.result);
            })
    }, [])
    
    return (
        <div className="chu_box">
            { Chu &&
            Chu.map((ch) => (
                <a href={ch.video_src}>
                    <div className="chu_src" key={ch.video_src}>
                        <div className="chu_div">
                            <img className="chu_img" src={ch.img_data}/>
                        </div>
                        <div className="chu_span">
                            <span className="chu_say">{ch.span_text}</span>
                        </div>
                    </div>
                </a>
            ))
        }
        </div>
    )
}

export default TV;