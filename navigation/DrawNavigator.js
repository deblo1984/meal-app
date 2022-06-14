import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Colors from "../constants/Colors";
import TabsNavigator from "./TabsNavigator";
import FilterNavigator from "./FilterNavigator";
import { Ionicons } from "@expo/vector-icons";

const DrawNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContentOptions={{ activeTintColor: Colors.accentColor }}
    >
      <Drawer.Screen
        name="Home"
        component={TabsNavigator}
        options={{
          title: "Home",
          drawerIcon: () => <Ionicons name="home-outline" size={24} />,
        }}
      />
      <Drawer.Screen
        name="Filter"
        component={FilterNavigator}
        options={{
          title: "Filter",
          drawerIcon: () => <Ionicons name="filter-outline" size={24} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawNavigator;
