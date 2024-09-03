import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./components/HomePage";
import TaskList from "./components/TaskList";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TaskList"
          component={TaskList}
          options={{ title: "Your Tasks" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
