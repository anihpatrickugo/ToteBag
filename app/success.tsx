import React from 'react'
import { View, Dimensions } from 'react-native'
import * as UI from "@/components/common"
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons';

// const {width, height} = Dimensions.get.

const success = () => {
  return (
    <View style={{ width: "100%", height:"100%", justifyContent: "center", alignItems: "center"}}>
        <UI.ThemedText size='xl' color={Colors.light.tint}>Order Succes!!!</UI.ThemedText>
        <Ionicons name="checkmark-done-circle" size={40} color={Colors.light.tint} />
    </View>
  )
}

export default success
