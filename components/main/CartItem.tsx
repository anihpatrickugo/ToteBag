import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import * as UI from "@/components/common"
import { Feather, AntDesign } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { ACTIONS, useCart } from "@/contexts/CartContext";


 
const CartItem = ({item}: {item: any}) => {

  const { dispatch } = useCart();


  return (
    <View style={styles.containner}>
      <Image style={{height: 100, width:100, borderRadius: 30}} source={{uri: item.image}} />

      <View style={{flex: 1, gap: 8}}>
         
         {/* tittle and cancel button */}
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
             <View>
                <UI.ThemedText size='md' bold>{item.name}</UI.ThemedText>
                 <UI.ThemedText size='sm' color='#8C8A9D'>Spicy Chicken beef</UI.ThemedText>
             </View>

             <TouchableOpacity style={{padding: 10}} onPress={() => dispatch({type: ACTIONS.REMOVE_FROM_CART, payload: item})}>
                <Feather name="x" size={20} color={Colors.light.tint} />
             </TouchableOpacity>
          </View>

        {/* price and quantity */}
        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
            <UI.ThemedText size='md' bold color={Colors.light.tint}>{`$${item.price}`}</UI.ThemedText>


            <View style={{flexDirection: "row", gap: 10, alignItems: 'center'}}>
                <TouchableOpacity onPress={() =>  dispatch({type: ACTIONS.ADD_QUANTITY, payload: item})}>
                   <AntDesign name="pluscircle" size={24} color={Colors.light.icon} />
                </TouchableOpacity>

                <View>
                    <UI.ThemedText size='md' bold>{item.quantity}</UI.ThemedText>
                </View>

                <TouchableOpacity  onPress={() =>
                            dispatch({
                              type: ACTIONS.REMOVE_QUANTITY,
                              payload: item,
                            })}>
                   <AntDesign name="pluscircleo" size={24} color={Colors.light.icon} />
                </TouchableOpacity>
                
            </View>

        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    containner: {
        flexDirection: "row",
        justifyContent: 'space-between',
        gap: 20
    }
})
export default CartItem
