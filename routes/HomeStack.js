import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Tabata from "../screens/Tabata";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="Tabata" component={Tabata} />
    </Stack.Navigator>
  );
};

export default HomeStack;
