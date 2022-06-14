import { DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";

import FilterScreen from "../screens/FilterScreen";
const FilterNavigator = (props) => {
  //const { save } = props.routes.params;
  const stack = createStackNavigator();

  return (
    <stack.Navigator>
      <stack.Screen
        name="Filter"
        component={FilterScreen}
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
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="drawer"
                iconName="ios-save-outline"
                iconSize={24}
                onPress={() => {
                  console.log(props);
                }}
              />
            </HeaderButtons>
          ),
        }}
      />
    </stack.Navigator>
  );
};

export default FilterNavigator;
