import {createDrawerNavigator} from '@react-navigation/drawer';

import React from 'react';
import {
  MAIN_SCREEN,
  TEST_ACCELEROMETER,
  TEST_BACK_CAMERA,
  TEST_BLUETOOTH,
  TEST_CELLULAR,
  TEST_CHARGER,
  TEST_COMPASS,
  TEST_FRONT_CAMERA,
  TEST_HEADPHONE,
  TEST_LIGHT,
  TEST_MICROPHONE,
  TEST_SCREEN,
  TEST_SPEAKER,
  TEST_WiFi,
} from '../../../constant/name_screen';
import Main_Screen from '../../main_screen';
import Test_Accelerometer from '../../test_accelerometer';
import Test_BackCamera from '../../test_back_camera';
import Test_Bluetooth from '../../test_bluetooth';
import Test_Cellular from '../../test_cellular';
import Test_Charger from '../../test_charger';
import Test_Compass from '../../test_compass';
import Test_FrontCamera from '../../test_front_camera';
import Test_Headphone from '../../test_headphone';
import Test_Light from '../../test_light';
import Test_Microphone from '../../test_microphone';
import Test_Screen from '../../test_screen';
import Test_Speaker from '../../test_speaker';
import Test_WiFi from '../../test_wifi';
import DrawerContent from './DrawerContent';
const Drawer = createDrawerNavigator();
const DrawerStack = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name={MAIN_SCREEN} component={Main_Screen} />
      <Drawer.Screen name={TEST_SCREEN} component={Test_Screen} />
      <Drawer.Screen name={TEST_HEADPHONE} component={Test_Headphone} />
      <Drawer.Screen name={TEST_SPEAKER} component={Test_Speaker} />
      <Drawer.Screen name={TEST_MICROPHONE} component={Test_Microphone} />
      <Drawer.Screen name={TEST_ACCELEROMETER} component={Test_Accelerometer} />
      <Drawer.Screen name={TEST_COMPASS} component={Test_Compass} />
      <Drawer.Screen name={TEST_BLUETOOTH} component={Test_Bluetooth} />
      <Drawer.Screen name={TEST_WiFi} component={Test_WiFi} />
      <Drawer.Screen name={TEST_CELLULAR} component={Test_Cellular} />
      <Drawer.Screen name={TEST_CHARGER} component={Test_Charger} />
      <Drawer.Screen name={TEST_LIGHT} component={Test_Light} />




      <Drawer.Screen name={TEST_FRONT_CAMERA} component={Test_FrontCamera} />
      <Drawer.Screen name={TEST_BACK_CAMERA} component={Test_BackCamera} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
