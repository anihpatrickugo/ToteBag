import {StyleSheet, View, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import * as UI from '@/components/common/index';




export default function ProductDetailScreen() {

    const router =  useRouter()
    const {name, price, image} = useLocalSearchParams()
  

  return (
    <UI.ContainnerView>

      {/* header */}
      <Pressable style={styles.header} onPress={()=>router.back()}>
         <Ionicons name="chevron-back-sharp" size={24} color="black" />
         <UI.ThemedText size="lg" style={{width: "55%"}}>Details</UI.ThemedText>
      </Pressable>
         
       <View style={{width: "90%", height: 250, marginVertical: 20}}>
         <Image style={{width: "100%", height: "100%", borderRadius: 16}} source={{uri: image}}/>
       </View>


       <View style={{width: "90%", height: 250, marginVertical: 20}}>
         <UI.ThemedText size='lg' bold>{name}</UI.ThemedText>
         <UI.ThemedText size='md' bold>NGN {price}</UI.ThemedText>
         
         <UI.Button variant='coloured' text='Add To Cart'/>
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
    height: 200,
    gap: 8
},

 summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
}

 
});

