import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
const Login = () => {
  const [Agree, setAgree] = useState(false);
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
      <View style={styles.wrapper}>
        <Checkbox
          value={Agree}
          onValueChange={() => setAgree(!Agree)}
          color={Agree ? "cyan" : undefined}
        />
        <Text style={styles.wrapperText}>
          I have read and agreed with this.
        </Text>
      </View>
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: Agree ? "cyan" : "grey",
          },
        ]}
        disabled={!Agree}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    // alignItems: "center",
    alignContent: "center",
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
  wrapper: {
    marginTop: 10,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  buttonStyle: {
    marginTop: 10,
    padding: 5,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
