import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {windowWidth} from '../utils/Dimentions';
import A1logo from '../assets/A1logo.png';
import Theme from '../utils/Theme';
const Header = ({props,navigation}) => {



  const toggleDrawer = () => {
    props.navigation.openDrawer();
  };

  return (
    <View
      style={{
        width: windowWidth,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 0.6,
        backgroundColor:Theme.whiteColor
      }}>
      <Image
        style={{width: '60%', height: '90%', resizeMode: 'center'}}
        source={A1logo}
      />
      <TouchableOpacity
        onPress={() => toggleDrawer()}
        style={{width: '20%', height: '100%', justifyContent: 'center',}}>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/R.30ed7761bd8f8de872403eece8bb31fe?rik=LsIFg9IWHdcxug&pid=ImgRaw&r=0',
          }}
          style={{
            width: '50%',
            height: '60%',
            resizeMode: 'cover',
            alignSelf: 'center',
            tintColor: Theme.blackColor,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
