import React, {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from 'configs';

import Login from 'container/Login';

const Stack = createNativeStackNavigator();

const RootStack = memo(() => {
  return (
    <Stack.Navigator initialRouteName={Routes.Login}>
      <Stack.Screen
        name={Routes.Login}
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
});

export default RootStack;
