import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParamList";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const HomePage = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const goToTaskList = () => {
    navigation.navigate("TaskList");
  };

  return (
    <ImageBackground
      source={{ uri: "../assets/bg.jpg" }}
      style={styles.backgroundImage}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.3)", "transparent"]}
        style={styles.gradient}
      >
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome to Your To-Do App</Text>
          <Text style={styles.subText}>Organize your tasks beautifully</Text>

          <TouchableOpacity style={styles.button} onPress={goToTaskList}>
            <LinearGradient
              colors={["#6a11cb", "#2575fc"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.buttonBackground}
            >
              <Icon name="list" size={24} color="#fff" />
              <Text style={styles.buttonText}>Go to Task List</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  welcomeText: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subText: {
    fontSize: 18,
    color: "#ddd",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
  },
  buttonBackground: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: 25,
    paddingHorizontal: 20,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
  },
});

export default HomePage;
