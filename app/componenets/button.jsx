import React from 'react'
import  {Text, TouchableOpacity }from 'react-native'
const Button = ({title,className,TextClassName}) => {
  return (
<TouchableOpacity 
TouchableOpacity='0.7'
className={className}
>
<Text className={TextClassName}>
  {title}
</Text>
</TouchableOpacity>
  )
}

export default Button
