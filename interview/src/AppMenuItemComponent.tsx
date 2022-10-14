import ListItem from "@mui/material/ListItem";
import React, { forwardRef } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

export interface AppMenuItemComponentProps {
  className?: string;
  link?: string | null; // because the InferProps props allows alows null value
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children: any;
}

export const AppMenuItemComponent: React.FC<AppMenuItemComponentProps> = ({
  className,
  onClick,
  link,
  children,
}) => {
  // If link is not set return the orinary ListItem
  if (!link || typeof link !== "string") {
    return (
      <ListItem
        button
        className={className}
        children={children}
        onClick={onClick}
      />
    );
  }

  // Return a LitItem with a link component
  return (
    <ListItem
      button
      className={className}
      children={children}
      component={forwardRef((props: NavLinkProps, ref: any) => (
        <NavLink {...props} />
      ))}
      to={link}
    />
  );
};
