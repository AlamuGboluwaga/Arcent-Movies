import React from 'react'
import { Stack, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import signIn from './signIn';


const Layout = () => {
  return (
   <Stack>
    <Stack.Screen
    name='signIn'
    options={{
      headerShown:false,
      title:'Sign In'
    }}
    />
     <Stack.Screen
    name='signUp'
    options={{
      headerShown:false,
      title:'Sign Up'
    }}
    />
    <StatusBar backgroundColor='black' style='dark' />
   </Stack>
  ) 
}

export default Layout