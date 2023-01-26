import React from 'react';
import {ColorValue, Text, TextStyle} from 'react-native';
import {Colors} from 'configs';

export interface TextProps {
  color?: ColorValue | string;
  size?: number;
  style?: TextStyle;
  children?: any;
  onPress?: () => void;
  numberOfLines?: number;
  padding?: number;
  fontWeight?: any;
  paddingHorizontal?: number;
  heading?: boolean;
  description?: boolean;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

export default ({
  color,
  style,
  onPress,
  numberOfLines,
  children,
  size,
  padding,
  fontWeight,
  paddingHorizontal,
  heading,
  description,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  ...props
}: TextProps) => {
  if (heading) {
    color = Colors.DarkGreen;
    fontWeight = '600';
    size = 25;
  }
  if (description) {
    color = Colors.LightGreen;
    fontWeight = '400';
    size = 15;
  }
  return (
    <Text
      {...props}
      adjustsFontSizeToFit={true}
      style={[
        {
          color: color,
          fontSize: size,
          padding: padding,
          fontWeight: fontWeight,
          paddingHorizontal: paddingHorizontal,
          paddingTop: paddingTop,
          paddingBottom: paddingBottom,
          paddingLeft: paddingLeft,
          paddingRight: paddingRight,
        },
        style,
      ]}
      numberOfLines={numberOfLines}
      onPress={onPress}>
      {children}
    </Text>
  );
};
