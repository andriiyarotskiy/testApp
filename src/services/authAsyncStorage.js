import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getAuthDataFromStorage() {
  const token = await AsyncStorage.getItem('token');
  const user = await AsyncStorage.getItem('user');
  return {
    token,
    user: JSON.parse(user),
  };
}

export async function setAuthToStorage(token, user) {
  await AsyncStorage.setItem('token', token);
  await AsyncStorage.setItem('user', JSON.stringify(user));
}

export async function resetStorage() {
  await AsyncStorage.clear();
}
