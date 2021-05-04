import React, {useState} from 'react';
import axios from 'axios';
import usePromise from '../../../../usePromise';
import { LoadingOutlined } from '@ant-design/icons';

const Weather = ({UserData}) => {

    const [state, setstate] = useState("")

    // api.openweathermap.org/data/2.5/weather?q=seoul&appid=3759cf2983458ec945fed258d8c987fb&units=imperial
    const [loading, resolved, error] = usePromise(() => {
        return axios.get(
            `http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=3759cf2983458ec945fed258d8c987fb`
        );
    }, [UserData]);

    // 대기중 일때 실행
    if (loading) {
        return (
            <LoadingOutlined className="loading"/>
        )
    }
    // 값이 없으면 null 값으로 반환
    if (!resolved) {
        return (
            <div>날씨오류</div>
        );
    }

    // resolved값이 유효할 때
    const open = resolved;
    const { weather } = resolved.data;
    console.log(resolved);
    return (
        <div className="news_top">
            <div className="news_head">
                <img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} />
                <div className="news_weather">
                    <ul>
                        <li>위치 : {resolved.data.name}</li>
                        <li>날씨 : {weather[0].main}</li>
                        <li>풍속 : {resolved.data.wind.speed}</li>
                    </ul>
                    
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Weather
