import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles/Splash_Screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
    <LinearGradient
      colors={['#ff63fc', '#d624d3', '#b307b0']}
      style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity delayPressIn={0} onPress={cancel}>
          <Text style={styles.btn_cancel}>X</Text>
        </TouchableOpacity>
        <AntDesign
          style={styles.icon}
          name="mobile1"
          size={150}
          color="white"
        />
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 30,
            marginTop: 50,
          }}>
          Touch Screen
        </Text>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
          }}>
          Test your screen by swiping your finger across the entire screen.
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
    </LinearGradient>
  );
};

export default Splash_Screen;
