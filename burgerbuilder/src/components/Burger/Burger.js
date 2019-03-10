import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  // Object=>default javascript object not provided by react
  //it abstravts the keys of give object and turns it into array of keys

  //mapping th object with array of ingredients
  //list which starts with object afte that it transformed it into an array and further an array of JSX
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })

    //simply flatten this array
    //transforms an array into something else
    // arr=>previous value
    //el=>current  value
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
     // []=>it laso accepts an initial value 
    // initial value of reduced value
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
