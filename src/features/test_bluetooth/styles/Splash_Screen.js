const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#099dfe',
  },
  btn_cancel: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
    marginTop: 10,
  },
  icon_container: {
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center'
  },

  icon: {
    textAlign: 'center',
    marginTop: 40,
  },
  txt_title: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 20,
  },
  txt_tutor: {
    color: 'white',
    textAlign: 'center',
  },
  btn_begin: {
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 10,
  },
  txt_skip: {
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginTop: 10,
  },
});
export default styles;
