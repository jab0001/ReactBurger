import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const navigationItems = (props) => {
  return (
    <div>
      <ul className={classes.NavigationItems}>
          <NavigationItem link="/" active>Burger Builder</NavigationItem>
          <NavigationItem link="/">Checkout</NavigationItem>
      </ul>
    </div>
  );
};

export default navigationItems;
