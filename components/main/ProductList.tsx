import React, { useEffect } from 'react'
import {View,  StyleSheet, FlatList } from 'react-native'
import * as UI from '@/components/common/index'
import ProductItem from './ProductItem'
import { Colors} from '@/constants/Colors'
import { ItemProp} from '@/constants/Items'



const ProductList = ({items}: {items: ItemProp[]}) => {


  return (
    <UI.ThemedView style={styles.stepContainer}>
     {/* list  */}
     <FlatList
       data={items}
       style={{width: "100%", height: "100%"}}
       contentContainerStyle={{justifyContent: "space-between", gap: 12}}
       renderItem={({item, index}) => (<ProductItem item={item} key={index}/>)}
       keyExtractor={(item) => item.id.toString()}
       showsVerticalScrollIndicator={false}
     />

  </UI.ThemedView>
  )
}


const styles = StyleSheet.create({
    stepContainer: {
        width: "100%",
        marginTop: 8,
        gap: 16,
        flex: 1
    },
    
    title: {
        flexDirection: "row", 
        justifyContent: "space-between",
    },
    
})

export default ProductList
