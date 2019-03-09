import React, { Component } from "react";

import Aux from "./../../higher_order/DIV";
class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <div>Burger</div>
        <div>Build Contrtols</div>
      </Aux>
    );
  }
}


export default BurgerBuilder;