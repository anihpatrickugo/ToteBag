import React from 'react'
import {View,  StyleSheet, FlatList } from 'react-native'
import * as UI from '@/components/common/index'
import CartItem from './CartItem'



const CartList = ({items}: {items: any}) => {
  return (
    <View style={styles.stepContainer}>

     {/* list  */}
     <FlatList
          data={items}
          contentContainerStyle={{gap: 20}}
          renderItem={({item, index}) => (<CartItem item={item} key={index}/>)}
           keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
      />

  </View>
  )
}


const styles = StyleSheet.create({
    stepContainer: {
        width: "100%",
        marginVertical: 8,
        gap: 16,
        marginBottom: 8,
    },

    
})

export default CartList
