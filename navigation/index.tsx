/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategorySelectionScreen from "../screens/CategorySelectionScreen";
import FoodDetailScreen from "../screens/FoodDetailScreen";
import FoodListScreen from "../screens/FoodListScreen";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Category"
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          color: "white",
        },
      }}
    >
      <Stack.Screen
        name="Category"
        component={CategorySelectionScreen}
        options={{
          title: "All Categories",
        }}
      />
      <Stack.Screen
        name="FoodList"
        component={FoodListScreen}
        options={({ route }) => {
          const selectedCategory = CATEGORIES.find(
            (item) => item.id === route.params.categoryId
          );
          return {
            title: selectedCategory?.title,
          };
        }}
      />
      <Stack.Screen
        name="FoodDetail"
        component={FoodDetailScreen}
        options={() => {
          return {
            title: "About the meal",
          };
        }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
