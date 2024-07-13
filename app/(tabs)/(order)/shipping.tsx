import React from 'react'
import { View, StyleSheet, Pressable, Keyboard, KeyboardAvoidingView, Platform} from 'react-native'
import * as UI from "@/components/common"
import { Colors, lightGreyColor } from '@/constants/Colors'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

// const {width, height} = Dimensions.get.

const success = () => {
  return (
    <UI.ContainnerView>

      <KeyboardAvoidingView behavior="position" style={{width: "100%"}}>
      
      {/* header */}
      <Pressable style={styles.header} onPress={()=>router.back()}>
         <Ionicons name="chevron-back-sharp" size={24} color="black" />
         <UI.ThemedText size="md" style={{width: "60%"}} >Shipping Address</UI.ThemedText>
    
      </Pressable>

      {/* form */}
      <View style={{width: "100%", marginTop: 20}}>

        {/* form value */}
        <View style={{width: "100%", marginBottom:16}}>
          <UI.ThemedText size='sm'>Full Name *</UI.ThemedText>
          <UI.FormInput>
            <UI.ThemedText size='sm' color={lightGreyColor}>Enter your full name</UI.ThemedText>
          </UI.FormInput>
        </View>


        {/* form value */}
        <View style={{width: "100%", marginBottom:16}}>
          <UI.ThemedText size='sm'>Country *</UI.ThemedText>
          <UI.FormInput>
            <UI.ThemedText size='sm' color={lightGreyColor}>Nigeria</UI.ThemedText>
          </UI.FormInput>
        </View>


        {/* form value */}
        <View style={{width: "100%", marginBottom:16}}>
          <UI.ThemedText size='sm'>Address *</UI.ThemedText>
          <UI.FormInput>
            <UI.ThemedText size='sm' color={lightGreyColor}>Street Address</UI.ThemedText>
          </UI.FormInput>
        </View>

        {/* form value */}
        <View style={{width: "100%", marginBottom:16}}>
          <UI.ThemedText size='sm'>City *</UI.ThemedText>
          <UI.FormInput>
         
          </UI.FormInput>
        </View>

       

        {/* form value */}
        <View style={{width: "100%", marginBottom:16, flexDirection:"row", justifyContent: "space-between", alignItems: "flex-end"}}>
          <View style={{width: "40%"}}>
              <UI.ThemedText size='sm'>Postal code *</UI.ThemedText>
               <UI.FormInput>
             </UI.FormInput>
          </View>

          <View style={{width: "40%"}}>
              
               <UI.FormInput>
               <UI.ThemedText size='sm' color={lightGreyColor}>Select code </UI.ThemedText>
             </UI.FormInput>
          </View>
        </View>

         {/* form value */}
         <View style={{width: "100%", marginBottom:16}}>
          <UI.ThemedText size='sm'>Phone Number *</UI.ThemedText>
          <UI.FormInput>
         
          </UI.FormInput>
        </View>

         {/* button */}
         <View style={{width: "100%", marginBottom:16}}>
            <UI.Button text='Save' variant='coloured' onPress={()=>router.navigate("/checkout")}/>
        </View>
         
      </View>

      </KeyboardAvoidingView>

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

})

export default success
