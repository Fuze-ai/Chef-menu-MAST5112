import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AddItemScreen from "./screens/AddItemScreen";
import { MenuItem } from "./types/MenuItem";

export type RootStackParamList = {
  Home: undefined;
  AddItem: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MenuRepository: { items: MenuItem[] } = { items: [] };

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Chef Menu" }} />
        <Stack.Screen name="AddItem" component={AddItemScreen} options={{ title: "Add Menu Item" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
