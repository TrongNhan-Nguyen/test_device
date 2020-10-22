import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Main_Screen from '../main_screen';
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main_Screen} />
    </Stack.Navigator>
  );
};

export default MainStack;
