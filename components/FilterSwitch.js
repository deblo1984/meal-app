import React from "react";
import { Platform, StyleSheet, Switch, Text, View } from "react-native";
import Colors from "../constants/Colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === "android" ? Colors.accentColor : ""}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 5,
  },
});

export default FilterSwitch;
