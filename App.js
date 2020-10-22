import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerStack from './src/features/stack/Drawer/DrawerStack';
const App = () => {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
};

export default App;
