const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
  clear: {
    type: `boolean`,
    default: true,
    alias: `c`,
    desc: `Clear the console`,
  },
  noClear: {
    type: `boolean`,
    default: false,
    desc: `Don't clear the console`,
  },
  debug: {
    type: `boolean`,
    default: false,
    alias: `d`,
    desc: `Print debug info`,
  },
  version: {
    type: `boolean`,
    alias: `v`,
    desc: `Print CLI version`,
  },
  // init: {
  //   type: `string`,
  //   alias: `init`,
  //   desc: `init setup`,
  // },
  // generate: {
  //   type: `string`,
  //   alias: `g`,
  //   desc: `generate`,
  // },
  // help: {
  //   type: `string`,
  //   alias: 'g',
  //   desc: 'Help info',
  // },
};

const commands = {
  help: { desc: `Print help info` },
  generate: { desc: `Generate icon` },
  init: { desc: `init setup` },
};

const helpText = meowHelp({
  name: `react-native-svgs-to-icon`,
  flags,
  commands,
});

const options = {
  inferType: true,
  description: false,
  hardRejection: false,
  flags,
};

module.exports = meow(helpText, options);
