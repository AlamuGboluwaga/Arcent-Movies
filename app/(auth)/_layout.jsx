import React from 'react'
import { View, Text } from 'react-native'
import { Tabs } from "expo-router";

const Layout = () => {
  return (
   <Tabs 
   screenOptions={{
    
   }}
 
   >
    <Tabs.Screen
    name='onboarding'
    options={{
      title: "Onboarding",
      headerShown: false,
  
     
    }}
  
    />
   </Tabs>
  )
}

export default Layout