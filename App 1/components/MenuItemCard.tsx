import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MenuItem } from "../types/MenuItem";

export default function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.dishName}</Text>
      <Text style={styles.course}>{item.course}</Text>
      <Text style={styles.desc}>{item.description}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 14,
    marginBottom: 10,
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  name: { fontSize: 18, fontWeight: "600" },
  course: { color: "#007bff", marginBottom: 4 },
  desc: { color: "#555", marginBottom: 6 },
  price: { fontWeight: "bold" },
});
