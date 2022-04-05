import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Product from './components/Product/Product';
import { getProducts } from './store/products/productsAction';


function App() {
  const {products, load}=useSelector(a=>a)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getProducts())
  }, [dispatch])

  if (load) {return <div>Loading...</div>}

 
  return (
    <div className="container">
      <h1 className='title'>Explore</h1>
      <p className='text'>Buy and sell digital fashion NFT art</p>
    <div className='cards'>
    {products.map(p=><Product product={p}  key={p.product_id}/>)}
    </div>
     
    </div>
  );
}

export default App;
