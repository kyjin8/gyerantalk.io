import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { payReady } from '../../../../api/actions/pay_action';

const ShopItem = ({UserData, productBox, querynum}) => {
    const [state, setState] = useState("");

    useEffect(() => {
      setState({
        // 응답에서 가져올 값들
        next_redirect_pc_url: "",
        tid: "",
        // 요청에 넘겨줄 매개변수들
        params: {
          cid: "TC0ONETIME",
          partner_order_id: "partner_order_id",
          partner_user_id: "partner_user_id",
          item_name: productBox.productName,
          item_code: productBox.productCode,
          quantity: 1,
          total_amount: productBox.productPrice,
          // total_amount: 30000,
          tax_free_amount: 0,
          approval_url: "http://localhost:3000/main/Internet/Shop/success",
          fail_url: "http://localhost:3000/main/Internet/Shop/fail",
          cancel_url: "http://localhost:3000/main/Internet/Shop/cancel",
        },
      })
    }, [productBox])

    useEffect(()=>{
      const { params } = state;
      axios({
        url: "/v1/payment/ready",
        // 결제 준비 API는 POST 메소드라고 한다.
        method: "POST",
        headers: {
          // 카카오 developers에 등록한 admin키를 헤더에 줘야 한다.
          Authorization: "KakaoAK ca4cd7847b43dd1a89e836e3ce896daf",
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          // "Access-Control-Allow-Origin": "http://localhost:3000",
        },
        // 설정한 매개변수들
        params,
      }).then((response) => {
        // 응답에서 필요한 data만 뽑는다.
        const {
          data: { next_redirect_pc_url, tid }
        } = response;
        console.log(next_redirect_pc_url);
        console.log(tid);
        // localstorage에 tid 저장
        window.localStorage.setItem("tid", tid);
        window.localStorage.setItem("customerId", UserData.userId);
        // 응답 data로 state 갱신
        setState({ next_redirect_pc_url, tid });
      });
    },[state]);
  
      const { next_redirect_pc_url} = state;
      console.log('kakao', next_redirect_pc_url);

    const wrapperStyle = {
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
      margin: '5% 0 8%',
    }

    const payStyle = {
      margin: '5% 0',
      padding: '4%',
      backgroundColor: '#fbf0b0',
      borderRadius: '10px',
      height: '30px',
    }

    return (
        productBox !== undefined ?
        <div style={{overflow:'scroll',height:'500px'}}>
            <img className="products_img" src={productBox.image} style={{width: '100%'}}/>
            <div className="products_title" style={{fontSize: '13px',  margin: '5% 0 3%', lineHeight: '1.8'}}>{productBox.productName}</div>
            <div className="pay_wrapper" style={wrapperStyle}>
              <div className="products_price" style={{display: 'inline-block', width: '65%', fontWeight: '700'}}>{productBox.productPrice.toLocaleString()}원</div>
              <div className="img_wrapper" style={{display: 'inline-block'}}><a href={ next_redirect_pc_url }>
                  <img style={payStyle} src="/gayran_pay.png" />
              </a></div>
            </div>
            <img className="products_desc" style={{width: '100%'}} src={productBox.productDesc}/>
        </div>
        :
        <></>
    )
}

export default withRouter(ShopItem)
