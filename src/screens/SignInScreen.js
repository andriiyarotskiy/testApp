import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import authActions from '../store/actions/auth';
import uuid from 'react-native-uuid';

function SignInScreen() {
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    email: '',
    password: '',
  });

  const handleOnChange = (key, text) => {
    setState(prev => ({...prev, [key]: text}));
  };

  const onSignIn = () => {
    const token = uuid.v4();
    dispatch(
      authActions.login({
        user: state,
        token,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={state.email}
        onChangeText={text => handleOnChange('email', text)}
        style={styles.input}
        autoCapitalize="none"
        spellCheck={false}
      />
      <TextInput
        placeholder="Password"
        value={state.password}
        onChangeText={text => handleOnChange('password', text)}
        secureTextEntry
        style={styles.input}
        autoCapitalize="none"
        spellCheck={false}
      />
      <Button
        title="Sign in"
        containerStyle={{alignItems: 'center'}}
        style={styles.submitButton}
        onPress={onSignIn}
      />
    </View>
  );
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 40,
    paddingLeft: 20,
    marginBottom: 10,
  },
  submitButton: {
    width: '96%',
  },
});
