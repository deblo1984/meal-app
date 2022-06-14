import React, { useLayoutEffect } from "react";
import { Platform } from "react-native";

import Colors from "../constants/Colors";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealScreen = (props) => {
  //get route params
  const { categoryId } = props.route.params;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryId.indexOf(categoryId) >= 0
  );

  //set header title
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: selectedCategory ? selectedCategory.title : "No Title",
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor: Platform.OS === "android" ? Colors.textColor : "",
    });
  });
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealScreen;
