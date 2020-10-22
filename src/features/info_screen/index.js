import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from './styles/InfoScreen';
import DeviceInfo from 'react-native-device-info';
import PixelRatio from 'react-native/Libraries/Utilities/PixelRatio';
import RNFetchBlob from 'rn-fetch-blob';
const Info_Screen = () => {
  //   const [cpu, setCpu] = useState('');
  //   const [ram, setRam] = useState('');
  //   const [backCam, setBackCam] = useState('');
  //   const [frontCam, setFrontCam] = useState('');
  //   const [os, setOS] = useState('');
  //   const [size, setSize] = useState('');
  //   const [res, setRes] = useState('');
  //   const [density, setDensity] = useState('');
  //   const [storage, setStorage] = useState('');
  RNFetchBlob.fs.df().then((response) => {
    console.log('External free space in bytes: ' + response.external_free);
    console.log('External total space in bytes: ' + response.external_total);
    console.log('Internal free space in bytes: ' + response.internal_free);
    console.log('Internal total space in bytes: ' + response.internal_total);
  });
  const deviceInfo = async () => {
    try {
      console.log('--------Device Information--------');
      console.log('Pixel Ratio:', PixelRatio.get());
      console.log('Brand:', DeviceInfo.getBrand());
      console.log('Build Number:', DeviceInfo.getBuildNumber());
      console.log('Device ID:', DeviceInfo.getDeviceId());
      console.log('Model:', DeviceInfo.getModel());
      console.log('Readable Version:', DeviceInfo.getReadableVersion());
      console.log('System Name:', DeviceInfo.getSystemName());
      console.log('System Version:', DeviceInfo.getSystemVersion());
      console.log('Unique Id:', DeviceInfo.getUniqueId());

      console.log('User Agent:', await DeviceInfo.getUserAgent());
      console.log('Battery Level:', await DeviceInfo.getBatteryLevel());
      console.log('Base os:', await DeviceInfo.getBaseOs());
      console.log('Device Name:', await DeviceInfo.getDeviceName());
      console.log('Total Memory:', await DeviceInfo.getTotalMemory());
      console.log('Capacity:', await DeviceInfo.getTotalDiskCapacity());
      console.log('Product:', await DeviceInfo.getProduct());
      console.log('Serial Number:', await DeviceInfo.getSerialNumber());
      console.log('Free disk storage:', await DeviceInfo.getFreeDiskStorage());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    deviceInfo();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.txt_name}>Iphone 8</Text>
      <Text style={styles.txt_uuid}>01234567891011121224442214343</Text>
      <View style={styles.icon_group}>
        <View style={styles.icon_container}>
          <Feather name="cpu" size={50} />
          <View style={styles.txt_container}>
            <Text style={styles.txt_info}>J86AP</Text>
            <Text style={styles.txt_label}>CPU</Text>
          </View>
        </View>
        <View style={styles.icon_container}>
          <FontAwesome5
            name="memory"
            size={40}
            style={{transform: [{rotate: '-90deg'}]}}
          />
          <View style={{...styles.txt_container, marginLeft: 0}}>
            <Text style={styles.txt_info}>1.95</Text>
            <Text style={styles.txt_label}>RAM</Text>
          </View>
        </View>
        <View style={styles.icon_container}>
          <FontAwesome5 name="camera-retro" size={50} />
          <View style={styles.txt_container}>
            <Text style={styles.txt_info}>12MP</Text>
            <Text style={styles.txt_label}>MAIN</Text>
          </View>
        </View>
      </View>
      <View style={styles.icon_group}>
        <View style={styles.icon_container}>
          <MaterialIcons name="photo-camera-front" size={50} />
          <View style={styles.txt_container}>
            <Text style={styles.txt_info}>5MP</Text>
            <Text style={styles.txt_label}>FRONT</Text>
          </View>
        </View>
        <View style={styles.icon_container}>
          <Feather name="settings" size={50} />
          <View style={styles.txt_container}>
            <Text style={styles.txt_info}>12.4.8</Text>
            <Text style={styles.txt_label}>IOS</Text>
          </View>
        </View>
        <View style={styles.icon_container}>
          <SimpleLineIcons name="size-fullscreen" size={40} />
          <View style={styles.txt_container}>
            <Text style={styles.txt_info}>3.5 INCH</Text>
            <Text style={styles.txt_label}>SIZE</Text>
          </View>
        </View>
      </View>

      <View style={styles.icon_group}>
        <View style={styles.icon_container}>
          <FontAwesome5 name="border-style" size={50} />
          <View style={styles.txt_container}>
            <Text style={styles.txt_info}>1080x720</Text>
            <Text style={styles.txt_label}>Resolution</Text>
          </View>
        </View>
        <View style={styles.icon_container}>
          <FontAwesome5 name="border-none" size={50} />
          <View style={styles.txt_container}>
            <Text style={styles.txt_info}>480ppi</Text>
            <Text style={styles.txt_label}>Density</Text>
          </View>
        </View>
        <View style={styles.icon_container}>
          <MaterialIcons name="storage" size={50} />
          <View style={styles.txt_container}>
            <Text style={styles.txt_info}>32GB</Text>
            <Text style={styles.txt_label}>Storage</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Info_Screen;
