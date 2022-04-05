import React, { FC } from "react";
import { ProductType } from "../../store/products/productsReduser";

import style from "./Product.module.scss";

type PropsType = {
  product: ProductType;
};

const Product: FC<PropsType> = ({ product }) => {
  console.log(product);
  return (
    <div className={style.card}>
      <div className={style.imgBox}>
        <div className={style.created_by}>
          <div>created_by</div>
          <div>{product.created_by.display_name}</div>
        </div>

        <img src="/images/card.jpg" alt="" />
      </div>

      <div className="card_info">{product.latest_price}</div>
    </div>
  );
};

export default Product;
