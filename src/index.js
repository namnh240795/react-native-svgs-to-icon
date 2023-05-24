#!/usr/bin/env node

/**
 * @agiletechvn/super-app-cli
 * Agiletech command
 *
 * @author YellowCandle <https://github.com/namnh240795/namnh240795>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
  init({ clear });
  input.includes(`help`) && cli.showHelp(0);

  if (input.includes(`generate`)) {
    const { generate } = require('./lib/generate');
    generate();
  }

  if (input.includes(`init`)) {
    const { init: libInit } = require('./lib/init');
    libInit();
  }

  debug && log(flags);
})();
