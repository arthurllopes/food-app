import React from 'react'
import { GlobalStyle } from "./style/global";
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import Confirmation from './pages/Confirmation/Confirmation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path="/confirmation">
            <Confirmation />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path={"/"}>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
