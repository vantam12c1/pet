import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import HomeFeature from './app/features/Home';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import AboutFeature from './app/features/About';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
