import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BuyProduct from "../screens/BuyProduct";
import Buys from "../screens/Buys";

const BuyRoute = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="buyfrontpage" component={Buys} />
      <Stack.Screen name="oneproduct" component={BuyProduct} />
    </Stack.Navigator>
  );
};

export default BuyRoute;
