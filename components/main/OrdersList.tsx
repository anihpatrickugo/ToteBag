import React from 'react'
import {View,  StyleSheet, FlatList } from 'react-native'
import OrderItem from './OrderItem'



const OrdersList = ({items}: {items: any}) => {
  return (
    <View style={styles.stepContainer}>

     {/* list  */}
     <FlatList
          data={items}
          contentContainerStyle={{gap: 20}}
          renderItem={({item, index}) => (<OrderItem item={item} key={index}/>)}
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

export default OrdersList
