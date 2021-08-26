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
  },
  paper: {
    backgroundColor: 'lightGray',
    margin: '20px',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  imgSize: {
    width: '200px',
    height: '200px'
  },
  link: {
    textDecoration: 'none',
  }
}));

export default function Product() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(Shoes).map(keyName => {
          const shoe = Shoes[keyName];
          return (
            <Grid item xs={12} sm={4} key={keyName}>
              <Link to={`/product/${keyName}`} className={classes.link}>
                <Paper className={classes.paper} elevation={3}>
                  <h1>{shoe.name}</h1>
                  <img src={shoe.img} alt="shoe" className={classes.imgSize} />
                </Paper>
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}
