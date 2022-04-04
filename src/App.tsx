import React from 'react';
import { useSelector } from 'react-redux';

import './App.css';

function App() {
  const data =useSelector(a=>a)
  console.log(data)
  return (
    <div className="App">
     app
    </div>
  );
}

export default App;
