import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { payReady } from '../../../../api/actions/pay_action';

const ShopItem = ({productBox, querynum}) => {
    const [state, setState] = useState(""
    //   {
    //   // 응답에서 가져올 값들
    //   next_redirect_pc_url: "",
    //   tid: "",
    //   // 요청에 넘겨줄 매개변수들
    //   params: {
    //     cid: "TC0ONETIME",
    //     partner_order_id: "partner_order_id",
    //     partner_user_id: "partner_user_id",
    //     // item_name: productBox.title,
    //     item_name: "choco",
    //     quantity: 1,
    //     // total_amount: productBox.productPrice,
    //     total_amount: 30000,
    //     tax_free_amount: 0,
    //     approval_url: "http://localhost:3000/main/Internet/Shop/payresult",
    //     fail_url: "http://localhost:3000/main/Internet/Shop/payresult",
    //     cancel_url: "http://localhost:3000/main/Internet/Shop/payresult",
    //   },
    // }
    );

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
          // item_name: productBox.title,
          quantity: 1,
          total_amount: productBox.productPrice,
          // total_amount: 30000,
          tax_free_amount: 0,
          approval_url: "http://localhost:3000/main/Internet/Shop/payresult",
          fail_url: "http://localhost:3000/main/Internet/Shop/payresult",
          cancel_url: "http://localhost:3000/main/Internet/Shop/payresult",
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
        // 응답 data로 state 갱신
        setState({ next_redirect_pc_url, tid });
      });
    },[state]);
  
      const { next_redirect_pc_url} = state;
      console.log('kakao', next_redirect_pc_url);

    return (
        productBox !== undefined ?
        <div style={{overflow:'scroll',height:'500px'}}>
            <img className="products_img" src={productBox.image} style={{width: '100%'}}/>
            <div className="products_title" style={{fontSize: '13px',  margin: '5% 0 3%', lineHeight: '1.8'}}>{productBox.productName}</div>
            <div className="products_price" style={{fontWeight: '700'}}>{productBox.productPrice.toLocaleString()}원</div>
            {/* ye */}
            <a href={ next_redirect_pc_url }>{ next_redirect_pc_url }</a>
            {/* <button onClick={onClick}>Gyeran PAY</button> */}
            
            {/* min */}
            {/* {next_redirect_pc_url !== "" ?
              <Link to={next_redirect_pc_url}>
                결제 수단 : <img style={{width : '150px', height : '50px'}} src="/gayran_pay.png" />
              </Link>
              :<></>
            } */}
            <Link to={next_redirect_pc_url}>
                결제 수단 : <img style={{width : '150px', height : '50px'}} src="/gayran_pay.png" />
            </Link>
            {/* <a href={ next_redirect_pc_url }>{ next_redirect_pc_url }</a> */}
            <button onClick={onClick}>구매하기</button>
            <img className="products_desc" style={{width: '100%'}} src={productBox.productDesc}/>
        </div>
        :
        <></>
    )
}

export default withRouter(ShopItem)
