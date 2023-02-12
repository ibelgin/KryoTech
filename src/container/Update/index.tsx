/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {memo, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  Alert,
  TextInput,
} from 'react-native';
import Container from 'layout/Container';
import Text from 'components/Text';
import {Colors} from 'configs';
import scale from 'utils/scale';
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonIconText from 'components/ButtonIconText';
import {UpdateData} from 'utils/update';
import {useNavigation} from '@react-navigation/native';

interface UpdateProps {}

const Update = memo((_props: UpdateProps) => {
  const [temp, setTemp] = useState('');
  const [humidity, setHumidity] = useState('');

  const {navigate, setOptions, goBack} = useNavigation();

  const update = () => {
    if (!temp && !humidity) {
      Alert.alert('KryoTech', 'Empty Data');
    } else if (!humidity) {
      UpdateData('temperature', temp);
    } else if (!temp) {
      UpdateData('humidity', humidity);
    } else {
      UpdateData('temperature', temp);
      UpdateData('humidity', humidity);
    }
  };

  return (
    <Container style={styles.container}>
      <StatusBar
        backgroundColor={Colors.StatusBarColor}
        barStyle="light-content"
      />
      <View style={styles.initContainer}>
        <Text style={styles.heading}>
          <Icon name="left" size={24} onPress={() => goBack()} /> Update
        </Text>
        <Text style={styles.welcome}>Gas and Humidity</Text>
      </View>
      <View style={styles.gap} />
      <Text style={styles.minitext}>Humidity</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Humidity"
        placeholderTextColor="#7CBBBD"
        onChangeText={text => setHumidity(text)}
        value={humidity}
      />
      <Text style={styles.minitext}>Temprature</Text>

      <TextInput
        style={styles.textinput}
        placeholder="Temprature"
        placeholderTextColor="#7CBBBD"
        onChangeText={text => setTemp(text)}
        value={temp}
      />
      <ButtonIconText
        backgroundColor={Colors.LightGreen}
        title={'Update the Value'}
        onPress={update}
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
    backgroundColor: Colors.SuperDarkGreen,
  },
  font: {
    fontSize: 16,
  },
  textIcon: {
    fontSize: 20,
    color: Colors.LightGreen,
    marginTop: scale(20),
  },
  textinput: {
    height: 70,
    margin: 20,
    borderColor: '#7CBBBD',
    borderBottomWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    color: '#444B68',
    fontSize: 15,
    fontWeight: 'bold',
  },
  minitext: {
    color: '#15A072',
    fontSize: 18,
    paddingHorizontal: 20,
    marginTop: 30,
    fontWeight: '500',
  },
});

export default Update;
