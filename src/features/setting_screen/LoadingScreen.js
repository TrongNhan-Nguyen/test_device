import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles/LoadingScreen';
import Icon from 'react-native-vector-icons/AntDesign'
const LoadingScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.line} />
      <Icon name='mobile1' size={250} color='white' />
    </View>
  );
};

export default LoadingScreen;
