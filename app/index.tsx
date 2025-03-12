import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const Index = () => {
  return (
    <View className='h-screen w-screen bg-gray-50 flex justify-center items-center '>
      <Text className='text-secondary font-bold text-5xl '>Welcome !</Text>
  
       <Link href='/profile'>Profile</Link>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})