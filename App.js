import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount((prevCount) => prevCount + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.main}>React Redux</Text>
      <View style={styles.countContainer}>
        <Text>What is Redux in React Native </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Read About Redux</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    // paddingHorizontal: 10,
  },
  main: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "cyan",
    // marginHorizontal: 105,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  countContainer: {
    alignItems: "center",
    // color: "cyan",
    // paddingHorizontal: 10,
    // marginHorizontal: 105,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: "cyan",
    borderWidth: 2,
    padding: 5,

    // backgroundColor: "blue",
  },
});

export default App;
