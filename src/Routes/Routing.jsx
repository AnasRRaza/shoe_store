import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import About from '../Components/About';
import Footer from '../Components/Footer';
import Home from '../Components/Home';
import Navbar from '../Components/Navbar';
import Product from '../Components/Product';
import ProductItem from '../Components/ProductItem';

const Routing = () => {


  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/about" component={About} /> */}
          <Route exact path="/product" component={Product} />
          <Route path="/product/:id" component={ProductItem} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default Routing;
