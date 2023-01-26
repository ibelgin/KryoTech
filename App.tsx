import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, View} from 'react-native';
import RootStack from 'navigation';
import Theme from 'style/Theme';
import {Colors} from 'configs';

export default function App() {
  return (
    <View style={[Theme.flexOne, {backgroundColor: Colors.White}]}>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </View>
  );
}
