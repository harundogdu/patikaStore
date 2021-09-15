/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.style';
export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PatikaStore</Text>
    </View>
  );
}
