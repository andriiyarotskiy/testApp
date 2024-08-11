import React, {memo, useMemo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import authActions from "../store/actions/auth";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const userEmail = useSelector(state => state.auth.user.email);

  const onLogOut = () => {
    dispatch(authActions.logOut());
  };

  const greetingMessage = useMemo(() => {
    const currentTime = new Date().getHours();
    let greetingText = '';

    if (currentTime < 12) {
      greetingText = 'Good Morning';
    } else if (currentTime < 18) {
      greetingText = 'Good Afternoon';
    } else {
      greetingText = 'Good Evening';
    }
    return greetingText;
  }, []);

  return (
    <View style={styles.header}>
      <View>
        <Text>
          {greetingMessage}, {userEmail}
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={onLogOut}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(Header);


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
});
