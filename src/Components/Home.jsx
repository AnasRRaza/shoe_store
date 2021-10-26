import { Button } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

  const btnStyle = {
    backgroundColor: "#000",
    borderRadius: "8px"
  }

  return (
    <div className="home">
      <div className="bg">
      </div>
        <div className="text">
          <h1>Welcome to ABC Shoe Store</h1>
          <Button className="btn" variant="contained" color="primary" style={btnStyle}>
            <Link to="/product">
              Buy Now
            </Link>
          </Button>
        </div>
    </div >
  )
}

export default Home;
