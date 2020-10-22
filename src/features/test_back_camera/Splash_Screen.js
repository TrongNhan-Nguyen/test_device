import React, {useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, Animated, Image} from 'react-native';
import styles from './styles/Splash_Screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {MAIN_SCREEN} from '../../constant/name_screen';

const Splash_Screen = ({navigation}) => {
  const fadeValue = useRef(new Animated.Value(0)).current;
  const fade = () => {
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(fadeValue, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }).start(fade);
    });
  };
  const cancel = () => {
    navigation.navigate(MAIN_SCREEN);
  };
  const begin = () => {
    console.log('begin');
  };
  const skip = () => {
    console.log('Skip');
  };
  useEffect(() => {
    fade();
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity delayPressIn={0} onPress={cancel}>
        <Text style={styles.btn_cancel}>X</Text>
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={require('../../assets/images/selfie.png')}
      />
      <Text style={styles.txt_title}>Back Camera</Text>
      <Text style={styles.txt_tutor}>
        Turn your device so that you have the back camera pointed at yourself.
        Hold it there until the test is complete
      </Text>
      <Animated.View style={{opacity: fadeValue}}>
        <AntDesign
          style={styles.icon}
          name="arrowdown"
          size={120}
          color="white"
        />
      </Animated.View>
      <TouchableOpacity
        delayPressIn={0}
        onPress={begin}
        style={styles.btn_begin}>
        <Text style={{color: 'purple'}}>Begin</Text>
      </TouchableOpacity>
      <TouchableOpacity delayPressIn={0} onPress={skip}>
        <Text style={styles.txt_skip}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash_Screen;
