import React from 'react';
import {
  SafeAreaView as DefaultView,
  ViewProps,
  ViewStyle,
  ScrollView,
  PressableStateCallbackType,
  StatusBar,
} from 'react-native';

import {Colors} from 'configs';

interface Props extends ViewProps {
  children?:
    | React.ReactNode
    | ((state: PressableStateCallbackType) => React.ReactNode)
    | any;
  style?: ViewStyle;
}

const Container = (props: Props) => (
  <DefaultView style={[{flex: 1, backgroundColor: Colors.Black}, props.style]}>
    <StatusBar
      barStyle="dark-content"
      backgroundColor={Colors.White}
      translucent
    />
    <ScrollView>{props.children}</ScrollView>
  </DefaultView>
);

export default Container;
