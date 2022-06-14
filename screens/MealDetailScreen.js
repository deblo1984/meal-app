import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import Colors from "../constants/Colors";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

function MealDetailScreen(props) {
  const { mealId } = props.route.params;
  const selecttedMeals = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: selecttedMeals ? selecttedMeals.title : "No title",
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor: Platform.OS === "android" ? Colors.textColor : "",
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="favorite"
            iconName="ios-star"
            iconSize={24}
            onPress={() => {
              console.log("berhasil");
            }}
          />
        </HeaderButtons>
      ),
    });
  });

  const ListItem = (props) => {
    return (
      <View style={styles.listItem}>
        <Text>{props.children}</Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <Image source={{ uri: selecttedMeals.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selecttedMeals.duration}</Text>
        <Text>{selecttedMeals.complexity.toUpperCase()}</Text>
        <Text>{selecttedMeals.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selecttedMeals.ingredients.map((ingredient, index) => (
        <ListItem key={index}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selecttedMeals.steps.map((step, index) => (
        <ListItem key={index}>{step}</ListItem>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
export default MealDetailScreen;
