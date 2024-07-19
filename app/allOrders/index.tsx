import { Pressable, TouchableOpacity, View } from 'react-native';
import { StyleSheet, Image, Platform, ScrollView } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import * as UI from '@/components/common/index';
import CartList from '@/components/main/CartList';
import { ACTIONS, useCart } from "@/contexts/CartContext";
import { greyColor, primaryColor } from '@/constants/Colors';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OrdersList from '@/components/main/OrdersList';




export default function OrdersScreen() {
 
    const [orders, setOrders] = useState([])

    useEffect(()=>{
        const getOrders = async ()=>{
            const orders = await AsyncStorage.getItem("orders")
            if (orders){
                const ordersList = JSON.parse(orders)
                setOrders(ordersList)
            }
            else{ 
                console.log("Nothing")
            }
        }

        getOrders()
    }, [])


  

  return (
    <UI.ContainnerView>

      {/* header */}
      <View style={styles.header}>
        <Pressable onPress={()=>router.replace("/")}>
         <Ionicons name="chevron-back-sharp" size={24} color="black" />
        </Pressable>
         <UI.ThemedText size="md" >Orders</UI.ThemedText>
         <AntDesign name="message1" size={24} color="black" />
      </View>


      {/* ordersList */}
      <OrdersList items={orders.reverse()}/>

       

    

    </UI.ContainnerView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  summary: {
    marginVertical: 16,
    flex: 1,
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
   
    // gap: 8
},

 summaryRow: {
  
    alignItems: "center",
    width: "50%",
}

 
});
