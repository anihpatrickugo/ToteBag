import React, { FC } from 'react'
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native'
import { primaryColor, grayColor } from '../variables'
import { Colors } from '@/constants/Colors'

interface Props extends TouchableOpacityProps {
    text: string,
    variant: "coloured" | "light" | "light-gray",
    noBorder?:  boolean;
}

const Button: FC<Props> = ({text, variant, noBorder, style, ...props}) => {
   let variantStyles = {button: null, buttonText: null}


//    variant types and styles
   switch (variant){

    case "coloured":
        variantStyles = {button: {backgroundColor: Colors.light.tint},  buttonText: {color: "white" }}
        break;

    case "light":
        variantStyles =  { 
            button: {backgroundColor: "transparent",  borderWidth: noBorder ? 0 : 1, borderColor: Colors.light.tint},  
            buttonText: {color: Colors.light.tint }}
        break;

    case "light-gray":
        variantStyles =  { 
            button: {backgroundColor: "transparent",  borderWidth: 1, borderColor: Colors.light.text},  
            buttonText: {color: '#344054', fontWeight: '700' }}
        break;

    default: 
        variantStyles =  {button: {backgroundColor: Colors.light.tint},  buttonText: {color: "white" }}
        break;
   }

  return (
    <TouchableOpacity style={[style, styles.button, variantStyles.button]} {...props}>
            <Text style={[styles.buttonText, variantStyles.buttonText]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        paddingVertical: 12,
        borderRadius: 20,
      },
    
      buttonText: {
        textAlign: "center",
        color: "white",
      }
})
export {Button};