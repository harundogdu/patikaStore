/* eslint-disable prettier/prettier */
import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBox.style';
export default function SearchBox() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search..." />
    </View>
  );
}
