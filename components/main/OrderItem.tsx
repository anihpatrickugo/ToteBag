import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import * as UI from "@/components/common"
import { greyColor, primaryColor } from '@/constants/Colors'
import { ACTIONS, useCart } from "@/contexts/CartContext";
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';


 
const OrderItem = ({item}: {item: any}) => {
  const products = item.products



  return (
    <TouchableOpacity onPress={()=> router.push({pathname: "/allOrders/[order]", params: {id: item.id, price: item.price, date: item.date, products: JSON.stringify(item.products)}})} style={styles.containner}>
       <UI.ThemedText bold size='sm'>order id: {item.id}</UI.ThemedText>
               <UI.ThemedText color={greyColor} size='sm'>total items: {item.products.length}</UI.ThemedText>
               <UI.ThemedText bold color={primaryColor} size='sm'>${item.price}</UI.ThemedText>
               <UI.ThemedText bold color={primaryColor} size='sm'>Date: {item.date}</UI.ThemedText>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  containner: {
    width: "100%",
      justifyContent: "space-between",
      marginRight: 20,
      gap: 8,
      borderWidth: 1,
      borderColor: primaryColor,
      borderRadius: 8

  },

  

})
export default OrderItem
