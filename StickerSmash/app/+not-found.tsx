import { Link, Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Oops! Not found!",
        }}
      />
      <View style={styles.container}>
        <Link href={"/"} style={styles.button}>
          Back to Home screen
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "white",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
