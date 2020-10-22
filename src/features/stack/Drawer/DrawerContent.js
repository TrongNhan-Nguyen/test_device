import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles/DrawerContent';

const DrawerContent = (props) => {
  const {navigation} = props;
  const quickTest = () => {
    handleCloseDrawer();
  };
  const fullTest = () => {
    handleCloseDrawer();
  };
  const handleCloseDrawer = () => {
    navigation.closeDrawer();
  };
  const share=()=>{
    handleCloseDrawer();
  }
  const phoneInfo = ()=>{
    handleCloseDrawer();
  }
  const history = ()=>{
    handleCloseDrawer();
  }
  const feedback = ()=>{
    handleCloseDrawer();
  }
  const setting = ()=>{
    handleCloseDrawer();
  }
  return (
    <DrawerContentScrollView {...props}>
      <TouchableOpacity style={styles.btn} delayPressIn={0} onPress={quickTest}>
        <Text style={styles.btn_text}>Quick Test</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} delayPressIn={0} onPress={fullTest}>
        <Text style={styles.btn_text}>Full Test</Text>
      </TouchableOpacity>
      <DrawerItem
        label="Share With a Friend"
        inactiveTintColor="black"
        icon={() => <Ionicons name="share-social-outline" size={20} />}
      />
      <DrawerItem
        label="My Phone Info"
        inactiveTintColor="black"
        icon={() => <Ionicons name="phone-portrait-outline" size={20} />}
      />
      <DrawerItem
        label="Test History"
        inactiveTintColor="black"
        icon={() => <Icon name="history" size={20} />}
      />
      <DrawerItem
        label="Send Feedback"
        inactiveTintColor="black"
        icon={() => <Icon name="message-alert-outline" size={20} />}
      />
      <DrawerItem
        label="Setting"
        inactiveTintColor="black"
        icon={() => <Ionicons name="settings-outline" size={20} />}
      />
    </DrawerContentScrollView>
  );
};
export default DrawerContent;
