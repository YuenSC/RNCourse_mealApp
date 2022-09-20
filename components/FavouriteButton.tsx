import { FontAwesome } from "@expo/vector-icons";
import React, { FC } from "react";
import { Pressable, Text } from "react-native";

const FavouriteButton: FC<{ isFavorite: boolean; onPress: () => void }> = ({
  isFavorite,
  onPress,
}) => {
  console.log("FavouriteButton");
  return (
    <Pressable onPress={onPress}>
      <Text>
        {isFavorite ? (
          <FontAwesome name="star" size={24} color="yellow" />
        ) : (
          <FontAwesome name="star-o" size={24} color="yellow" />
        )}
      </Text>
    </Pressable>
  );
};

export default FavouriteButton;
