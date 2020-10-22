import React, {useState} from 'react';
import Main from './Main';
import Splash_Screen from './Splash_Screen';

const Test_Accelerometer = ({navigation}) => {
  const [isPlash, setIsPlash] = useState(true);
  return isPlash ? (
    <Splash_Screen navigation={navigation} />
  ) : (
    <Main navigation={navigation} />
  );
};

export default Test_Accelerometer;
