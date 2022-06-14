import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "../constants/Colors";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { DrawerActions } from "@react-navigation/native";
import CategoriesScreen from "../screens/CategoriesScreen";

const stack = createStackNavigator();

const MealsNavigator = (props) => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Home"
        component={CategoriesScreen}
        options={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "",
          },
          headerTintColor: Platform.OS === "android" ? Colors.textColor : "",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="drawer"
                iconName="ios-menu"
                iconSize={24}
                onPress={() => {
                  props.navigation.dispatch(DrawerActions.toggleDrawer());
                }}
              />
            </HeaderButtons>
          ),
        }}
      />
      <stack.Screen name="CategoryMeals" component={CategoryMealScreen} />
      <stack.Screen name="MealDetail" component={MealDetailScreen} />
    </stack.Navigator>
  );
};
export default MealsNavigator;
