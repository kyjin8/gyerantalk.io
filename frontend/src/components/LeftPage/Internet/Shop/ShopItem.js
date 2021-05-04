import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { payReady } from '../../../../api/actions/pay_action';

const ShopItem = ({productBox, querynum}) => {
  const dispatch = useDispatch();
    const [state, setState] = useState({
      // 응답에서 가져올 값들
      next_redirect_pc_url: "",
      tid: "",
      // 요청에 넘겨줄 매개변수들
      params: {
        cid: "TC0ONETIME",
        partner_order_id: "partner_order_id",
        partner_user_id: "partner_user_id",
        // item_name: productBox.title,
        item_name: "choco",
        quantity: 1,
        // total_amount: productBox.productPrice,
        total_amount: 30000,
        tax_free_amount: 0,
        approval_url: "http://localhost:3000/main/Options",
        fail_url: "http://localhost:3000/main/Internet/Shop/Fail",
        cancel_url: "http://localhost:3000/main/Internet/Shop",
      },
    });

    const { next_redirect_pc_url, params } = state;
    // useEffect(() => {
    //     const {params} = state;
    //     axios({
    //         // 프록시에 카카오 도메인을 설정했으므로 결제 준비 url만 주자
    //         // url: "https://kapi.kakao.com/kapi/payment/ready",
    //         url: "/kapi/payment/ready",
    //         // 결제 준비 API는 POST 메소드라고 한다.
    //         method: "POST",
    //         headers: {
    //           // 카카오 developers에 등록한 admin키를 헤더에 줘야 한다.
    //           Authorization: "KakaoAK ca4cd7847b43dd1a89e836e3ce896daf",
    //           "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    //         },
    //         // 설정한 매개변수들
    //         params,
    //       }).then((response) => {
    //         // 응답에서 필요한 data만 뽑는다.
    //         const {
    //           data: { next_redirect_pc_url, tid }
    //         } = response;
    //         console.log(next_redirect_pc_url);
    //   console.log(tid);
    //   // 응답 data로 state 갱신
    //   setState({ next_redirect_pc_url, tid });
    // });
    // }, [])
    //////여기까지 카카오페이////

    const onClick = (e) => {
        axios({
          url: "/v1/payment/ready",
          // 결제 준비 API는 POST 메소드라고 한다.
          method: "POST",
          headers: {
            // 카카오 developers에 등록한 admin키를 헤더에 줘야 한다.
            Authorization: "KakaoAK 2dee8d3f161198cdc441fa1f152f7cac",
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            // "Access-Control-Allow-Origin": "http://localhost:3000",
          },
          // 설정한 매개변수들
          params,
        }).then((response) => {
            // axios(response.next_redirect_pc_url)
          // 응답에서 필요한 data만 뽑는다.
          const {
            data: { next_redirect_pc_url, tid }
          } = response;
          console.log(next_redirect_pc_url);
          console.log(tid);
          // 응답 data로 state 갱신
          setState({ next_redirect_pc_url, tid });
        });

        //디스패치를 쓴다면
        //dispatch(payReady(state, state.params))
        // .then((response)=>{
        //   const {
        //     data: { next_redirect_pc_url, tid }
        //   } = response;
        //   console.log(next_redirect_pc_url);
        //   console.log(tid);
        //   setState({ next_redirect_pc_url, tid });
        // })
    }

    console.log('kakao', next_redirect_pc_url);
    return (
        productBox !== undefined ?
        <div style={{overflow:'scroll',height:'500px'}}>
            <img className="products_img" src={productBox.image} style={{width: '100%'}}/>
            <div className="products_title" style={{fontSize: '13px',  margin: '5% 0 3%', lineHeight: '1.8'}}>{productBox.productName}</div>
            <div className="products_price" style={{fontWeight: '700'}}>{productBox.productPrice.toLocaleString()}원</div>
            <a href={ next_redirect_pc_url }>{ next_redirect_pc_url }</a>
            <button onClick={onClick}>Gyeran PAY</button>
            <img className="products_desc" style={{width: '100%'}} src={productBox.productDesc}/>
        </div>
        :
        <></>
    )
}

export default withRouter(ShopItem)
