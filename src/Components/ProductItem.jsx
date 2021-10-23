import React from 'react';
import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router';
import Shoes from '../shoes.json';
import { useTheme, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  productCard: {
    margin: "40px",
    marginTop: "100px",
    borderRadius: "20px",
    padding: "5px",
    [theme.breakpoints.down('sm')]: {

      // margin: 0,
    },
  },
  productName: {
    textAlign: "center",
    padding: "20px",
    [theme.breakpoints.down('sm')]: {
      fontSize: "22px"
    },
  },
  itemImg: {
    width: "500px",
    height: "500px",
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      height: "50%"
    },
  },
  buy: {
    display: "flex",
    justifyContent: "space-around",
    padding: "12px",
  },
  price: {
    [theme.breakpoints.down('sm')]: {
      fontSize: "19px"
    },
  },
}));
const ProductItem = () => {

  const classes = useStyles();
  const theme = useTheme();

  // const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { id } = useParams()
  const shoe = Shoes[id]

  const msg = () => {
    alert("Functionallity will be added later");
  }

  return (
    <>
      <div div className={classes.item} >
        <Paper elevation={3} className={classes.productCard}>
          <h1 className={classes.productName}>{shoe.name}</h1>
          <img src={shoe.img} alt="shoe" className={classes.itemImg} />
          <div className={classes.buy}>
            <h1 className={classes.price}>Price: {shoe.price}.00 $</h1>
            <Button variant="contained" color="primary" onClick={msg} style={{ backgroundColor: "#0F0F0F" }}>
              Add to Cart
            </Button>
          </div>
        </Paper>
      </div>
    </>
  )
}

export default ProductItem;
