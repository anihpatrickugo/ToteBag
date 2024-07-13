import { TouchableOpacity, View } from 'react-native';
import { StyleSheet, Image, Platform, ScrollView } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import * as UI from '@/components/common/index';
import CartList from '@/components/main/CartList';
import { ACTIONS, useCart } from "@/contexts/CartContext";
import { greyColor, primaryColor } from '@/constants/Colors';



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
         <UI.ThemedText size="md" >Shopping Cart</UI.ThemedText>
         <AntDesign name="message1" size={24} color="black" />
      </View>


      {/* cartList */}
      <CartList items={products}/>

       {/* order summmary */}
       <View style={styles.summary}>
            

            <View style={styles.summaryRow}>
               <UI.ThemedText size='sm' bold color={greyColor}>Cart Total</UI.ThemedText>
               <UI.ThemedText size='lg' bold color={primaryColor}>$$10,700.00</UI.ThemedText>
            </View>

            <View style={styles.summaryRow}>
               <UI.Button text='Checkout' variant='coloured' onPress={()=> router.navigate('/shipping')}/>
            </View>

        </View>

    
      

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
