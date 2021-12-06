import "react-native-gesture-handler";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeStack from "./routes/HomeStack";
import { ThemeProvider } from "react-native-elements";

import theme from "./theme";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <NavigationContainer>
          <HomeStack />
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2d3134",
    paddingTop: StatusBar.currentHeight + 10,
    flex: 1,
  },
});
