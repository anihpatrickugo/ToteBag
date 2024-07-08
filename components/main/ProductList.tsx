import React from 'react'
import {View,  StyleSheet, FlatList } from 'react-native'
import * as UI from '@/components/common/index'
import ProductItem from './ProductItem'
import { Colors} from '@/constants/Colors'
import { ItemProp} from '@/constants/Items'



const ProductList = ({items}: {items: ItemProp[]}) => {
  return (
    <UI.ThemedView style={styles.stepContainer}>
        {/* title */}
      <View style={styles.title}>
        <UI.ThemedText size="lg" bold>Featured Restuarants</UI.ThemedText>
        <UI.ThemedText size="md" color={Colors.light.icon}>View all </UI.ThemedText>
     </View>  

     {/* list  */}
     <FlatList
       data={items}
       contentContainerStyle={{justifyContent: "space-between", gap: 12}}
       renderItem={({item, index}) => (<ProductItem item={item} key={index}/>)}
       keyExtractor={(item) => item.id.toString()}
       horizontal
       showsHorizontalScrollIndicator={false}
     />

  </UI.ThemedView>
  )
}


const styles = StyleSheet.create({
    stepContainer: {
        width: "100%",
        marginVertical: 8,
        gap: 16,
        marginBottom: 8,
    },
    
    title: {
        flexDirection: "row", 
        justifyContent: "space-between",
    },
    
})

export default ProductList
