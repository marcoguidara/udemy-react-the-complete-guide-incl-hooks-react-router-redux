import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvalilableMeals = () => {
  let [meals, setMeals] = useState([]);

  function fetchMealsHandler() {
    fetch(
      "https://react-the-complete-guide-e71c7-default-rtdb.europe-west1.firebasedatabase.app/food-app/meals.json"
    )
      .then((response) => {
        return response.json();
      }).then(meals => setMeals(meals))
  }

  useEffect(fetchMealsHandler, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvalilableMeals;
