import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDraw: false,
  };

  sideDrawerCloseHandler = () => {
    this.setState({
      showSideDraw: false,
    });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDraw: !prevState.showSideDraw };
    });
  };

  render() {
    return (
      <Aux>
        <SideDrawer open = {this.state.showSideDraw} closed={this.sideDrawerCloseHandler}/>
        <Toolbar toggleDrawer={this.sideDrawerToggleHandler}/>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
