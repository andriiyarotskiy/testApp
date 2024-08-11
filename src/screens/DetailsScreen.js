import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

const DetailsScreen = () => {
  const {params} = useRoute();
  const {name, address, city, country, state} = params;
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>Name: {name}</Text>
        <Text>Country: {country}</Text>
        <Text>State: {state}</Text>
        <Text>City: {city}</Text>
        <Text>Address: {address}</Text>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {},
  item: {},
});
