# react-native-svgs-to-icon

[![npm version](https://badge.fury.io/js/react-native-svgs-to-icon.svg)](https://badge.fury.io/js/react-native-svgs-to-icon) [![npm](https://img.shields.io/npm/dt/react-native-svgs-to-icon.svg?logo=npm)](https://www.npmjs.com/package/react-native-svgs-to-icon) [![npm](https://img.shields.io/bundlephobia/minzip/react-native-svgs-to-icon)](https://www.npmjs.com/package/react-native-svgs-to-icon)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg)](#contributors-)

[Example](https://github.com/namnh240795/react-native-svgs-to-icon-example)

### Installation

[![NPM](https://nodei.co/npm/react-native-svgs-to-icon.png?compact=true)](https://nodei.co/npm/react-native-svgs-to-icon/)

- Add install peer dependencies

  ```
  yarn add -D patch-package webpack-iconfont-plugin-nodejs react-native-asset react-native-svgs-to-icon
  ```

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
