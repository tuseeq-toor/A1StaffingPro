import { View, Text,Image, } from 'react-native'
import React from 'react'
import A1logo from "../assets/A1logo.png"
import { windowHeight } from '../utils/Dimentions'
import { windowWidth } from '../utils/Dimentions'
const Splash = () => {
  return (
    <View style={{width:windowWidth,height:windowHeight,justifyContent:"center"}} >
      <Image style={{width:"70%",height:"30%",resizeMode:"center",alignSelf:"center"}} source={A1logo}  />
    </View>
  )
}

export default Splash