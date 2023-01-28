/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {memo, useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Image, StatusBar} from 'react-native';
import Container from 'layout/Container';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from 'configs';
import Text from 'components/Text';
import {IMAGE} from 'images';
import Theme from 'style/Theme';
import scale from 'utils/scale';
import TitleTextButton from 'components/TitleTextButton';
import Icon from 'react-native-vector-icons/AntDesign';

interface HomeProps {}

const Home = memo((_props: HomeProps) => {
  const [name, setName] = React.useState('Belgin');
  const [data, setData] = React.useState({
    current: 2.09,
    gas: 43,
    humidity: 64.8,
    load: 100.22,
    power: 480.7,
    temp: 30.8,
  });
  useEffect(() => {
    // initialConfig();
    // checkIfSignedIn();
  });

  return (
    <Container style={styles.container}>
      <StatusBar backgroundColor={'#344747'} barStyle="light-content" />
      <View style={styles.initContainer}>
        <Text style={styles.heading}>KryoTech </Text>
        <Text style={styles.welcome}>Welcome {name} !</Text>
        <View style={Theme.flexRowSpace}>
          <Text style={styles.text}>Current </Text>
          <Text style={styles.text}>Gas </Text>
          <Text style={styles.text}>Humidity </Text>
          <Text style={styles.text}>Load </Text>
          <Text style={styles.text}>Temp </Text>
        </View>
        <View style={{height: 30}} />
      </View>

      <View style={{height: 20}} />

      <View style={styles.box}>
        <View style={styles.instabox}>
          <Image source={IMAGE.energy} style={styles.img} />
        </View>
        <View style={styles.main}>
          <Text style={{fontSize: 17, color: '#62B7AD', fontWeight: '400'}}>
            Current{' '}
          </Text>
          <Text style={{fontSize: 22, fontWeight: '500'}}>2.09 Amps</Text>
        </View>
      </View>
    </Container>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#E4F3F1',
  },
  initContainer: {
    backgroundColor: '#253939',
    paddingHorizontal: 20,
  },
  heading: {
    color: Colors.White,
    fontSize: 25,
    fontWeight: '600',
    marginTop: scale(30),
  },
  text: {
    color: '#62B7AD',
    fontSize: 18,
    marginTop: scale(20),
  },
  box: {
    margin: 15,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    height: scale(100),
    marginTop: scale(5),
    borderRadius: 10,
    ...Theme.flexRow,
  },
  welcome: {
    color: '#758484',
    marginTop: 10,
  },
  instabox: {
    height: 70,
    width: 70,
    margin: 10,
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  main: {
    padding: 10,
  },
});

export default Home;
