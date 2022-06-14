import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";
import FilterSwitch from "../components/FilterSwitch";

const FilterScreen = (props) => {
  const { navigation } = props;

  const [isGluttenFree, setIsGluttenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = () => {
    const appliedFilters = {
      glutenFree: isGluttenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    console.log(appliedFilters);
  };

  /*   useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]); */

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Filter Screen</Text>
      <FilterSwitch
        title="Glutten-Free"
        state={isGluttenFree}
        onChange={(newValue) => setIsGluttenFree(newValue)}
      />
      <FilterSwitch
        title="Lactose-Free"
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        title="Vegan"
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        title="Vegetarian"
        state={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
});

export default FilterScreen;
