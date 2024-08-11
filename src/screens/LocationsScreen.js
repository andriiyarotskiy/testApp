import React, {useCallback, useMemo, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import locationActions from '../store/actions/location';
import SCREENS from '../constants/screens';
import Header from '../components/Header';

const LocationsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const locations = useSelector(state => state.location.locations);

  const [searchTerm, setSearchTerm] = useState('');

  const openDetails = useCallback(item => {
    navigation.navigate(SCREENS.DETAILS, item);
  }, []);

  const onDelete = useCallback(id => {
    dispatch(locationActions.delete(id));
  }, []);

  const renderItem = ({item, drag, isActive}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onLongPress={drag}
        disabled={isActive || !!searchTerm.length}>
        <View style={styles.rowItem}>
          <View>
            <Text style={styles.text}>{item.name}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button title={'Details'} onPress={() => openDetails(item)} />
            <Button
              title={'Delete'}
              onPress={() => {
                onDelete(item.id);
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const filteredData = useMemo(() => {
    return locations.filter(el =>
      el.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm, locations]);

  return (
    <View style={styles.container}>
      <Header />

      <Button
        title="Create Location"
        onPress={() => navigation.navigate(SCREENS.CREATE_LOCATION)}
      />

      <TextInput
        placeholder="Filter By Name"
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.input}
        autoCapitalize="none"
        spellCheck={false}
      />

      <View style={styles.list}>
        <DraggableFlatList
          data={filteredData}
          onDragEnd={({data}) => {
            dispatch(locationActions.setLocations(data));
          }}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default LocationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 40,
    paddingLeft: 20,
    marginTop: 15,
    marginBottom: 10,
  },
  rowItem: {
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  list: {
    flex: 1,
    marginBottom: 50,
  },
});
