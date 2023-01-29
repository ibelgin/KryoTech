/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {memo, useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Image, StatusBar, Alert} from 'react-native';
import Container from 'layout/Container';
import DataComponent from 'components/DataComponent';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/AntDesign';
import {DataValueType} from 'types/DataValuetype';
import Text from 'components/Text';
import {Colors} from 'configs';
import {IMAGE} from 'images';
import Theme from 'style/Theme';
import scale from 'utils/scale';

interface HomeProps {}

const Home = memo((_props: HomeProps) => {
  const [name, setName] = React.useState('Belgin');
  const [data, setData] = React.useState({
    current: 0.0,
    gas: 0.0,
    humidity: 0.0,
    load: 0.0,
    power: 0.0,
    temp: 0,
  });

  const setDataNow = (value: DataValueType) => {
    for (const key1 in value) {
      for (const key2 in value[key1]) {
        setData(value[key1][key2]);
      }
    }
  };

  useEffect(() => {
    // try {
    //   const onValueChange = database()
    //     .ref('/Sensors/')
    //     .limitToLast(1)
    //     .on('value', snapshot => {
    //       const value = snapshot.val();
    //       setDataNow(value);
    //     });
    //   return () =>
    //     database()
    //       .ref('/Sensors/')
    //       .off('value', test => console.log(test));
    // } catch {
    //   Alert.alert('KryoTech', 'Error 098');
    // }
  }, []);

  return (
    <Container style={styles.container}>
      <StatusBar
        backgroundColor={Colors.StatusBarColor}
        barStyle="light-content"
      />
      <View style={styles.initContainer}>
        <Text style={styles.heading}>KryoTech </Text>
        <Text style={styles.welcome}>Welcome back {name} !</Text>
        <View style={Theme.flexRowSpace}>
          <Text style={styles.text}>Current </Text>
          <Text style={styles.text}>Gas </Text>
          <Text style={styles.text}>Humidity </Text>
          <Text style={styles.text}>Load </Text>
          <Text style={styles.text}>Temp </Text>
          <Icon style={styles.textIcon} size={30} name="setting" />
        </View>
        <View style={styles.gap} />
      </View>
      <View style={styles.gap} />
      <DataComponent
        image={IMAGE.energy}
        title="Current"
        value={data.current}
        dataType={'Amps'}
      />
      <DataComponent
        image={IMAGE.gas}
        title="Gas"
        value={data.gas}
        dataType={'ppm'}
      />
      <DataComponent
        image={IMAGE.power}
        title="Power"
        value={data.power}
        dataType={'Watt'}
      />
      <DataComponent
        image={IMAGE.onion}
        title="Load"
        value={data.load}
        dataType={'Kg'}
      />
      <DataComponent
        image={IMAGE.humidity}
        title="Humidity"
        value={data.humidity}
        dataType={'%'}
      />
      <DataComponent
        image={IMAGE.temp}
        title="Temprature"
        value={data.temp}
        dataType={'°C'}
      />
    </Container>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Colors.SuperLightGreen,
  },
  initContainer: {
    backgroundColor: Colors.SuperDarkGreen,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: '600',
    marginTop: scale(30),
    color: Colors.White,
  },
  text: {
    fontSize: 18,
    color: Colors.Green,
    marginTop: scale(20),
  },
  welcome: {
    color: Colors.LightGray,
    marginTop: 10,
  },
  gap: {
    height: 30,
  },
  font: {
    fontSize: 16,
  },
  textIcon: {
    fontSize: 20,
    color: Colors.LightGreen,
    marginTop: scale(20),
  },
});

export default Home;
