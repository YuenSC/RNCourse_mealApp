import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const CategorySelectionScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        renderItem={({ item }) => {
          return (
            <Pressable
              android_ripple={{ color: "#ccc" }}
              style={({ pressed }) => [
                styles.category_container,
                {
                  backgroundColor: item.color,
                  ...(Platform.OS === "ios" && { opacity: pressed ? 0.75 : 1 }),
                },
              ]}
              onPress={() => {
                navigation.navigate("FoodList", { categoryId: item.id });
              }}
            >
              <Text style={styles.category_text}>{item.title} </Text>
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default CategorySelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  category_container: {
    margin: 10,
    flex: 1,
    aspectRatio: 1,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  category_text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
