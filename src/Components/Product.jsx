import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Shoes from '../shoes.json'
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1100,
    margin: '50px auto',
    minHeight: "100%",
    marginTop: "80px",
  },
  paper: {
    backgroundColor: '#F5F5F5',
    margin: '20px',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },
  imgSize: {
    width: '200px',
    height: '200px',
    margin: 0,
    marginTop: "6px",
  },
  link: {
    textDecoration: 'none',
  },
  productName: {
    display: "inline",
    fontSize: "22px",
    margin: "5px 10px",
  },
}));

export default function Product() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(Shoes).map(keyName => {
          const shoe = Shoes[keyName];
          return (
            <Grid item xs={12} sm={6} md={4} key={keyName}>
              <Link to={`/product/${keyName}`} className={classes.link}>
                <Paper className={classes.paper} elevation={3}>
                  <h1 className={classes.productName}>{shoe.name}</h1>
                  <img src={shoe.img} alt="shoe" className={classes.imgSize} />
                  <h2>${shoe.price}</h2>
                </Paper>
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}
