# react-native-svgs-to-icon

- Add peer dependencies
  `yarn add -D patch-package webpack-iconfont-plugin-nodejs react-native-asset`

- Add this to `react-native.config.js`

  ```js
  module.exports = {
    'react-native-svgs-to-icon': {
      output: './src/components', // icon components output destination
      input: './svgs', // svgs folder input destination
      fontOutput: './fontOutput', // font output destination could put this folder into .gitingore
      fontName: 'MyFont', // font name
      fontOutputCopyTo: './src/assets/fonts', // copy font to assets/fonts
    },
    assets: ['./src/assets/fonts'],
  };
  ```

- Add this into postinstall

  ```
  "postinstall": "react-native-svgs-to-icon init && patch-package && react-native-svgs-to-icon generate && react-native-asset"
  ```

- Rebuild app with `yarn ios`

- Usage:

  ```js
  export default function App() {
    return <Icon name="keyboard_double_arrow_up" style={{ marginTop: 100 }} size={24} color="green" />;
  }
  ```
