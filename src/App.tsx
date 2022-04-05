import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./App.module.scss";
import Product from "./components/Product/Product";
import { getProducts } from "./store/products/productsAction";

function App() {
  const { products, load } = useSelector((a) => a);
  const [available, setAvailable] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (load) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className={style.title}>Explore</h1>
      <p className={style.text}>Buy and sell digital fashion NFT art</p>
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            checked={available}
            onChange={(t) => {
              setAvailable(t.target.checked);
            }}
          />
          In available
        </label>
      </div>
      <div className={style.cards}>
        {available
          ? products
              .filter((p) => p.quantity_available > 0)
              .map((p) => <Product product={p} key={p.product_id} />)
          : products.map((p) => <Product product={p} key={p.product_id} />)}
      </div>
    </div>
  );
}

export default App;
