/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {memo, useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Container from 'layout/Container';
import ButtonIconText from 'components/ButtonIconText';
import {Colors, Constants} from 'configs';
import Strings from './strings.en';
import {initialConfig, checkIfSignedIn, signIn} from 'utils/google-signin';
import Text from 'components/Text';

import AntDesign from 'react-native-vector-icons/AntDesign';

interface LoginProps {}

const Login = memo((_props: LoginProps) => {
  useEffect(() => {
    initialConfig();
    checkIfSignedIn();
  });

  return (
    <Container style={styles.container}>
      <View style={styles.illustration_view} />
      <Text paddingTop={90} paddingHorizontal={20} heading>
        {Strings.WELCOME}
      </Text>
      <Text padding={20} description>
        {Strings.DESC}
      </Text>
      <ButtonIconText
        onPress={() =>
          signIn().then(val => {
            console.log(val);
          })
        }
        icon={
          <AntDesign name={Strings.ICON_NAME} size={24} color={Colors.White} />
        }
        title={Strings.SIGN_IN}
      />
    </Container>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: Colors.White,
  },
  illustration_view: {
    height: Constants.height / 2,
    width: Constants.width,
  },
});

export default Login;
