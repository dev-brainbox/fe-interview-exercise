import React from "react";
import { AppMenuItemComponent } from "./AppMenuItemComponent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/styles";

interface AppMenuItemProps {
  name: string;
  link: string;
  Icon: any;
  items?: AppMenuItemProps[];
}

export const AppMenuItem: React.FC<AppMenuItemProps> = ({
  name,
  link,
  Icon,
  items = [],
}) => {
  // eslint-disable-next-line  @typescript-eslint/no-use-before-define
  const classes = useStyles();
  const isExpandable = items && items.length > 0;
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  const MenuItemRoot = (
    <AppMenuItemComponent
      className={classes.menuItem}
      link={link}
      onClick={handleClick}
    >
      {!!Icon && (
        <ListItemIcon className={classes.menuItemIcon}>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />

      {isExpandable && !open && <ExpandMoreIcon />}
      {isExpandable && open && <ExpandLessIcon />}
    </AppMenuItemComponent>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <AppMenuItem {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null;

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  );
};

const useStyles = makeStyles({
  menuItem: {
    "&.active": {
      background: "rgba(0, 0, 0, 0.08)",
      "& .MuiListItemIcon-root": {
        color: "#fff",
      },
    },
  },
  menuItemIcon: {
    color: "#97c05c",
  },
});
