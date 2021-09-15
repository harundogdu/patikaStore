/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#eaeaea',
    margin: 5,
    borderRadius: 10,
    flex: 1,
  },
  image_container: {
    alignItems: 'center',
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'contain',
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 4,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    marginVertical: 5,
  },
  inStock: {
    color: 'red',
    fontWeight: '900',
    fontSize: 20,
  },
  text_container: {
    width: Dimensions.get('window').width / 2 - 50,
  },
});
