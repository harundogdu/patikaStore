/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Card from '../shared-components/Card';
import Header from '../shared-components/Header';
import SearchBox from '../shared-components/SearchBox';
import styles from './Container.style';
import products from '../../assets/product.json';
export default function Container() {
  const renderProduct = ({item}) => <Card product={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBox />
      <FlatList data={products} renderItem={renderProduct} numColumns={2} />
    </SafeAreaView>
  );
}
