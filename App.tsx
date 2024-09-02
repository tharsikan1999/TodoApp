import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Todo App</Text>
      <TaskList />
      <AddTask />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
