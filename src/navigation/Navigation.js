import React from 'react';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SCREENS from '../constants/screens';

import SignInScreen from '../screens/SignInScreen';
import LocationsScreen from '../screens/LocationsScreen';
import CreateLocationScreen from '../screens/CreateLocationScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const token = useSelector(state => state.auth.token);
  return (
    <Stack.Navigator
      initialRouteName={token == null ? SCREENS.SIGN_IN : SCREENS.LOCATIONS}>
      {token === null ? (
        <Stack.Group>
          <Stack.Screen
            name={SCREENS.SIGN_IN}
            component={SignInScreen}
            options={{
              title: 'Sign in',
              animationTypeForReplace: token === null ? 'pop' : 'push',
            }}
          />
        </Stack.Group>
      ) : (
        <>
          <Stack.Group>
            <Stack.Screen
              name={SCREENS.LOCATIONS}
              component={LocationsScreen}
            />
            <Stack.Screen
              name={SCREENS.CREATE_LOCATION}
              component={CreateLocationScreen}
            />
          </Stack.Group>

          <Stack.Group screenOptions={{presentation: 'modal'}}>
            <Stack.Screen name={SCREENS.DETAILS} component={DetailsScreen} />
          </Stack.Group>
        </>
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
