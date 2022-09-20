import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { MEALS } from "../data/dummy-data";
import { formatDuration } from "../helper";
import { FoodListRouteProps } from "../types";

const FoodListScreen = () => {
  const navigation = useNavigation();
  const {
    params: { categoryId },
  } = useRoute<FoodListRouteProps>();

  const filteredMeals = MEALS.filter((item) =>
    (item.categoryIds as string[]).includes(categoryId)
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredMeals}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={({ pressed }) => [
                styles.mealContainer,
                { opacity: pressed ? 0.75 : 1 },
              ]}
              onPress={() => {
                navigation.navigate("FoodDetail", { mealId: item.id });
              }}
            >
              <Image
                style={styles.image}
                source={{ uri: item.imageUrl }}
                resizeMode="cover"
              />
              <View style={styles.detailContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.subDetailContainer}>
                  <Text style={styles.detailText}>
                    {formatDuration(item.duration)}
                  </Text>
                  <Text style={styles.detailText}>
                    {(item.complexity as string).toUpperCase()}
                  </Text>
                  <Text style={styles.detailText}>
                    {(item.affordability as string).toUpperCase()}
                  </Text>
                </View>
              </View>
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default FoodListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 40,
  },
  mealContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 40,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  detailContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    flex: 1,
    height: 200,
  },
  title: { fontWeight: "bold", fontSize: 20 },
  subDetailContainer: { marginTop: 10, flexDirection: "row" },
  detailText: { marginLeft: 10 },
});
