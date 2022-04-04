import React, { FC } from 'react';
import { ProductType } from '../store/products/productsReduser';
import  './Product.css'
type PropsType={
    product: ProductType
}

const  Product: FC<PropsType> =({product})=> {
    
    return (
        <div className='card'>
            <div className=''>
                 <img src="/images/card.jpg" alt="" />
            </div>
            <div className='card_info'>
                {product.latest_price}
            </div>
        </div>
    );
}

export default Product;