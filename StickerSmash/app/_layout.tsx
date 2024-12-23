import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Sticker Smash",
          headerLeft: () => <></>,
        }}
      />
      <Stack.Screen name="about" options={{ headerTitle: "About" }} />
      <Stack.Screen name="notFound" options={{ headerTitle: "Not found" }} />
    </Stack>
  );
}
