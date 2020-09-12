import React from "react";

import Aux from "../../../hoc/Auxiliary";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((ingredient) => {
    return (
      <li key={ingredient}>
        <span style={{textTransform: 'capitalize'}}>{ingredient}</span> : {props.ingredients[ingredient]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the folowing ingredients</p>
      <ul>{ingredientSummary}</ul>
      <button onClick={props.decidePurchase}>Continue Checkout?</button>
    </Aux>
  );
};

export default orderSummary;
