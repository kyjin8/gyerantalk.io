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
            <div>뉴스오류</div>
        );
    }

    // resolved값이 유효할 때
    const { weather } = resolved.data;
    const open = resolved;
    console.log(open);
    return (
        <div className="news_top">
            <div>
                {weather[0].main}과{weather[0].description}과<img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} /><br/>
                {open.data.name}과 
            </div>
        </div>
    )
}

export default Weather