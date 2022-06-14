import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
const FavoriteNavigator = () => {
  const stack = createStackNavigator();

  return (
    <stack.Navigator>
      <stack.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "",
          },
          headerTitle: "Your Favorites",
          headerTintColor: Platform.OS === "android" ? Colors.textColor : "",
        }}
      />
      <stack.Screen name="MealDetail" component={MealDetailScreen} />
    </stack.Navigator>
  );
};

export default FavoriteNavigator;
