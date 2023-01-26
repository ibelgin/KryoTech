import {Dimensions, Platform} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const PLATFORM = Platform.OS;
const OS_VERSION = Platform.Version;
const IS_IOS = Platform.OS === 'ios';
const IS_ANDROID = Platform.OS === 'android';

const SUPPORTED_PLATFORM = {
  IOS: 'ios',
  ANDROID: 'android',
};

export {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
  PLATFORM,
  OS_VERSION,
  IS_IOS,
  IS_ANDROID,
  SUPPORTED_PLATFORM,
};
