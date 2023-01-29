import React, {memo} from 'react';
import {StyleSheet, View, Image} from 'react-native';

import Theme from 'style/Theme';
import scale from 'utils/scale';
import Text from 'components/Text';

import {Colors} from 'configs';

interface TitleTextButtonProps {
  image?: any;
  title?: String;
  value?: any;
  dataType: String;
}

const DataComponent = memo(
  ({image, title, value, dataType}: TitleTextButtonProps) => (
    <>
      <View style={styles.box}>
        <View style={styles.instabox}>
          <Image source={image} style={styles.img} />
        </View>
        <View style={styles.main}>
          <Text style={styles.itemHead}>{title} </Text>
          <Text style={styles.value}>
            {value} <Text style={styles.font}>{dataType}</Text>
          </Text>
        </View>
      </View>
    </>
  ),
);

export default DataComponent;

const styles = StyleSheet.create({
  box: {
    margin: 15,
    backgroundColor: Colors.White,
    paddingHorizontal: 10,
    height: scale(100),
    marginTop: scale(5),
    borderRadius: 10,
    ...Theme.flexRow,
  },
  instabox: {
    height: scale(40),
    width: scale(40),
    margin: 10,
  },
  main: {
    padding: 10,
  },
  itemHead: {
    fontSize: 17,
    color: Colors.Green,
    fontWeight: '500',
  },
  value: {
    fontSize: 24,
    fontWeight: '500',
    color: Colors.DarkBlue,
  },
  font: {
    fontSize: 16,
  },
  img: {
    ...Theme.full,
    borderRadius: 10,
  },
});
