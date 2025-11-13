import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, MenuRepository } from "../App";
import { MenuItem } from "../types/MenuItem";
import MenuItemCard from "../components/MenuItemCard";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setItems([...MenuRepository.items]);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prepared Menu</Text>
      <Text style={styles.count}>Total menu items: {items.length}</Text>

      {items.length === 0 ? (
        <Text style={styles.empty}>No menu items yet. Tap + to add.</Text>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <MenuItemCard item={item} />}
        />
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddItem")}
      >
        <Text style={styles.addText}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f6f8fa" },
  title: { fontSize: 24, fontWeight: "600", marginBottom: 8 },
  count: { fontSize: 16, marginBottom: 16 },
  empty: { fontSize: 16, color: "#888" },
  addButton: {
    backgroundColor: "#007bff",
    width: 60,
    height: 60,
    borderRadius: 30,
    position: "absolute",
    bottom: 30,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: { color: "white", fontSize: 28, lineHeight: 28 },
});
