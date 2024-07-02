import { Tabs } from 'expo-router';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View, StyleSheet } from 'react-native';
import * as UI from "@/components/common"
import { ACTIONS, useCart } from "@/contexts/CartContext";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const {products} = useCart()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Products',
          tabBarIcon: ({ color, focused }) => (

            <FontAwesome5 name='home' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'My Orders',
          tabBarIcon: ({ color, focused }) => (
            <View>
              <UI.ThemedText size='xs' color="#fff"style={styles.counter}>{products.length}</UI.ThemedText>
              <FontAwesome5 name="shopping-cart" size={24} color={color} /> 
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
   counter: {
    backgroundColor: "black",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 20,
    position: "absolute",
    top: -15,
    right: -15
   }
})