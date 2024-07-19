import {StyleSheet, View, Image, Pressable, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as UI from '@/components/common/index';
import { primaryColor } from '@/constants/Colors';
import OrderProductItem from '@/components/main/OrderProductItem';





export default function ProductDetailScreen() {

    // const [item, setItem] = useState<any>({})

    const router =  useRouter()
    const {id, price, date, products} = useLocalSearchParams();


    const allProducts = JSON.parse(products as any)
   

   
  

  return (
    <UI.ContainnerView>

      {/* header */}
      <Pressable style={styles.header} onPress={()=>router.back()}>
         <Ionicons name="chevron-back-sharp" size={24} color="black" />
         <UI.ThemedText size="lg" style={{width: "55%"}}>Order Details</UI.ThemedText>
      </Pressable>
         

         

       <View style={{width: "90%", marginVertical: 20}}>
         <View style={styles.row}>
            <UI.ThemedText size='md' color={primaryColor} bold>Order ID:</UI.ThemedText>
            <UI.ThemedText size='lg'  color={primaryColor} bold>{id}</UI.ThemedText>
         </View>
         <View style={styles.row}>
            <UI.ThemedText size='md' color={primaryColor} bold>Total Price:</UI.ThemedText>
            <UI.ThemedText size='lg'  color={primaryColor} bold>₦{price}</UI.ThemedText>
         </View>

         <View style={styles.row}>
            <UI.ThemedText size='md' color={primaryColor} bold>Date:</UI.ThemedText>
            <UI.ThemedText size='lg'  color={primaryColor} bold>{date}</UI.ThemedText>
         </View>

         <View style={styles.row}>
            <UI.ThemedText size='md' color={primaryColor} bold>Total Items:</UI.ThemedText>
            <UI.ThemedText size='lg'  color={primaryColor} bold>{allProducts.length}</UI.ThemedText>
         </View>
        
         
       </View>

       {/* products */}

       <View style={{width: "90%"}}>
        <UI.ThemedText size='md'>All Products</UI.ThemedText>

        <FlatList
          data={allProducts}
          contentContainerStyle={{gap: 20}}
          renderItem={({item, index}) => (<OrderProductItem item={item} key={index}/>)}
           keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
        />

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

 
 row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
}

 
});

