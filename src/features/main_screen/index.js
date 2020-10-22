import React, {useRef} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {
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
} from '../../constant/name_screen';
import styles from './styles';
const Main_Screen = ({navigation}) => {
  const scrollRef = useRef(null);
  const scrollsTo = (posY) => {
    scrollRef.current.scrollTo({y: posY, animated: true});
  };
  const handleOpenDrawer = () => {
    navigation.openDrawer();
  };
  const onIconClick = (name) => {
    navigation.navigate(name);
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView
        ref={(ref) => (scrollRef.current = ref)}
        style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity delayPressIn={0} onPress={handleOpenDrawer}>
            <Icon name="menu" size={35} color="grey" />
          </TouchableOpacity>
          <Text style={styles.header_title}>Test Hardware</Text>
          <Icon name="cellphone-android" size={35} color="tomato" />
        </View>
        <View style={styles.main}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>
            Test Categories
          </Text>
          <View style={styles.main_group}>
            <View style={styles.icon_container}>
              <TouchableOpacity onPress={()=>scrollsTo(370)} delayPressIn={0} style={styles.icon}>
                <Icon name="cellphone-screenshot" color="purple" size={50} />
              </TouchableOpacity>
              <Text>Screen</Text>
            </View>

            <View style={styles.icon_container}>
              <TouchableOpacity onPress={()=>scrollsTo(540)} delayPressIn={0} style={styles.icon}>
                <AntDesign name="sound" size={50} color="#b38507" />
              </TouchableOpacity>
              <Text>Sound</Text>
            </View>
            <View style={styles.icon_container}>
              <TouchableOpacity onPress={()=>scrollsTo(710)} delayPressIn={0} style={styles.icon}>
                <FontAwesome name="arrows-alt" size={50} color="tomato" />
              </TouchableOpacity>
              <Text>Motion</Text>
            </View>
          </View>
          <View style={styles.main_group}>
            <View style={styles.icon_container}>
              <TouchableOpacity onPress={()=>scrollsTo(850)} delayPressIn={0} style={styles.icon}>
                <Feather name="target" size={50} color="blue" />
              </TouchableOpacity>
              <Text>Connectivity</Text>
            </View>

            <View style={styles.icon_container}>
              <TouchableOpacity onPress={()=>scrollsTo(850)} delayPressIn={0} style={styles.icon}>
                <Ionicons
                  name="hardware-chip-outline"
                  size={55}
                  color="#32a6a8"
                />
              </TouchableOpacity>
              <Text>Hardware</Text>
            </View>
            <View style={styles.icon_container}>
              <TouchableOpacity onPress={()=>scrollsTo(850)} delayPressIn={0} style={styles.icon}>
                <FontAwesome name="camera-retro" size={45} color="green" />
              </TouchableOpacity>
              <Text>Camera</Text>
            </View>
          </View>

          <View style={styles.btn_container}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btn_text}>Quick Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btn_text}>Quick Test</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.test_group}>
          <View style={styles.test_group_top}>
            <Text style={{fontWeight: 'bold'}}>Screen</Text>
            <TouchableOpacity style={styles.btn_test_group}>
              <Text style={{color: 'white'}}>Check Now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.test_group_icon_container}>
            <View style={styles.icon_container}>
              <TouchableOpacity
                onPress={() => onIconClick(TEST_SCREEN)}
                delayPressIn={0}
                style={styles.icon}>
                <MaterialIcons name="touch-app" size={50} color="grey" />
              </TouchableOpacity>
              <Text>Touch Screen</Text>
            </View>
          </View>
        </View>
        <View style={styles.test_group}>
          <View style={styles.test_group_top}>
            <Text style={{fontWeight: 'bold'}}>Sound</Text>
            <TouchableOpacity style={styles.btn_test_group}>
              <Text style={{color: 'white'}}>Check Group</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.test_group_icon_container}>
            <View style={styles.icon_container}>
              <TouchableOpacity
                onPress={() => {
                  onIconClick(TEST_HEADPHONE);
                }}
                delayPressIn={0}
                style={styles.icon}>
                <FontAwesome name="headphones" size={50} color="grey" />
              </TouchableOpacity>
              <Text>Headphone</Text>
            </View>
            <View style={styles.icon_container}>
              <TouchableOpacity
                onPress={() => {
                  onIconClick(TEST_SPEAKER);
                }}
                delayPressIn={0}
                style={styles.icon}>
                <FontAwesome name="volume-up" size={50} color="grey" />
              </TouchableOpacity>
              <Text>Speaker</Text>
            </View>
            <View style={styles.icon_container}>
              <TouchableOpacity
                onPress={() => {
                  onIconClick(TEST_MICROPHONE);
                }}
                delayPressIn={0}
                style={styles.icon}>
                <FontAwesome name="microphone" size={50} color="grey" />
              </TouchableOpacity>
              <Text>Microphone</Text>
            </View>
          </View>
        </View>
        <View style={styles.test_group}>
          <View style={styles.test_group_top}>
            <Text style={{fontWeight: 'bold'}}>Motion</Text>
            <TouchableOpacity style={styles.btn_test_group}>
              <Text style={{color: 'white'}}>Check Group</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.test_group_icon_container}>
            <View style={styles.icon_container}>
              <TouchableOpacity
                onPress={() => onIconClick(TEST_ACCELEROMETER)}
                delayPressIn={0}
                style={styles.icon}>
                <SimpleLineIcons name="speedometer" size={50} color="grey" />
              </TouchableOpacity>
              <Text>Accelerometer</Text>
            </View>
            <View style={styles.icon_container}>
              <TouchableOpacity
                onPress={() => onIconClick(TEST_COMPASS)}
                delayPressIn={0}
                style={styles.icon}>
                <Fontisto name="compass" size={50} color="grey" />
              </TouchableOpacity>
              <Text>Compass</Text>
            </View>
          </View>
        </View>
        <View style={styles.test_group}>
          <View style={styles.test_group_top}>
            <Text style={{fontWeight: 'bold'}}>Connectivity</Text>
            <TouchableOpacity style={styles.btn_test_group}>
              <Text style={{color: 'white'}}>Check Group</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.test_group_icon_container}>
            <View style={styles.icon_container}>
              <TouchableOpacity
                onPress={() => onIconClick(TEST_BLUETOOTH)}
                delayPressIn={0}
                style={styles.icon}>
                <FontAwesome name="bluetooth-b" size={50} color="grey" />
              </TouchableOpacity>
              <Text>Bluetooth</Text>
            </View>
            <View style={styles.icon_container}>
              <TouchableOpacity
                onPress={() => onIconClick(TEST_WiFi)}
                delayPressIn={0}
                style={styles.icon}>
                <FontAwesome name="wifi" size={50} color="grey" />
              </TouchableOpacity>
              <Text>WiFi</Text>
            </View>
            <View style={styles.icon_container}>
              <TouchableOpacity
                onPress={() => onIconClick(TEST_CELLULAR)}
                delayPressIn={0}
                style={styles.icon}>
                <Ionicons name="ios-cellular" size={50} color="grey" />
              </TouchableOpacity>
              <Text>Cellular</Text>
            </View>
          </View>
        </View>
        <View style={styles.test_group}>
          <View style={styles.test_group_top}>
            <Text style={{fontWeight: 'bold'}}>Hardware</Text>
            <TouchableOpacity style={styles.btn_test_group}>
              <Text style={{color: 'white'}}>Check Group</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.test_group_icon_container}>
            <View style={styles.icon_container}>
              <TouchableOpacity
                onPress={() => onIconClick(TEST_CHARGER)}
                delayPressIn={0}
                style={styles.icon}>
                <Ionicons name="battery-charging" size={50} color="grey" />
              </TouchableOpacity>
              <Text>Charger</Text>
            </View>
            <View style={styles.icon_container}>
              <TouchableOpacity
                onPress={() => onIconClick(TEST_LIGHT)}
                delayPressIn={0}
                style={styles.icon}>
                <Entypo name="light-up" size={50} color="grey" />
              </TouchableOpacity>
              <Text>Light Sensor</Text>
            </View>
          </View>
        </View>
        <View style={styles.test_group}>
          <View style={styles.test_group_top}>
            <Text style={{fontWeight: 'bold'}}>Camera</Text>
            <TouchableOpacity style={styles.btn_test_group}>
              <Text style={{color: 'white'}}>Check Group</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.test_group_icon_container}>
            <View style={styles.icon_container}>
              <TouchableOpacity
                onPress={() => onIconClick(TEST_FRONT_CAMERA)}
                delayPressIn={0}
                style={styles.icon}>
                <Ionicons name="camera-outline" size={50} color="grey" />
              </TouchableOpacity>
              <Text>Front Camera</Text>
            </View>
            <View style={styles.icon_container}>
              <TouchableOpacity
                onPress={() => onIconClick(TEST_BACK_CAMERA)}
                delayPressIn={0}
                style={styles.icon}>
                <Ionicons
                  name="camera-reverse-outline"
                  size={50}
                  color="grey"
                />
              </TouchableOpacity>
              <Text>Back Camera</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => scrollsTo(0)}
        style={styles.fab}
        delayPressIn={0}>
        <Entypo name="arrow-with-circle-up" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Main_Screen;
