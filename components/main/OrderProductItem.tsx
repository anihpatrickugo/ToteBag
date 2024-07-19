import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import * as UI from "@/components/common"
import { greyColor, primaryColor } from '@/constants/Colors'
import { ACTIONS, useCart } from "@/contexts/CartContext";
import { AntDesign } from '@expo/vector-icons';


 
const OrderProductItem = ({item}: {item: any}) => {

  const [quantity, setQuantity] = React.useState(1)


  return (
    <UI.ThemedView style={styles.containner}>
       <View style={{flexDirection: "row", gap: 12}} >
            <Image  style={styles.image} source={item.image}/>

            <View>
               <UI.ThemedText bold size='sm'>{item.name}</UI.ThemedText>
               <UI.ThemedText color={greyColor} size='sm'>QTY:   {item.quantity}</UI.ThemedText>
               <UI.ThemedText bold color={primaryColor} size='sm'>${item.price}</UI.ThemedText>
            </View>

       </View>

   </UI.ThemedView>
  )
}

const styles = StyleSheet.create({
  containner: {
    flexDirection: "row",
    width: "100%",
      justifyContent: "space-between",
      marginRight: 20,
      gap: 8
  },

  image: {
      height: 60,
      width: 57,
      borderRadius: 8,
  },

  button: {
    flexDirection: "row", 
    justifyContent: "space-between",
     borderWidth: 1, 
     borderColor: greyColor,
     borderRadius: 8,

  }

})
export default OrderProductItem
