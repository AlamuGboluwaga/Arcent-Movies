import { View, Text, Image, StatusBar } from "react-native";
import React from "react";
import { Logo, Onboarding } from "../constants";
import Button from "../componenets/button";

const OnBoarding = () => {
  return (
    <View className="bg-primary flex  h-full w-full justify-center  items-center  gap-4 ">
      <View className="w-[115px] h-[34.07px]">
        <Image source={Logo} className="h-full w-full" />
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
          Where Creativity Meets Innovation: Embark on a Journey of Limitless
          Exploration with Aora
        </Text>
      </View>
      <Button className="w-[327px] h-[58px] rounded-xl bg-orange-400 justify-center items-center" title='Continue with Email'  TextClassName='h-[] w-600 text-center items-center font-bold '/>
      <StatusBar
      barStyle=''
      />
    </View>
  );
};

export default OnBoarding;
