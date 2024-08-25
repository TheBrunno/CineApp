module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ["@babel/plugin-transform-private-methods", { "loose": true }],
    "@babel/plugin-transform-export-namespace-from",
  'react-native-reanimated/plugin',
  ],
  };