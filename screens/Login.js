import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Checkbox from "expo-checkbox";
const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>Login Form</Text>
      <Text style={styles.disc}>
        you can contact us at danishsadpara@gmail.com
      </Text>
      <View style={styles.inputs}>
        <Text style={styles.inputLabels}>Enter your name</Text>
        <TextInput
          style={styles.inputbox}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputs}>
        <Text style={styles.inputLabels}>Enter your password</Text>
        <TextInput
          style={styles.inputbox}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "flex-start",
  },
  mainHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  disc: {
    fontSize: 10,
    opacity: 0.5,
  },
  inputs: {
    marginTop: 20,
    marginHorizontal: 10,
    fontSize: 14,
  },
  inputLabels: {
    opacity: 0.5,
    fontSize: 10,
  },
  inputbox: {
    borderWidth: 0.5,
    borderColor: "black",
    // borderRadius: 5,
    // marginTop: 10,
    padding: 3,
    fontSize: 10,
    opacity: 0.5,
  },
});
