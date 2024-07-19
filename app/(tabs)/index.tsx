import { StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native';

import * as UI from '@/components/common/index';
import ProductList from '@/components/main/ProductList';
import { Feather } from '@expo/vector-icons';
import { Items } from '@/constants/Items';
import { router } from 'expo-router';

// const  url = 'https://api.timbu.cloud/products?organization_id=839d5ee98cf74b6083ba0b8c4ebbc9e6&reverse_sort=false&page=1&size=25&Appid=XFYR9SHT5EK6AMM&Apikey=ea4b1a47f0274910bd93b479a15c441120240707192707403385'
// const url2 = 'https://jsonplaceholder.typicode.com/todos/1'



export default function HomeScreen() {

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url2, {
  //         headers: {
  //           'Content-Type': 'application/json'
            
  //         },
  //       })
  //       const data = await response.json()
  //       console.log(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   fetchData()
  // }, [])


  return (
    <UI.ContainnerView>

      {/* header */}
      <View style={styles.header}>
        <Image source={require('@/assets/images/user.png')}/>
        <TouchableOpacity onPress={()=>router.navigate("/allOrders")}>
          <Feather name="list" size={30} color="black" />
          <UI.ThemedText size='xs'>Orders</UI.ThemedText>

        </TouchableOpacity>
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