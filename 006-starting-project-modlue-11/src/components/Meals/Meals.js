import { Fragment } from "react";
import AvalilableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvalilableMeals />
    </Fragment>
  );
};

export default Meals;
