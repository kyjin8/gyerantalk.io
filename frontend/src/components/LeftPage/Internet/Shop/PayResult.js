import React, { useEffect, useState } from "react";
import { Link, withRouter } from 'react-router-dom';
import { Button } from "@material-ui/core";

import axios from "axios";

const PayResult= ({location}) => {
    console.log('location search', location.search);
    const [search, setSearch] = useState('');
    const [state, setState] = useState({
        params: {
        cid: "TC0ONETIME",
        // localstorage에서 tid값을 읽어온다.
        tid: window.localStorage.getItem("tid"),
        partner_order_id: "partner_order_id",
        partner_user_id: "partner_user_id",
        // pg_token: "",
        pg_token: location.search.split("=")[1]
        },
    });
    
    // url에 붙어서 온 pg_token을 결제 API에 줄 params에 할당
    // params.pg_token = search.split("=")[1];
    
    useEffect(()=>{
        // setState({pg_token: location.search.split("=")[1]});
        const { params } = state;
        console.log('params', params);
        console.log('result state', state);
        
        axios({
          url: "/v1/payment/approve",
          method: "POST",
          headers: {
            Authorization: "KakaoAK ca4cd7847b43dd1a89e836e3ce896daf",
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
          params,
        }).then((response) => {
          // 결제 승인에 대한 응답 출력
          console.log(response);
        });
    }, []);



    return (
      <div style={{textAlign: 'center'}}>
        <h4>결제에 성공하였습니다.</h4>
        <Link to="/main/Internet/Shop"><Button>쇼핑으로 돌아가기</Button></Link>
      </div>
    );
}
export default withRouter(PayResult);