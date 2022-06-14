import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import DrawNavigator from "./navigation/DrawNavigator";

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  });
};

export default function App() {
  return (
    <NavigationContainer>
      <DrawNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
