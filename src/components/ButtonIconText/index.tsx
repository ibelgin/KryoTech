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

interface ButtonIconTextProps {
  title?: string;
  style?: ViewStyle;
  titleColor?: string;
  textProps?: TextProps;
  onPress?: () => void;
  borderColor?: ColorValue | string;
  backgroundColor?: ColorValue | string;
  icon: any;
}

const ButtonIconText = memo(
  ({
    backgroundColor = Colors.Primary,
    title,
    style,
    titleColor = Colors.White,
    onPress,
    icon,
  }: ButtonIconTextProps) => (
    <>
      <TouchableOpacity
        style={[styles.container, {backgroundColor: backgroundColor, ...style}]}
        onPress={onPress}
        activeOpacity={0.54}>
        {icon}
        <Text style={[styles.text, {color: titleColor}]}>{title}</Text>
      </TouchableOpacity>
    </>
  ),
);

export default ButtonIconText;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    height: 60,
    borderRadius: 10,
    ...Theme.flexDirection,
    ...Theme.center,
  },
  text: {
    fontWeight: '500',
    fontSize: 17,
    marginLeft: 20,
  },
});
