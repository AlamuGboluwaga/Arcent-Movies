import { View, Text, TextInput } from "react-native";
import React from "react";

const InputFiled = ({ divClassName,labelClassName, children, label, ...props }) => {
  return (
    <View className={divClassName}>
      <Text htmlFor="" className={labelClassName}>
        {label}
      </Text>
      <TextInput {...props}>{children}</TextInput>
    </View>
  );
};

export default InputFiled;
