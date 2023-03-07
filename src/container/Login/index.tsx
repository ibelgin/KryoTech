/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {memo, useEffect, useRef} from 'react';
import {StyleSheet, View, Image, StatusBar} from 'react-native';
import Container from 'layout/Container';
import ButtonIconText from 'components/ButtonIconText';
import {
  initialConfig,
  checkIfSignedIn,
  signIn,
  onSignIn,
} from 'utils/google-signin';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors, Constants, Routes} from 'configs';
import Text from 'components/Text';
import Strings from './strings.en';
import Theme from 'style/Theme';
import {IMAGE} from 'images';
import {useNavigation} from '@react-navigation/native';

interface LoginProps {}

const Login = memo((_props: LoginProps) => {
  const {navigate} = useNavigation();

  useEffect(() => {
    initialConfig();
    checkIfSignedIn().then(() => {
      navigate(Routes.Home);
    });
  });

  return (
    <Container style={styles.container}>
      <StatusBar backgroundColor={'transparent'} />
      <View style={styles.illustration_view}>
        <Image source={IMAGE.cover} style={{height: '100%', width: '100%'}} />
      </View>
      <Text paddingTop={50} paddingHorizontal={20} heading>
        {Strings.WELCOME}
      </Text>
      <Text padding={20} description>
        {Strings.DESC}
      </Text>
      <ButtonIconText
        onPress={() => signIn()}
        icon={
          <AntDesign name={Strings.ICON_NAME} size={24} color={Colors.White} />
        }
        backgroundColor={Colors.LightGreen}
        title={Strings.SIGN_IN}
      />
    </Container>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    backgroundColor: Colors.White,
  },
  illustration_view: {
    height: Constants.height / 1.6,
    width: Constants.width,
    ...Theme.center,
  },
});

export default Login;
