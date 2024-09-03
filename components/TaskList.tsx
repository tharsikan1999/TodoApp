import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import useTodoStore from "../store/userSlice";

const TaskList = () => {
  const { tasks, deleteTask, editTask, toggleTaskCompletion } = useTodoStore(
    (state) => ({
      tasks: state.tasks,
      deleteTask: state.deleteTask,
      editTask: state.editTask,
      toggleTaskCompletion: state.toggleTaskCompletion,
    })
  );

  const handleDelete = (id: string) => {
    Alert.alert("Delete Task", "Are you sure you want to delete this task?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", onPress: () => deleteTask(id) },
    ]);
  };

  const handleEdit = (id: string, currentText: string) => {
    Alert.prompt(
      "Edit Task",
      "Enter new task description:",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Update",
          onPress: (newText) => {
            if (newText && newText.trim()) {
              editTask(id, newText);
            }
          },
        },
      ],
      "plain-text",
      currentText
    );
  };

  const handleToggleCompletion = (id: string) => {
    toggleTaskCompletion(id);
  };

  return (
    <View style={styles.container}>
      {tasks.length === 0 ? (
        <Text style={styles.noTasks}>No tasks available</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.taskContainer}>
              <TouchableOpacity
                style={styles.taskItem}
                onPress={() => handleToggleCompletion(item.id)}
                onLongPress={() => handleEdit(item.id, item.text)}
              >
                <Text
                  style={item.completed ? styles.completed : styles.pending}
                >
                  {item.text}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(item.id)}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.noTasks}>No tasks available</Text>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    width: "100%",
    paddingTop: 50,
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 10,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  taskItem: {
    flex: 1,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "green",
    fontSize: 16,
  },
  pending: {
    color: "black",
    fontSize: 16,
  },
  deleteButton: {
    padding: 10,
    backgroundColor: "#f00",
    borderRadius: 5,
  },
  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },
  noTasks: {
    textAlign: "center",
    fontSize: 18,
    color: "#888",
  },
});

export default TaskList;
