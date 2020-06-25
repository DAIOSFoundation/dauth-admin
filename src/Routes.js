import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/Main";
import ProductStatus from "./pages/Product/ProductStatus";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/product/status" component={ProductStatus} />
      </Switch>
    </Router>
  );
};

export default Routes;
