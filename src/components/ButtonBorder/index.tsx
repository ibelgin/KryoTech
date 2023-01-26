import React, {memo} from 'react';
import {
  Text,
  TextProps,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  ColorValue,
} from 'react-native';

import {Colors} from 'configs';
import Theme from 'style/Theme';

interface ButtonBorderProps {
  title?: string;
  style?: ViewStyle;
  textProps?: TextProps;
  onPress?: () => void;
  borderColor?: ColorValue | string;
}

const ButtonBorder = memo(
  ({
    borderColor = Colors.Primary,
    title,
    style,
    onPress,
  }: ButtonBorderProps) => (
    <>
      <TouchableOpacity
        style={[styles.container, {borderColor: borderColor, ...style}]}
        onPress={onPress}
        activeOpacity={0.54}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </>
  ),
);

export default ButtonBorder;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    height: 60,
    borderRadius: 10,
    borderWidth: 2,
    ...Theme.flexDirection,
    ...Theme.center,
  },
  text: {
    fontWeight: '500',
    fontSize: 17,
    color: Colors.LightGreen,
  },
});
