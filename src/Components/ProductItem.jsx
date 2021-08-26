import { Paper } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router';
import Shoes from '../shoes.json';

const ProductItem = () => {

  const { id } = useParams()
  const shoe = Shoes[id]
  console.log(shoe)
  return (
    <div className="item">
      <Paper elevation={3}>
        <h1>{shoe.name}</h1>
        <img src={shoe.img} alt="shoe" className="itemImg" />
      </Paper>
    </div>
  )
}

export default ProductItem;
