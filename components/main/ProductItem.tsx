import React from 'react'
import { View, Pressable, StyleSheet, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import * as UI from '@/components/common/index'
import { Colors } from '@/constants/Colors';
import { ACTIONS, useCart } from "@/contexts/CartContext";
import { Link, useNavigation, router } from 'expo-router';

const ProductItem = ({item}: {item: any}) => {

  const { products, dispatch } = useCart();

  const isInCart = products.find((prod: any) => prod.id == item.id);


  return (
   
    <Pressable onPress={()=> router.navigate({pathname: "/[products]", params: {item}})} style={styles.containner}>
       <Image style={styles.image} source={{uri: item.image}}  />     
         <UI.ThemedText size='lg' bold>{item.name}</UI.ThemedText>

         <View style={styles.details}>
            <View  style={styles.detailItem}>
              <MaterialIcons name="money" size={24} color={Colors.light.icon} />
              <UI.ThemedText size="xs" bold>NGN {item.price}</UI.ThemedText>
            </View>

            <View style={styles.detailItem}>
              <MaterialIcons name="punch-clock" size={24} color={Colors.light.icon} />
              <UI.ThemedText size='xs' >30-40 min</UI.ThemedText>
            </View>

         </View>

         {/* categories */}
         <View style={styles.details}>

            <View  style={styles.detailItemCategory}>
              <UI.ThemedText size='md'>Burger</UI.ThemedText>
            </View>

            <View style={styles.detailItemCategory}>
              <UI.ThemedText size='md' >Chicken</UI.ThemedText>
            </View>

            <View style={styles.detailItemCategory}>
              <UI.ThemedText size='md'>Bread</UI.ThemedText>
            </View>

         </View>


         {/* button */}
         <View style={{width: "90%", alignItems: "center"}}>

          {!isInCart ? (
            <UI.Button text='Add to cart' variant='coloured' onPress={() =>
                    dispatch({ type: ACTIONS.ADD_TO_CART, payload: item })}/>
                    
                  ) : (
            <UI.Button text='Remove from cart' variant='coloured' onPress={() =>
                    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: item })}/>

          )}
         </View>


   </Pressable>  
   
  )
}

const styles = StyleSheet.create({
    containner: {
        justifyContent: "space-between",
        marginRight: 20,
        gap: 8
    },

    image: {
        height: 136,
        width: 266,
        borderRadius: 8,
    },

    details: {
        flexDirection: "row", 
        gap: 16,
        alignItems: "center",
    },
    detailItem: {
        flexDirection: "row", 
        gap: 8,
        alignItems: "center",
    },
    detailItemCategory: {
        flexDirection: "row", 
        gap: 8,
        alignItems: "center",
        color: "#8A8E9B",
        backgroundColor: "#F6F6F6",
        padding: 4,
        paddingHorizontal: 8,
        borderRadius: 8,
    },
    
})

export default ProductItem
