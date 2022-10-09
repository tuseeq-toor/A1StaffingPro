import { View, Text,Image } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";
const Modals = ({isVisible,onClose}) => {
  return (
    <View>
    <Modal isVisible={isVisible}
    onBackdropPress={onClose}
    onBackButtonPress={onClose}
    >
      <View style={{ flex: 1,justifyContent:"center" }}>
        <View
        style={{width:300,height:200,backgroundColor:"white",alignSelf:"center",borderRadius:5,}}
        >
       <Image
       source={{uri:"https://icon-library.com/images/confirm-icon/confirm-icon-8.jpg"}}
       style={{width:70,height:100,resizeMode:"contain",alignSelf:"center",marginTop:15}}
       />
       <Text style={{textAlign:"center",fontSize:18,color:"black",fontWeight:"800"}}>Your Form Sunmitted Successfully</Text>


        </View>
      </View>
    </Modal>
  </View>
  )
}

export default Modals