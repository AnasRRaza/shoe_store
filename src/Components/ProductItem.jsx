import React from 'react';
import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router';
import Shoes from '../shoes.json';

const useStyles = makeStyles((theme) => ({
  item: {
    [theme.breakpoints.down('xs')]: {
      width: "100%",
    },
  },
  productCard: {
    margin: "40px",
    marginTop: "100px",
    borderRadius: "20px",
    padding: "5px",
    backgroundColor: "#F6F6F6",
    [theme.breakpoints.down('xs')]: {
      margin: "0 20px",
      marginTop: "120px",
      marginBottom: "100px",
    },
  },
  productName: {
    textAlign: "center",
    padding: "20px",
    [theme.breakpoints.down('xs')]: {
      fontSize: "22px"
    },
  },
  itemImg: {
    width: "500px",
    height: "500px",
    [theme.breakpoints.down('xs')]: {
      width: "100%",
      height: "250px"
    },
  },
  buy: {
    display: "flex",
    justifyContent: "space-around",
    padding: "12px",
    [theme.breakpoints.down('xs')]: {
      flexDirection: "column"
    },
  },
  price: {
    [theme.breakpoints.down('xs')]: {
      fontSize: "22px",
      textAlign: "center",
    },
  },
  cartBtn: {
    backgroundColor: "#0F0F0F",
    [theme.breakpoints.down('xs')]: {
      margin: "8px 5px",
    },
  },
}));
const ProductItem = () => {

  const classes = useStyles();

  const { id } = useParams()
  const shoe = Shoes[id]

  const msg = () => {
    alert("Functionallity will be added later");
  }

  return (
    <>
      <div div className={classes.item}>
        <Paper elevation={3} className={classes.productCard}>
          <h1 className={classes.productName}>{shoe.name}</h1>
          <img src={shoe.img} alt="shoe" className={classes.itemImg} />
          <div className={classes.buy}>
            <h1 className={classes.price}>Price: {shoe.price}.00 $</h1>
            <Button className={classes.cartBtn} variant="contained" color="primary" onClick={msg}>
              Add to Cart
            </Button>
          </div>
        </Paper>
      </div>
    </>
  )
}

export default ProductItem;
