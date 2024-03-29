const generate = () => {
  const path = require('path');

  const fs = require('fs-extra');
  const prettier = require('prettier');
  const WebpackIconfontPluginNodejs = require('webpack-iconfont-plugin-nodejs');

  const packageName = require('../../package.json').name;
  const configs = require(path.resolve(process.cwd(), 'react-native.config.js'));

  const realConfig = configs[packageName];

  const iconFolder = path.resolve(process.cwd(), realConfig.output);
  const svgsFolder = path.resolve(process.cwd(), realConfig.input);
  const dist = path.resolve(process.cwd(), realConfig.fontOutput);
  const copyToFolder = realConfig?.fontOutputCopyTo ? path.resolve(process.cwd(), realConfig.fontOutputCopyTo) : undefined;

  fs.ensureDirSync(dist);
  fs.ensureDirSync(iconFolder);
  if (copyToFolder) {
    fs.ensureDirSync(copyToFolder);
  }

  const fontName = realConfig.fontName;

  const options = {
    fontName,
    svgs: path.join(svgsFolder, '*.svg'),
    fontsOutput: path.join(dist, ''),
    cssOutput: path.join(dist, 'font.css'),
    htmlOutput: path.join(dist, '_font-preview.html'),
    jsOutput: path.join(dist, 'fonts.json'),
  };

  new WebpackIconfontPluginNodejs(options).build(async () => {
    const json = require(path.join(options.jsOutput));
    if (copyToFolder) {
      fs.copyFileSync(path.join(dist, `${fontName}.ttf`), `${copyToFolder}/${fontName}.ttf`);
    }

    const content = `
  // Note: this file was generated by 'npm run generate' do not modify it manually
  // tslint:disable
  import * as React from 'react';
  import { Text, TextProps, TextStyle } from 'react-native';
  export const GlyphMap = ${JSON.stringify(json, null, 2)};
  
  export type GlyphMapType = keyof typeof GlyphMap;
  
  export interface IconProps extends TextProps {
    name: GlyphMapType;
    size?: number;
    color?: string
  }
  
  export default class Icon extends React.PureComponent<IconProps> {
    render() {
      const {
        name,
        style,
        children,
        size = 14,
        color = "black",
        ...props
      } = this.props;
      const styleOverrides: TextStyle = {
        fontFamily: "${fontName}",
        fontWeight: "normal",
        fontStyle: "normal",
        fontSize: size,
        color
      };
      let glyph = name ? GlyphMap[name] || "?" : "";
      if (typeof glyph === "number") {
        glyph = String.fromCharCode(glyph);
      }
      return (
        <Text {...props} style={[styleOverrides, style]}>
          {glyph}
          {children}
        </Text>
      );
    }
  }
  
      `;

      const formattedContent = await prettier.format(content, { parser: 'typescript' })

    fs.writeFileSync(`${iconFolder}/index.tsx`, formattedContent);
  });
};

module.exports = { generate };
