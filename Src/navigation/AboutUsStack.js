import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '../components/Header';
import AboutUs from '../screen/AboutUs';

const AboutusStack = () => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator
      screenOptions={{
        header: props =><Header props={props}  />,
        tabBarHideOnKeyboard: true,
      }}>
      <stack.Screen name="AboutUs" component={AboutUs} />

    </stack.Navigator>
  );
};
export default AboutusStack;
