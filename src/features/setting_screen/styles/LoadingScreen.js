const {StyleSheet, Dimensions} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7abe07',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    backgroundColor: 'white',
    height:10,
    width: Dimensions.get('window').width - 150,
    marginVertical:10,
  },
});
export default styles;
