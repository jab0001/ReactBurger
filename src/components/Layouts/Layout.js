import React from "react";
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';

const layout = (props) => (
  <Aux>
    <div className= {classes.Content}>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;