import React, { useContext } from "react";
import { AppBar, Toolbar, Grid, IconButton, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import myContext, { setAuth, OpenMenu } from "../MyContext.js";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    backgroundColor: "#fff",
    borderBottom: "1px solid #e0e0e0",
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  const [openMenu, setOpenMenu] = useContext(myContext);
  const [state, setContext] = useContext(myContext);

  // onClick={() => dispatch(OpenMenu(!state.openMenu))}
  return (
    <>
      <div style={{ height: "64px" }} className={classes.root} />
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar className={classes.toolBar}>
          <Grid container>
            <Grid item style={{ marginLeft: -10 }}>
              <IconButton aria-label="open drawer" onClick={() => setOpenMenu(OpenMenu(true))} className={classes.menuButton}>
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs></Grid>
            <Grid item>
              <IconButton>
                <Badge>
                  <NotificationsIcon></NotificationsIcon>
                </Badge>
              </IconButton>
              <IconButton onClick={handleClick}>
                <Badge>
                  <PersonIcon></PersonIcon>
                </Badge>
              </IconButton>
              <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profiel</MenuItem>
                <MenuItem
                  onClick={() => {
                    setContext(setAuth(false));
                    localStorage.clear();
                    axios
                      .post("bos/Logout")
                      .then((res) => {
                        console.log(res);
                      })
                      .catch((err) => {
                        console.error(err);
                      });
                  }}
                >
                  Uitloggen
                </MenuItem>
              </Menu>{" "}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
