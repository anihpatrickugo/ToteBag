import React from 'react'
import { View, StyleSheet, Pressable, Keyboard, KeyboardAvoidingView, Platform} from 'react-native'
import * as UI from "@/components/common"
import { Colors, greyColor, lightGreyColor, primaryColor } from '@/constants/Colors'
import { AntDesign, Ionicons, Octicons, SimpleLineIcons } from '@expo/vector-icons';
import MasterCard  from "@/assets/icons/MasterCard"
import GooglePlay from "@/assets/icons/GooglePlay"
import { router } from 'expo-router';

// const {width, height} = Dimensions.get.

const success = () => {
    const [saveShipping, setSaveShipping] = React.useState(false)
  return (
    <UI.ContainnerView>

      <KeyboardAvoidingView behavior="position" style={{width: "100%"}}>
      
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
            <Octicons name="checklist" size={24} color={lightGreyColor} />
            <UI.ThemedText size='sm' color={lightGreyColor}>shipping</UI.ThemedText>
         </View>

      </View>

      {/* payment method */}
      <UI.ThemedText size='md' color={greyColor}>Payment Method</UI.ThemedText>
      <View style={{marginVertical: 8, width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
          
          <View style={styles.card}>
             <MasterCard  width={45} height={28}/>
             <UI.ThemedText size='md'>credit Card</UI.ThemedText>
          </View>

          <View style={styles.card}>
             <GooglePlay  width={45} height={28}/>
             <UI.ThemedText size='md'>Google Play</UI.ThemedText>
          </View>

      </View>

      {/* form */}
      <View style={{width: "100%", marginTop: 8}}>

        {/* form value */}
        <View style={{width: "100%", marginBottom:12}}>
          <UI.ThemedText size='sm'>Card number</UI.ThemedText>
          <UI.FormInput>
             <UI.ThemedText size='sm'  color={greyColor}>XXX XXX XXX XXX</UI.ThemedText>
          </UI.FormInput>
        </View>

        {/* form value */}
        <View style={{width: "100%", marginBottom:12, flexDirection:"row", justifyContent: "space-between", alignItems: "flex-end"}}>
          <View style={{width: "40%"}}>
              <UI.ThemedText size='sm'>Expiration</UI.ThemedText>
               <UI.FormInput>
                 <UI.ThemedText size='sm'  color={lightGreyColor}>mm/yy</UI.ThemedText>
             </UI.FormInput>
          </View>

          <View style={{width: "40%"}}>
              
               <UI.ThemedText size='sm' >CVV</UI.ThemedText>
               <UI.FormInput>
                  <UI.ThemedText size='sm'  color={lightGreyColor}>xxx</UI.ThemedText>
             </UI.FormInput>
          </View>
        </View>

         {/* form value */}
         <View style={{width: "100%", marginBottom:12}}>
          <UI.ThemedText size='sm'>Phone Number *</UI.ThemedText>
          <UI.FormInput>
         
          </UI.FormInput>
        </View>

         {/* checkbox */}
         <View style={{width: "100%", flexDirection: "row", alignContent: "center", gap: 8}}>
           { saveShipping ?
              <AntDesign name="checksquare" size={24} color={primaryColor} onPress={()=>setSaveShipping(!saveShipping)}/> 
           :  <AntDesign name="checksquareo" size={24} color={primaryColor} onPress={()=>setSaveShipping(!saveShipping)}/>
           }
            
            <UI.ThemedText size='sm' style={{flex: 1}}>I have designated my shipping address to also serve as my billing address</UI.ThemedText>
              
        </View>

      </View>
         {/* button */}
         <View style={{width: "100%", marginBottom:12}}>
            <UI.Button text='Confirm and continue' variant='coloured' onPress={()=> router.navigate("/confirm")} />
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
