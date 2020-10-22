import React, {useState} from 'react';
import Main from './Main';
import Splash_Screen from './Splash_Screen';

const Test_FrontCamera = ({navigation}) => {
  const [isPlash, setIsPlash] = useState(true);
  return isPlash ? <Splash_Screen navigation={navigation} /> : <Main />;
};

export default Test_FrontCamera;
