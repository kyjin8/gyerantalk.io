import React from 'react'
import { withRouter } from 'react-router-dom';

const ShopItem = ({productBox}) => {
    return (
        productBox !== undefined ?
        <div>
            <img className="products_img" src={productBox.image} style={{width: '100%'}}/>
            <div className="products_title" style={{fontSize: '13px',  margin: '5% 0 3%', lineHeight: '1.8'}}>{productBox.productName}</div>
            <div className="products_price" style={{fontWeight: '700'}}>{productBox.productPrice.toLocaleString()}원</div>
            <img className="products_desc" style={{width: '100%'}} src={productBox.productDesc}/>
        </div>
        :
        <></>
    )
}

export default withRouter(ShopItem)
