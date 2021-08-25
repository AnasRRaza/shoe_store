import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Error from './Components/Error';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Product from './Components/Product';

const Routing = () => {
  return (
    <div>
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="*" component={Error} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default Routing;
