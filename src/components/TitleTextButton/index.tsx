import React, {memo} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import {Colors} from 'configs';
import Theme from 'style/Theme';

import Text from 'components/Text';
interface TitleTextButtonProps {
  title?: string;
  buttonText?: string;
}

const TitleTextButton = memo(({title, buttonText}: TitleTextButtonProps) => (
  <>
    <View style={styles.container}>
      <View style={styles.title_view}>
        <Text heading numberOfLines={1}>
          {title}
        </Text>
      </View>
      <TouchableOpacity style={styles.button_style}>
        <Text description numberOfLines={1}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  </>
));

export default TitleTextButton;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    ...Theme.flexDirection,
    ...Theme.center,
  },
  titlestyle: {
    color: Colors.Black,
  },
  title_view: {
    width: '50%',
  },
  button_style: {
    width: '50%',
    padding: 10,
    ...Theme.flexDirection,
    ...Theme.center,
  },
});
