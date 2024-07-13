import React from 'react'
import { View, Pressable, StyleSheet, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import * as UI from '@/components/common/index'
import { Colors, greyColor, primaryColor } from '@/constants/Colors';
import { ACTIONS, useCart } from "@/contexts/CartContext";
import { Link, useNavigation, router } from 'expo-router';

const ProductItem = ({item}: {item: any}) => {

  const { products, dispatch } = useCart();

  const isInCart = products.find((prod: any) => prod.id == item.id);


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

       <View style={{width: 80}}>
       {!isInCart ? (
            <UI.Button text='Add' variant='coloured' onPress={() =>
                    dispatch({ type: ACTIONS.ADD_TO_CART, payload: item })}/>
                    
                  ) : (
            <UI.Button text='Remove' variant='coloured' onPress={() =>
                    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: item })}/>

          )}
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

   
    
})

export default ProductItem
