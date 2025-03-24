import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

const _layout = () => {
  return (
    <Tabs 
    screenOptions={{
      tabBarShowLabel:true,
      tabBarActiveTintColor:"red",
      tabBarInactiveTintColor:"orange",
      tabBarStyle:{
        backgroundColor:"#fff",
        height:50,


      },


    }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="home" size={20} color="blue" />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="create" size={20} color="blue" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="profile" size={20} color="blue" />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="search" size={20} color="blue" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
