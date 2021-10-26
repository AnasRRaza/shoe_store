import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import About from '../Components/About';
import Error from '../Components/Error';
import Footer from '../Components/Footer';
import Home from '../Components/Home';
import Navbar from '../Components/Navbar';
import Product from '../Components/Product';
import ProductItem from '../Components/ProductItem';

const Routing = () => {

  const [isAuthPage, setIsAuthPage] = useState(true);

  return (
    <Router>
      {isAuthPage ?
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/about" component={About} /> */}
            <Route exact path="/product" component={Product} />
            <Route path="/product/:id" component={ProductItem} />
          </Switch>
          <Footer />
        </div> :
        <Switch>
          <Route path="*">
            <Error setIsAuthPage={setIsAuthPage} />
          </Route>
        </Switch>}
    </Router>
  )
}

export default Routing;
