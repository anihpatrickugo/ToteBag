import { TouchableOpacity, View } from 'react-native';
import { StyleSheet, Image, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import * as UI from '@/components/common/index';
import CartList from '@/components/main/CartList';
import { ACTIONS, useCart } from "@/contexts/CartContext";



export default function TabTwoScreen() {

  const { products, dispatch } = useCart();

  const totalPrice = products.reduce(
    (prevValue, currentValue) =>
      prevValue + currentValue.price * currentValue.quantity,
    0
  );
  

  return (
    <UI.ContainnerView>

      {/* header */}
      <View style={styles.header}>
         <Ionicons name="chevron-back-sharp" size={24} color="black" />
         <UI.ThemedText size="lg" style={{width: "55%"}}>Cart</UI.ThemedText>
      </View>


      {/* cartList */}
      <CartList items={products}/>

       {/* order summmary */}
       <View style={styles.summary}>
            

            <View style={styles.summaryRow}>
               <UI.ThemedText size='md' bold>Delivery</UI.ThemedText>
               <UI.ThemedText size='sm' bold>$7</UI.ThemedText>
            </View>

            <View style={styles.summaryRow}>
               <UI.ThemedText size='md' bold>Total</UI.ThemedText>
               <UI.ThemedText size='sm' bold>{`$${totalPrice+7}`}</UI.ThemedText>
            </View>

        </View>

        {/* checkout */}
        <TouchableOpacity style={{width: "65%"}}>
            <UI.Button variant='coloured' text='Checkout' onPress={() => router.push('/success')}/>
        </TouchableOpacity>
      

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
    height: 200,
    gap: 8
},

 summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
}

 
});
