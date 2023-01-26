module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@components/*': './src/components/*',
          '@container/*': './src/container/*',
          '@configs/*': './src/configs/*',
          '@elements/*': './src/elements/*',
          '@navigation/*': './src/navigation/*',
          '@hooks/*': './src/hooks/*',
          '@svg/*': './src/svg/*',
          '@images/*': './src/images/*',
          '@configs': './src/configs/index',
          '@store/*': './src/store/*',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
