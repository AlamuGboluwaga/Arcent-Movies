import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ children,textClassName,...props }) => {
  console.log("props", props);

  return (
    <TouchableOpacity {...props}>
      <Text className={textClassName}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
