import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/services/rootNavigation';
import {getAuthDataFromStorage} from './src/services/authAsyncStorage';
import authActions from './src/store/actions/auth';
import Navigation from './src/navigation/Navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      await setIsLoading(true);
      const {token, user} = await getAuthDataFromStorage();

      if (token) {
        await store.dispatch(
          authActions.login({
            token,
            user,
          }),
        );
      }
      await setIsLoading(false);
    };
    void init();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <GestureHandlerRootView style={{flex: 1}}>
          <Navigation />
        </GestureHandlerRootView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
