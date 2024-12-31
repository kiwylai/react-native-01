import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.paragraph}>
        This app is designed as a simple practice project to demonstrate the
        basics of React Native. Explore, experiment, and learn how to create
        amazing mobile applications with ease!
      </Text>

      <Text style={styles.paragraph}>
        The app allows you to add pictures and emojis, you can also take a
        screenshot and save it in your phone/computer. Enjoy your journey!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#25292e",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    color: "#fff",
  },
});
