import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import FavouriteButton from "../components/FavouriteButton";
import { MEALS } from "../data/dummy-data";
import { formatDuration } from "../helper";
import { FoodDetailNavProps, FoodDetailRouteProps } from "../types";

const FoodDetailScreen = () => {
  const {
    params: { mealId },
  } = useRoute<FoodDetailRouteProps>();
  const navigation = useNavigation<FoodDetailNavProps>();
  const [isFavourte, setIsFavourte] = useState(false);

  const selectedMeal = MEALS.find((item) => item.id === mealId);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <FavouriteButton
          isFavorite={isFavourte}
          onPress={() => setIsFavourte((prev) => !prev)}
        />
      ),
    });
  }, [isFavourte, navigation]);

  if (!selectedMeal) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View style={styles.subDetailContainer}>
          <Text style={styles.detailText}>
            {formatDuration(selectedMeal.duration)}
          </Text>
          <Text style={styles.detailText}>
            {(selectedMeal.complexity as string).toUpperCase()}
          </Text>
          <Text style={styles.detailText}>
            {(selectedMeal.affordability as string).toUpperCase()}
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>Ingredients</Text>
          {(selectedMeal.ingredients as string[]).map((line) => (
            <Text key={line} style={styles.stepLine}>
              {line}
            </Text>
          ))}
        </View>

        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>Steps</Text>
          {(selectedMeal.steps as string[]).map((line) => (
            <Text key={line} style={styles.stepLine}>
              {line}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default FoodDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: { flex: 1, height: 300 },
  detailContainer: {
    backgroundColor: "black",
    paddingTop: 10,
  },
  title: { color: "white", fontSize: 20, textAlign: "center" },
  subDetailContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  detailText: { color: "white", marginLeft: 10 },
  stepContainer: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    alignSelf: "center",
  },
  stepTitle: {
    color: "white",
    textAlign: "center",
    borderBottomWidth: 3,
    borderBottomColor: "#e2b497",
    marginTop: 6,
    marginBottom: 10,
    paddingBottom: 4,
    width: "100%",
  },
  stepLine: {
    color: "black",
    textAlign: "center",
    marginBottom: 6,
    borderRadius: 6,
    backgroundColor: "#e2b497",
    width: "100%",
  },
});
