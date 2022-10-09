import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Header from '../components/Header';
import ContactUs from '../screen/ContactUs';

const ContactStack = () => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator
      screenOptions={{
        header: props =><Header props={props}  />,
        tabBarHideOnKeyboard: true,
      }}>
      <stack.Screen name="ContactUs" component={ContactUs} />

    </stack.Navigator>
  );
};
export default ContactStack;
