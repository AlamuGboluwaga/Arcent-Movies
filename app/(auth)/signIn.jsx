import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Logo } from "../constants";
import {router} from "expo-router";
import InputFiled from "../componenets/input/inputFiled";
import Button from "../componenets/button";

const SignIn = () => {
   const [isLoading, setLoading] = useState(false);
  return (
    <SafeAreaView className="bg-primary ">
      <ScrollView className="h-[100%]">
        <View className="px-4 border border-red-600  flex gap-12">
          <Image
            source={Logo}
            className="w-[115px] h-[34.07px] "
            resizeMode="cover"
          />

          <Text className="text-xl text-white">Sign in</Text>

          <InputFiled
            labelClassName="text-white"
            label="Email"
            placeholder="Email"
            className="border border-red-400 text-white rounded-md  h-14"
          />
          <InputFiled
            labelClassName="text-white"
            label="Password"
            placeholder=".........."
            className="border border-red-400 text-white rounded-md  h-14"
          />
          <Text className="text-white text-right">Forgot password</Text>
          <Button
            onPress={() =>router.push('/signIn')}
            opacity="0.7"
            children="Continue with Email"
            className="button"
            textClassName="w-600 text-center items-center font-bold"
            disabled={isLoading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
