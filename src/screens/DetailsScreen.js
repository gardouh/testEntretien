import React from "react";
import { View, Text } from "react-native";

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Détails du Quiz</Text>
      <Text>Score:</Text>
      <Text>Pourcentage %</Text>
    </View>
  );
};

export default DetailsScreen;
