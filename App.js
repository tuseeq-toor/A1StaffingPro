import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import Splash from './Src/screen/Splash';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './Src/navigation/RootNavigation';

const App = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 5000);
  }, []);

  if (isLoading) return <Splash />;

  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default App;
