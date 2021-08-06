import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import HomeFeature from './app/features/Home';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import AboutFeature from './app/features/About';
<<<<<<< HEAD
import ContactFeature from './app/features/Contact';


=======
import StoreFeature from './app/features/Store';
import NewsFeature from './app/features/News';
import ContactFeature from './app/features/Contact';
import CartFeature from './app/features/Contact';
>>>>>>> b810be1bc3e4d822489d8e46e65593eff35ee02f

function App() {
  return (
    <div className="App layout">
      <Header />
      {/* Config route here */}
      <div className="body-content">
        <Switch>
          <Redirect from="/home" to="/" />
<<<<<<< HEAD
          <Route path="/about" component={AboutFeature} />
          <Route path="/contact" component={ContactFeature} />
          <Route path="/" component={HomeFeature} />        
=======
          <Route path="/about" component={AboutFeature} exact />          
          <Route path="/store" component={StoreFeature} exact />
          <Route path="/news" component={NewsFeature} exact/>
          <Route path="/contact" component={ContactFeature} exact/>
          <Route path="/cart" component={CartFeature} />
          <Route path="/" component={HomeFeature} />    
>>>>>>> b810be1bc3e4d822489d8e46e65593eff35ee02f
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
