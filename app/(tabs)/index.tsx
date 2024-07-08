import { StyleSheet, View, TextInput, Image } from 'react-native';

import * as UI from '@/components/common/index';
import ProductList from '@/components/main/ProductList';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { Items } from '@/constants/Items';



export default function HomeScreen() {
  return (
    <UI.ContainnerView>

      {/* header */}
      <View style={styles.header}>
        <Feather name="menu" size={30} color="black" />
        <Image source={require('@/assets/images/user.png')}/>
      </View>

      {/* title */}
      <UI.ThemedView style={styles.titleContainer}>
        <UI.ThemedText bold size="2xl">What would you like
        to order</UI.ThemedText>
      </UI.ThemedView>

      {/* search bar */}
     <View style={styles.searchBar}>
        <FontAwesome name="search" size={35} color="#767F9D" />
        <TextInput style={styles.searchInput} placeholder='Find for food or restaurant...'/>
     </View>
 
      {/* products */}
      <ProductList items={Items}/>

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

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  searchBar: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    backgroundColor: "#EFEFEF",
    height: 60,
    width: "100%",
    marginHorizontal: 20,
    paddingHorizontal: 20,
    gap: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#767F9D"
},

searchInput: { 
    flex: 1,
     height: "100%",
     fontSize: 18,
    }
});