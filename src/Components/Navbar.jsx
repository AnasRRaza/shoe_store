// IMPORTING APIS
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white",
  },
  navbar: {
    backgroundColor: "rgb(15, 15, 15)",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    color: "white",
  },
  titleLink: {
    textDecoration: "none",
    color: "white",
  },
  navItem: {
    color: "white",
    fontSize: "16px"
  },
  menu: {
  },

}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = (props) => {
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar className={classes.navbar}>
          <Toolbar>
            <Typography
              variant="h5"
              component="p"
              color="textSecondary"
              className={classes.title}
            >
              <Link to="/" className={classes.titleLink}>
                Shoe Store
              </Link>
            </Typography>
            {isMobile ? (
              <>
                <IconButton
                  color="textPrimary"
                  className={classes.menuButton}
                  edge="start"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon className={classes.menuIcon} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchor}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  KeepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                >
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/"
                  >
                    <Typography variant="h6"> Home</Typography>
                  </MenuItem>
                  {/* <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/about"
                  >
                    <Typography variant="h6"> About Us </Typography>
                  </MenuItem> */}
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/product"
                  >
                    <Typography variant="h6"> Products</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <div style={{ marginRight: "2rem" }}>
                <Button
                  variant="text"
                  component={Link}
                  to="/"
                  color="default"
                  className={classes.navItem}
                >
                  Home
                </Button>
                {/* <Button
                  variant="text"
                  component={Link}
                  to="/about"
                  color="default"
                  className={classes.navItem}
                >
                  About Us
                </Button> */}
                <Button
                  variant="text"
                  component={Link}
                  to="/product"
                  color="default"
                  className={classes.navItem}
                >
                  Products
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};

export default Navbar;
