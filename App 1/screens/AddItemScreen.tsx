import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, MenuRepository } from "../App";
import { MenuItem } from "../types/MenuItem";

type Props = NativeStackScreenProps<RootStackParamList, "AddItem">;

export default function AddItemScreen({ navigation }: Props) {
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!dishName.trim()) {
      Alert.alert("Error", "Please enter a dish name");
      return;
    }
    if (!course) {
      Alert.alert("Error", "Please select a course");
      return;
    }
    const priceValue = parseFloat(price);
    if (isNaN(priceValue) || priceValue <= 0) {
      Alert.alert("Error", "Please enter a valid price");
      return;
    }

    const item = new MenuItem(dishName, description, course, priceValue);
    MenuRepository.items.push(item);

    Alert.alert("Success", "Menu item added!");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Picker
        selectedValue={course}
        style={styles.picker}
        onValueChange={(value) => setCourse(value)}
      >
        <Picker.Item label="Select Course" value="" />
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <Button title="Add Item" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  multiline: { height: 80 },
  picker: { borderWidth: 1, borderColor: "#ccc", marginBottom: 12 },
});
