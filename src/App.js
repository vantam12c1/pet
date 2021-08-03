import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import HomeFeature from './app/features/Home';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import AboutFeature from './app/features/About';

function App() {
  return (
    <div className="App layout">
      <Header />
      {/* Config route here */}
      <div className="body-content">
        <Switch>
          <Redirect from="/home" to="/" />
          <Route path="/about" component={AboutFeature} />
          <Route path="/" component={HomeFeature} />        
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
