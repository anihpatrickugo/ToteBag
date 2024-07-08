import {StyleSheet, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import * as UI from '@/components/common/index';




export default function ProductDetailScreen() {

    const router =  useRouter()
    const {item} = useLocalSearchParams()
   console.log(item.name)
  

  return (
    <UI.ContainnerView>

      {/* header */}
      <Pressable style={styles.header} onPress={()=>router.back()}>
         <Ionicons name="chevron-back-sharp" size={24} color="black" />
         <UI.ThemedText size="lg" style={{width: "55%"}}>{item.name}</UI.ThemedText>
      </Pressable>



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

