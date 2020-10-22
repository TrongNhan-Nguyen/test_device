const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },
  txt_name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  icon_group: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  icon_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
  },
  txt_container:{
      marginLeft:5,
  },
  txt_label: {
      flex:1,
  },
  txt_info: {
      fontWeight:'bold',
      flex:1
  },
});
export default styles;
