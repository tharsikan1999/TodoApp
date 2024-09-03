import { createStackNavigator } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  TaskList: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
