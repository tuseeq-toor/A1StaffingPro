/* eslint-disable prettier/prettier */
import React, {useState, useEffect, createContext} from 'react';
import {View, Text, Linking, Image} from 'react-native';
import A1logo from '../assets/A1logo.png';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import HomeStack from './Stack';
import AboutusStack from './AboutUsStack';
import ContactUs from '../screen/ContactUs';
import ContactStack from './ContactUs_Stack';
const Drawer = createDrawerNavigator();
const RootNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, swipeEnabled: true}}
      initialRouteName="Home"
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <Image
              source={A1logo}
              resizeMethod="resize"
              resizeMode="center"
              style={{flex: 1, alignSelf: 'center', width: 150, height: 100}}
            />
            <DrawerItemList {...props} />

            {/* <DrawerItem
              label="Terms and condition"
              onPress={() => Linking.openURL('https://piece9.com/vie-privee/')}
            />
            <DrawerItem
              label="Privacy Policy"
              onPress={() =>
                Linking.openURL(
                  'https://piece9.com/clause-de-non-responsabilite/',
                )
              }
            /> */}
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="About Us" component={AboutusStack} />
      <Drawer.Screen name="Contact Us" component={ContactStack} />
    </Drawer.Navigator>
  );
};
export default RootNavigation;
