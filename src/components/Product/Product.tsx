import React, { FC } from 'react';
import { ProductType } from '../../store/products/productsReduser';

import style from './Product.module.scss';

type PropsType={
    product: ProductType
}

const  Product: FC<PropsType> =({product})=> {
    
    return (
        <div className={style.card}>
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