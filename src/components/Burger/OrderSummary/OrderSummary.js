import React from "react";

import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((ingredient) => {
    return (
      <li key={ingredient}>
        <span style={{ textTransform: "capitalize" }}>{ingredient}</span> :{" "}
        {props.ingredients[ingredient]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the folowing ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue Checkout?</p>
      <Button btnType={"Danger"} clicked={props.disaffirmPurchase}>
        Disaffirm
      </Button>
      <Button btnType={"Success"} clicked={props.continuePurchase}>
        Apply
      </Button>
    </Aux>
  );
};

export default orderSummary;
