import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/Main";
import ProductStatus from "./pages/Product/ProductStatus";
import ProductRegister from "./pages/Product/ProductRegister";
import Customer from "./pages/Customer/Customer";
import Payment from "./pages/Payment/Payment";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/product/status" component={ProductStatus} />
        <Route exact path="/product/register" component={ProductRegister} />
        <Route exact path="/customer" component={Customer} />
        <Route exact path="/payment" component={Payment} />
      </Switch>
    </Router>
  );
};

export default Routes;
