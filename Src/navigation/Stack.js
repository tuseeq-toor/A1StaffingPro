import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Header from '../components/Header';
import BusinessForm from '../screen/BusinessForm';
import JobseekerForm from '../screen/JobseekerForm';
const HomeStack = () => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator
      screenOptions={{
        header: props =><Header props={props}  />,
        tabBarHideOnKeyboard: true,
      }}>
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="JobseekerForm" component={JobseekerForm} />
      <stack.Screen name="BusinessForm" component={BusinessForm} /> 
    </stack.Navigator>
  );
};
export default HomeStack;
