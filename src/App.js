import React from 'react'
import { GlobalStyle } from "./style/global";
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import Confirmation from './pages/Confirmation/Confirmation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/confirmation" element={<Confirmation />}/>
            
          <Route path="/checkout" element={<Checkout />}/>
            
          <Route path="/*" element={<Home />}/>
            
        </Routes>
      </BrowserRouter>
  );
}

export default App;
