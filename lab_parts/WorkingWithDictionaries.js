import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native"
import { styles } from "../styles"
import { useState } from "react"

/* Set labPart variable to 4, to view this part of the lab */
export default function WorkingWithDictionaries() {
  const [grocery, setGrocery] = useState({ onions: 5, garlic: 3, bread: 1 })

  const updateBreadCount = () => {
    setGrocery((grocery) => {
      return { ...grocery, bread: 2 }
    })
  }
  return (
    <SafeAreaView style={styles.content}>
      <ScrollView>
        <Text style={styles.headerText}>Working with Dictionaries</Text>

        <View style={{ ...styles.section, backgroundColor: "#ffeb7a" }}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            Shopping Cart
          </Text>

          <Text style={{ ...styles.bodyText }}>Onions: {grocery.onions}</Text>
          <Text style={{ ...styles.bodyText }}>Garlic: {grocery.garlic}</Text>
          <Text style={{ ...styles.bodyText }}>Bread: {grocery.bread}</Text>
          <Button title="Update bread count to 2" onPress={updateBreadCount} />
        </View>
        <View style={styles.section}>
          <Text style={styles.bodyText}>
            <Text style={{ fontWeight: "bold" }}>Your Task: </Text>
            {"\n"}
            1. Create a dictionary to store the following items in a shopping
            list: 5 onions, 3 garlic, 1 bread
            {"\n\n"}
            2. Use the dictionary you created, to replace the '?' with the
            stored values
            {"\n\n"}
            3. Implement the button press to update the amount of bread in the
            dictionary. It should update the amount on screen when pressed.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
