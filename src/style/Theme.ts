import {StyleSheet} from 'react-native';
// import {Colors} from 'configs';
// import scale from '../utils/scale';

export default StyleSheet.create({
  flexRowSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexOne: {
    flex: 1,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  flexDirectionBottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  icons: {
    width: 24,
    height: 24,
  },
  icons32: {
    width: 32,
    height: 32,
  },
  icons16: {
    width: 16,
    height: 16,
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 4,
  },
});
