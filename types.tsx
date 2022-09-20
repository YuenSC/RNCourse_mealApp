/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  // Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Category: undefined;
  FoodList: { categoryId: string };
  FoodDetail: { mealId: string };
  Modal: undefined;
  NotFound: undefined;
};

export type FoodListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "FoodList"
>;

export type FoodListRouteProps = FoodListScreenProps["route"];

export type FoodDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "FoodDetail"
>;

export type FoodDetailNavProps = FoodDetailScreenProps["navigation"];
export type FoodDetailRouteProps = FoodDetailScreenProps["route"];

export type Category = {
  id: string;
  title: string;
  color: string;
};
