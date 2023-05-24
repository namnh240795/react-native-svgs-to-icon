const init = () => {
  const pathx = require('path');

  const fsx = require('fs-extra');
  fsx.ensureDirSync('patches');

  fsx.copyFileSync(
    pathx.join(process.cwd(), `node_modules/react-native-svgs-to-icon/patches/webpack-iconfont-plugin-nodejs+1.0.29.patch`),
    `patches/webpack-iconfont-plugin-nodejs+1.0.29.patch`,
  );
};

module.exports = { init };
