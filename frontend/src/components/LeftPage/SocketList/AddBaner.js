import React, { useState, useEffect } from 'react';
import '../../MainPage/Main.scss';

const AddBaner = () => {

    const [Image, setImage] = useState("");

    const data = [
        '/advertise/k-000.png',
        '/advertise/k-001.png',
        '/advertise/k-002.png',
        '/advertise/k-003.png',
        '/advertise/k-004.png',
        '/advertise/k-005.png',
        '/advertise/k-006.png',
        '/advertise/k-007.png',
        '/advertise/k-008.png',
        '/advertise/k-009.png',
        '/advertise/k-0010.png',
        '/advertise/k-0011.png',
    ]

    useEffect(() => {
        // 0~9 랜덤
        const randomNum = Math.floor(Math.random()*10 + 1);
        setImage(data[randomNum]);
        console.log(randomNum);
    }, [])
    return (
        <div classname="big_ad">
            <img className="ad_ver" src={Image} />
        </div>
    )
}

export default AddBaner;
