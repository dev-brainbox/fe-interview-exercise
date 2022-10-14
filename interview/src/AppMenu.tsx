import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import { AppMenuItem } from "./AppMenuItem";
import List from "@mui/material/List";
import { makeStyles } from "@mui/styles";
import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import clsx from "clsx";
import Container from "@mui/material/Container";
import CalculateIcon from "@mui/icons-material/Calculate";
import InventoryIcon from "@mui/icons-material/Inventory";

const appMenuItems = [
  {
    name: "Dashboard",
    link: "/dashboard",
    Icon: DashboardIcon,
  },
  {
    name: "Product list",
    link: "/products",
    Icon: InventoryIcon,
  },
  {
    name: "Customers",
    link: "/customers",
    Icon: PeopleIcon,
  },
  {
    name: "Calculator",
    link: "/calculator",
    Icon: CalculateIcon,
  },
];

export const AppMenu: React.FC = () => {
  // eslint-disable-next-line  @typescript-eslint/no-use-before-define
  const classes = useStyles();

  return (
    <div className={clsx("App", classes.root)}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <List component="nav" className={classes.appMenu} disablePadding>
          {appMenuItems.map((item, index) => (
            <AppMenuItem {...item} key={index} />
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Outlet />
        </Container>
      </main>
    </div>
  );
};

// const drawerWidth = 240;

// const useStyles = makeStyles({
//   appMenu: {
//     width: "100%",
//   },
//   navList: {
//     width: drawerWidth,
//   },
//   menuItem: {
//     width: drawerWidth,
//   },
//   menuItemIcon: {
//     color: "#97c05c",
//   },
// });

const drawerWidth = 240;

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  appMenu: {
    width: "100%",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    paddingTop: "24px",
    paddingBottom: "24px",
    background: "#535454",
    color: "#fff",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: "24px",
    paddingBottom: "24px",
  },
});
