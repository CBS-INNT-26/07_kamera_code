import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CameraTest from './screens/CameraTest';
import ImageScreen from './screens/ImageScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'home'} component={CameraTest} options={{headerShown: false}} />
        <Stack.Screen name={'image'} component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
