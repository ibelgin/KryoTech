/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {memo, useEffect, useCallback, useState} from 'react';
import {StyleSheet, View, Image, StatusBar, Alert} from 'react-native';
import Container from 'layout/Container';
import DataComponent from 'components/DataComponent';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/AntDesign';
import {DataValueType} from 'types/DataValuetype';
import {PowerType} from 'types/PowerType';
import Text from 'components/Text';
import {Colors} from 'configs';
import {IMAGE} from 'images';
import Theme from 'style/Theme';
import scale from 'utils/scale';
import {WINDOW_WIDTH} from 'shared/global/constants';
import {useNavigation} from '@react-navigation/native';
import {Routes} from 'configs';

import {LineChart} from 'react-native-chart-kit';

interface HomeProps {}

const Home = memo((_props: HomeProps) => {
  const {navigate, setOptions} = useNavigation();

  const [name, setName] = React.useState('');
  const [data, setData] = React.useState({
    current: 0.0,
    gas: 0.0,
    humidity: 0.0,
    load: 0.0,
    power: 0.0,
    temp: 0,
  });

  const [powerDate, setPowerDate] = useState([0]);
  const [datasets, setDatasets] = useState([0]);

  const navigateToUpdate = useCallback(() => {
    navigate(Routes.Update);
  }, [navigate]);

  const Linedata = {
    labels: powerDate,
    datasets: [
      {
        data: datasets,
        color: (opacity = 1) => '#008173',
      },
    ],
  };

  const setDataset = (value: PowerType) => {
    var todos = [...powerDate];
    var body = [...datasets];
    todos = [0];
    body = [0];
    for (const key1 in value) {
      for (const key2 in value[key1]) {
        body.push(value[key1][key2].power);
      }
      var d = new Date(Number(key1));
      todos.push(d.getHours().toString() + ':' + d.getMinutes().toString());
    }
    setPowerDate(todos);
    setDatasets(body);
  };

  const setDataNow = (value: DataValueType) => {
    for (const key1 in value) {
      for (const key2 in value[key1]) {
        setData(value[key1][key2]);
      }
    }
    console.log('data', data);
  };

  const chartConfig = {
    color: (opacity = 0) => '#007773',
    strokeWidth: 2,
    barPercentage: 0.5,
    backgroundColor: Colors.DarkGreen,
  };

  useEffect(() => {
    const onValueChange = database()
      .ref('/Sensors/')
      .limitToLast(1)
      .on('value', snapshot => {
        const value = snapshot.val();
        setDataNow(value);
        console.log(value);
      });

    const onChangeValue = database()
      .ref('/Power/')
      .limitToLast(8)
      .on('value', snapshot => {
        const value = snapshot.val();
        setDataset(value);
      });
    return () => {
      database()
        .ref('/Sensors/')
        .off('value', test => console.log(test));
      database()
        .ref('/Power/')
        .off('value', test => console.log(test));
    };
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
          <Icon
            style={styles.textIcon}
            size={30}
            name="setting"
            onPress={navigateToUpdate}
          />
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
      <LineChart
        data={Linedata}
        width={WINDOW_WIDTH + 30}
        transparent
        height={256}
        chartConfig={chartConfig}
        withVerticalLines={false}
        withHorizontalLines={false}
        bezier
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
