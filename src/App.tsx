import React, { useCallback, useEffect, useMemo, useState } from "react";

import style from "./App.module.scss";
import Product from "./components/Product/Product";
import { useActions } from "./hooks/useActions";
import { useTypeSelector } from "./hooks/useTypeSelector";

function App() {
  const { products, load, error } = useTypeSelector((a) => a.products);

  const [available, setAvailable] = useState<boolean>(false);

  const { getProducts } = useMemo(useActions, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (load) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
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
