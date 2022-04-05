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
          <div className={style.created}>created_by</div>
          <div>{product.created_by.display_name}</div>
        </div>

        <img src="/images/card.jpg" alt="" />
        <div className={style.nameBox}>
          <div className={style.type}>{product.type}</div>
          <div className={style.name}>{product.name}</div>
        </div>
      </div>

      <div className={style.card_info}>
        <div>
          <div className={style.disc}>available</div>
          <div>1 of {product.quantity_available}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className={style.disc}>price</div>
          <div className={style.price}>{product.initial_price} ETH</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
