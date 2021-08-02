import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeFeature from './app/features/Home';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import AboutFeature from './app/features/About';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Config route here */}
      <Switch>
        <Redirect from="/home" to="/" />
        <Route path="/about" component={AboutFeature} />
        <Route path="/" component={HomeFeature} />        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
