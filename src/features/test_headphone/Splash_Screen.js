import React, { useEffect, useRef } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MAIN_SCREEN } from '../../constant/name_screen';
import styles from './styles/Splash_Screen';

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
    useEffect(()=>{
      fade()
    },[])
  return (
    <View style={styles.container}>
      <TouchableOpacity delayPressIn={0} onPress={cancel}>
        <Text style={styles.btn_cancel}>X</Text>
      </TouchableOpacity>
      <Icon
        style={styles.icon}
        name="headphones-settings"
        size={150}
        color="white"
      />
      <Text style={styles.txt_title}>Headphones</Text>
      <Text style={styles.txt_tutor}>
        Plug wired headphones into your phone. Listen to the 3 numbers you hear
        through the headphones and enter them when prompted
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
