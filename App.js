import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Redux</Text>
      <Text style={styles.question}>What is Redux</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 103,
    color: "white",
    fontWeight: "bold",
  },
  question: {
    color: "white",
    letterSpacing: 10,
    fontSize: 23,
  },
});
