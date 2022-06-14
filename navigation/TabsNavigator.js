import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/Colors";
import { Platform } from "react-native";
import MealsNavigator from "./MealsNavigator";
import { Ionicons } from "@expo/vector-icons";
import FavoriteNavigator from "./FavoriteNavigator";

const TabsNavigator = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : "",
          },
          headerTintColor: Platform.OS === "android" ? Colors.accentColor : "",
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="ios-restaurant"
                size={24}
                color={tabInfo.focused ? Colors.accentColor : "#8e8e93"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Favorite"
        component={FavoriteNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="ios-star"
                size={24}
                color={tabInfo.focused ? Colors.accentColor : "#8e8e93"}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
