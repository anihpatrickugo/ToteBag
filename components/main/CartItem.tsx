import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import * as UI from "@/components/common"
import { greyColor, primaryColor } from '@/constants/Colors'
import { ACTIONS, useCart } from "@/contexts/CartContext";
import { AntDesign } from '@expo/vector-icons';


 
const CartItem = ({item}: {item: any}) => {

  const [quantity, setQuantity] = React.useState(1)

  const { dispatch } = useCart();


  return (
    <UI.ThemedView style={styles.containner}>
       <View style={{flexDirection: "row", gap: 12}} >
            <Image  style={styles.image} source={item.image}/>

            <View>
               <UI.ThemedText bold size='sm'>{item.name}</UI.ThemedText>
               <UI.ThemedText color={greyColor} size='sm'>off-white | M</UI.ThemedText>
               <UI.ThemedText bold color={primaryColor} size='sm'>${item.price}</UI.ThemedText>
            </View>

       </View>

       <View style={{width: 80, height: 30}}>
          <View style={styles.button}>
             <TouchableOpacity onPress={() => setQuantity(prev => prev - 1)} >
               <AntDesign name="minus" size={24} color={greyColor} />
             </TouchableOpacity>
             <View style={{borderRightWidth: 1, borderLeftWidth: 1, borderColor: greyColor, paddingHorizontal: 6}}>
                <UI.ThemedText color={greyColor} size='sm' bold>{quantity}</UI.ThemedText>
             </View>
             <TouchableOpacity onPress={() => setQuantity(prev => prev + 1)}>
               <AntDesign name="plus" size={24} color={greyColor} />
             </TouchableOpacity>
          </View>
      
          <TouchableOpacity  style={{flexDirection: "row", gap: 16, alignItems: "center", marginTop: 12}} onPress={() =>
                    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: item })}>
              <AntDesign name="delete" size={12} color="black" />
              <UI.ThemedText size='sm' style={{textDecorationLine: "underline"}}>Remove</UI.ThemedText>
         </TouchableOpacity>


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
export default CartItem
