import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
} from "react-native";
import {StatusBar} from  'expo-status-bar'
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Logo, Onboarding } from "./constants";
import Button from "./componenets/button";
// import { styled } from "nativewind";
// const GradientBackground = styled(LinearGradient);
const App = () => {
  const [isLoading, setLoading] = useState(false);

  return (
    <SafeAreaView className="bg-primary   dark:bg-black">
      <ScrollView className=" h-[100%]">
        <View className=" container  gap-6 mt-10  ">
          <View className="w-[115px] h-[34.07px]">
            <Image source={Logo} className="h-full w-full " />
          </View>
          <View className="w-[375px] h-[298px]">
            <Image
              source={Onboarding}
              className="h-full w-full"
              resizeMode="contain"
            />
          </View>

          <View className="w-[333px] h-[72px] ">
            <Text className="text-[#FFFFFF] text-3xl font-Poppins font-extrabold text-center ">
              Discover Endless Possibilities with{" "}
              <Text className="text-[#FF8E01] font-Poppins font-extrabold">
                Aora
              </Text>
            </Text>
          </View>
          <View className="w-[325px] h-[44px] ">
            <Text className="text-[#CDCDE0] text-center font-poppins font-light">
              Where Creativity Meets Innovation: Embark on a Journey of
              Limitless Exploration with Aora
            </Text>
          </View>
          <Button
            onPress={() =>router.push('/signIn')}
            opacity="0.7"
            children="Continue with Email"
            className="button"
            textClassName="w-600 text-center items-center font-bold"
            disabled={isLoading}
          />
          <StatusBar  backgroundColor="black" style="light" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
