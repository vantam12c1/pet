import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import HomeFeature from "./app/features/Home";
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import AboutFeature from "./app/features/About";
import StoreFeature from "./app/features/Store";
import NewsFeature from "./app/features/News";
import ContactFeature from "./app/features/Contact";
import CartFeature from "./app/features/Cart";
import LoginForm from "./app/features/Auth/Login";
import SignUpForm from "./app/features/Auth/Register";

function App() {
  return (
    <div className="App layout">
      <Header />
      {/* Config route here */}
      <div className="body-content">
        <Switch>
          <Redirect from="/home" to="/" />
          <Route path="/about" component={AboutFeature} />
          <Route path="/store" component={StoreFeature} />
          <Route path="/news" component={NewsFeature} />
          <Route path="/contact" component={ContactFeature} />
          <Route path="/cart" component={CartFeature} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={SignUpForm} />
          <Route path="/" component={HomeFeature} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
