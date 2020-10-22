const {StyleSheet, Dimensions} = require('react-native');
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  header_title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  main: {
    alignItems: 'center',
  },
  icon_container: {
    alignItems: 'center',
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_group: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width,
    marginTop: 10,
  },
  btn_container: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    width: width,
    paddingBottom: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  btn: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#b38507',
    borderRadius: 20,
  },
  btn_text: {
    color: '#b38507',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  test_group: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  test_group_top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn_test_group: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: '#eba449',
    borderRadius: 20,
  },
  test_group_icon_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  fab: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    bottom: 10,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eba449'
  },
});
export default styles;
