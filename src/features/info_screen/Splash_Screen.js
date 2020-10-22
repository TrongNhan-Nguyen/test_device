import React, {useEffect, useRef} from 'react';
import {View, Text, Animated} from 'react-native';
import styles from './styles/LoadingScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import {Easing} from 'react-native-reanimated';
const Splash_Screen = () => {
  const xValue = useRef(new Animated.Value(0)).current;
  const moveX = () => {
    Animated.timing(xValue, {
      toValue: 280,
      duration: 2000,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start(() => {
      Animated.timing(xValue, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start(moveX);
    });
  };
  useEffect(() => {
    moveX();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.line, top: xValue}} />
      <Icon name="mobile1" size={250} color="white" />
    </View>
  );
};

export default Splash_Screen;
