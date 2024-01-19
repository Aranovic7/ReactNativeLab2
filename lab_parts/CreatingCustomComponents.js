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

/* TODO: DEFINE THE CART ITEM COMPONENT HERE */

const CartItem = () => {
  const [grocery, setGrocery] = useState({ milk: 0, bread: 0, eggs: 0 })

  const increaseCount = (item) => {
    setGrocery((grocery) => {
      return { ...grocery, [item]: grocery[item] + 1 }
    })
  }

  const decrementCount = (item) => {
    setGrocery((grocery) => {
      return { ...grocery, [item]: grocery[item] - 1 }
    })
  }
  return (
    <View>
      <CartItemMilk
        grocery={grocery.milk}
        increaseCount={() => increaseCount("milk")}
        decrementCount={() => decrementCount("milk")}
      />
      <CartItemBread
        grocery={grocery.bread}
        increaseCount={() => increaseCount("bread")}
        decrementCount={() => decrementCount("bread")}
      />
      <CartItemEggs
        grocery={grocery.eggs}
        increaseCount={() => increaseCount("eggs")}
        decrementCount={() => decrementCount("eggs")}
      />
    </View>
  )
}

const CartItemMilk = ({ grocery, increaseCount, decrementCount }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Milk: </Text>
      <Button title="-" onPress={decrementCount} />
      <Text>{grocery}</Text>
      <Button title="+" onPress={increaseCount} />
    </View>
  )
}

const CartItemBread = ({ grocery, increaseCount, decrementCount }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Bread:</Text>
      <Button title="-" onPress={decrementCount} />
      <Text>{grocery}</Text>
      <Button title="+" onPress={increaseCount} />
    </View>
  )
}

const CartItemEggs = ({ grocery, increaseCount, decrementCount }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Eggs:</Text>
      <Button title="-" onPress={decrementCount} />
      <Text>{grocery}</Text>
      <Button title="+" onPress={increaseCount} />
    </View>
  )
}

/* Set labPart variable to 5, to view this part of the lab */
export default function CreatingCustomComponents() {
  return (
    <SafeAreaView style={styles.content}>
      <ScrollView>
        <Text style={styles.headerText}>Creating Custom Components</Text>

        <View style={{ ...styles.section, backgroundColor: "#ffeb7a" }}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            Shopping Cart
          </Text>
          {/* TODO: ADD THE CART ITEMS BELOW*/}
          <CartItem />
        </View>
        <View style={styles.section}>
          <Text style={styles.bodyText}>
            <Text style={{ fontWeight: "bold" }}>Your Task: </Text>
            {"\n\n"}
            1. Create a custom component called CartItem. It should have a text
            that displays the item name, and the amount of items with a button
            to increase and decrease the amount.
            {"\n\n"}
            2. Create three cart item components, one for Milk, bread and eggs
            with initial values of 0. Take a look at the 'shopping cart items'
            image in the assets folder to see what it should look like in the
            end.
            {"\n\n"}
            <Text style={{ fontWeight: "bold" }}>Bonus: </Text>Display the total
            number of items in the cart. Think about how you could use a
            dictionary state variable to do this.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
