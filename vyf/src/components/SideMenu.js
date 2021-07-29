import React, { useContext } from "react";
import clsx from "clsx";
import { Divider, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText, Collapse, Toolbar, Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import menuList from "../components/MenuList.js";
import myContext, { OpenMenu, setPath } from "../MyContext.js";

const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  listItem: {
    color: theme.palette.text.main,
    paddingLeft: 25,
    paddingRight: 20,
    paddingTop: 10,

    "&:hover": {
      backgroundColor: "#fff",
      color: theme.palette.primary.main,
    },
    "&:hover $icon": {
      backgroundColor: "#fff",
      color: theme.palette.primary.main,
    },
  },

  icon: {},

  drawerPaper: {
    width: drawerWidth,
  },

  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
}));

export const SideMenu = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [state, dispatch] = useContext(myContext);
  const [menuItemsState, editMenuItemsState] = React.useState(
    menuList.reduce((acc, val, index) => {
      acc[index] = false;
      return acc;
    }, {})
  );

  const handleClick = (index) => {
    editMenuItemsState((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const ConditionalWrapper = ({ condition, wrapper, children }) => {
    return condition ? wrapper(children) : children;
  };

  const drawer = (
    <List disablePadding>
      <Toolbar>
        <Grid container>
          <Grid style={{ alignSelf: "center" }} item>
            <img src={"logo.png"} alt="logo" style={{ width: 80 }} />
          </Grid>
        </Grid>
      </Toolbar>
      <Divider />

      {menuList.map((label, index) => {
        const open = menuItemsState[index];
        return (
          <div key={index}>
            {/* <ConditionalWrapper
              condition={label.link}
              wrapper={(children) => (
                <Link to={label.link} onClick={() => dispatch(setPath(label.frameUrl))} style={{ textDecoration: "none" }}>
                  {" "}
                  {children}{" "}
                </Link>
              )}
            > */}
            <ListItem button className={classes.listItem} onClick={() => handleClick(index)} dense>
              <ListItemIcon className={classes.icon}>{label.icon}</ListItemIcon>
              <ListItemText className={classes.listItemText} primary={label.label} />
              {label.pages.length > 1 ? open ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItem>
            {/* </ConditionalWrapper> */}
            {label.pages.map((c, i) => {
              return (
                <Collapse in={open} timeout="auto" unmountOnExit key={i}>
                  <List component="div" disablePadding dense>
                    <Link to={c.link} onClick={() => dispatch(setPath(c.frameUrl))} style={{ textDecoration: "none" }}>
                      <ListItem className={classes.listItem}>
                        <ListItemText inset primary={c.label} />
                      </ListItem>
                    </Link>
                  </List>
                </Collapse>
              );
            })}
          </div>
        );
      })}
    </List>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={state.openMenu}
          onClose={() => dispatch(OpenMenu(!state.openMenu))}
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: state.openMenu,
            [classes.drawerClose]: !state.openMenu,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: state.openMenu,
              [classes.drawerClose]: !state.openMenu,
            }),
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </div>
  );
};
