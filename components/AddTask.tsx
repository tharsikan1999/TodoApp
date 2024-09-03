import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import useTodoStore from "../store/userSlice";

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const addTask = useTodoStore((state) => state.addTask);

  const handleAddTask = () => {
    if (taskDescription.trim()) {
      addTask({
        id: Date.now().toString(),
        text: taskDescription,
        completed: false,
      });
      setTaskDescription("");
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setModalVisible(true)}
      >
        <Icon name="add" size={24} color="#fff" />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Enter task description"
              value={taskDescription}
              onChangeText={setTaskDescription}
            />
            <View style={styles.buttonContainer}>
              <Button title="Add Task" onPress={handleAddTask} />
              <Button
                title="Cancel"
                onPress={() => setModalVisible(false)}
                color="#f00"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
    width: "100%",
    backgroundColor: "#f5f5f5",
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default AddTask;
