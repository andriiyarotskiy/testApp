import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import uuid from 'react-native-uuid';
import locationActions from '../store/actions/location';
import {useDispatch} from 'react-redux';

const initialState = {
  name: '',
  country: '',
  city: '',
  state: '',
  address: '',
};

const CreateLocationScreen = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);

  const handleOnChange = (key, text) => {
    setState(prev => ({...prev, [key]: text}));
  };

  const addLocation = () => {
    state.id = uuid.v4();
    dispatch(locationActions.create(state));
    setState(initialState);
  };

  return (
    <View style={styles.container}>
      {Object.entries(state).map(([key, value]) => (
        <TextInput
          key={key}
          placeholder={key}
          value={value}
          onChangeText={text => handleOnChange(key, text)}
          style={styles.input}
          autoCapitalize="none"
          spellCheck={false}
        />
      ))}
      <Button
        title="Create"
        style={styles.submitButton}
        onPress={addLocation}
      />
    </View>
  );
};

export default CreateLocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 40,
    paddingLeft: 20,
    marginBottom: 10,
  },
});
