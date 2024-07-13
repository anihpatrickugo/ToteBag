import React from 'react'
import { View, StyleSheet, Pressable, } from 'react-native'
import * as UI from "@/components/common"
import { greyColor, lightGreyColor, primaryColor } from '@/constants/Colors'
import { Ionicons, MaterialCommunityIcons, Octicons, SimpleLineIcons } from '@expo/vector-icons';
import ConfirmOrderModal from '@/components/main/confirmOrderModal';
import { router } from 'expo-router';

// const {width, height} = Dimensions.get.

const success = () => {
    const [modalVisible, setModalVisible] = React.useState(false)
  return (
    <UI.ContainnerView>

        {modalVisible && <ConfirmOrderModal modalVisible={modalVisible} setModalVisible={setModalVisible} />}
      
      {/* header */}
      <Pressable style={styles.header} onPress={()=>router.back()}>
         <Ionicons name="chevron-back-sharp" size={24} color="black" />
         <UI.ThemedText size="md" style={{width: "60%"}} >Checkout</UI.ThemedText>
    
      </Pressable>


      {/* process */}
      <View style={{marginVertical: 12, width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
         <View style={{alignItems: "center"}}>
            <SimpleLineIcons name="bag" size={24} color={primaryColor} />
            <UI.ThemedText size='sm' color={primaryColor}>shipping</UI.ThemedText>
         </View>

         <View style={{width: 70, height: 1, backgroundColor: lightGreyColor}}/>

         <View style={{alignItems: "center"}}>
            <Octicons name="credit-card" size={24} color={primaryColor} />
            <UI.ThemedText size='sm' color={primaryColor}>shipping</UI.ThemedText>
         </View>

         <View style={{width: 70, height: 1, backgroundColor: lightGreyColor}}/>

         <View style={{alignItems: "center"}}>
            <Octicons name="checklist" size={24} color={primaryColor} />
            <UI.ThemedText size='sm' color={primaryColor}>shipping</UI.ThemedText>
         </View>

      </View>

      

      {/* form */}
      <View style={{width: "100%", marginTop: 8}}>
         
         {/* row */}
        <View style={{width: "100%", marginBottom:12, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
           
           <UI.ThemedText size='md' style={{alignSelf: "flex-start"}}bold>Ship To</UI.ThemedText>

            <View style={{width: 170}}>
                <UI.ThemedText size='md' color={greyColor}>My Home</UI.ThemedText>
                <UI.ThemedText size='sm' color={greyColor}>67 Stoneway Street, Abuja Nigeria, 94054</UI.ThemedText>

            </View>

           <MaterialCommunityIcons name="greater-than" size={24} color="black" />
           
        </View>


         {/* row */}
        <View style={{width: "100%", marginBottom:12, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
           
           <UI.ThemedText size='md' style={{alignSelf: "flex-start"}}bold>Delivery</UI.ThemedText>

            <View style={{width: 170}}>
                <UI.ThemedText size='md' color={greyColor}>Instant Delivery</UI.ThemedText>
                <UI.ThemedText size='sm' color={greyColor}>67 Stoneway Street, Abuja Nigeria, 94054</UI.ThemedText>

            </View>

           <MaterialCommunityIcons name="greater-than" size={24} color="black" />
           
        </View>
      </View>

      {/* summary */}
      <View style={{width: "100%"}}>
          <View style={{width: "100%", marginBottom:8, flexDirection: "row", justifyContent: 'space-between'}}>
              <UI.ThemedText  size='md' color={greyColor}>Shipping</UI.ThemedText>
              <UI.ThemedText  size='md' color={greyColor}>10.00</UI.ThemedText>
          </View>

          <View style={{width: "100%", marginBottom:8, flexDirection: "row", justifyContent: 'space-between'}}>
              <UI.ThemedText  size='md' color={greyColor}>Discount</UI.ThemedText>
              <UI.ThemedText  size='md' color={greyColor}>-5.00</UI.ThemedText>
          </View>
          <View style={{width: "100%", marginBottom:8, flexDirection: "row", justifyContent: 'space-between'}}>
              <UI.ThemedText  size='md' color={greyColor}>Tax</UI.ThemedText>
              <UI.ThemedText  size='md' color={greyColor}>15.00</UI.ThemedText>
          </View>

          <View style={{ width: "100%", height: 1, backgroundColor: lightGreyColor, marginBottom: 8}}/>

        {/* total */}
          <View style={{width: "100%", marginBottom:8, flexDirection: "row", justifyContent: 'space-between'}}>
              <UI.ThemedText  size='md' color={greyColor}>Total</UI.ThemedText>
              <UI.ThemedText  size='lg' bold color={primaryColor}>$10,720.00</UI.ThemedText>
          </View>

      </View>

       {/* button */}
       <View style={{width: "100%", position: "absolute", bottom: 12}}>
            <UI.Button text='Place Order' variant='coloured' onPress={()=>setModalVisible(true)}/>
        </View>


    </UI.ContainnerView>
  )
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  card: {
    width: 160,
    height: 94,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: lightGreyColor,
    paddingVertical: 16,
    padding: 8,
    gap: 12
  }

})

export default success
