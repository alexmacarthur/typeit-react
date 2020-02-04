const pkg = require("./package.json");
import path from "path";
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript";
import { terser } from "rollup-plugin-terser";

const isModern = process.env.BROWSER_TYPE === "modern";
const isProduction = process.env.NODE_ENV === "production";

// Reference:
// https://github.com/jaebradley/example-rollup-react-component-npm-package/blob/master/rollup.config.js

const banner = `/**
  *
  * TypeIt - React
  * Author: ${pkg.author}
  * Version: v${pkg.version}
  * License: ${pkg.license}
  * URL: ${pkg.homepage}
  *
  */`;

const globals = {
  react: "React",
  "react-dom": "ReactDOM"
};

let plugins = [
  typescript(),
  babel({
    configFile: path.resolve(__dirname, "babel.config.js"),
    exclude: "node_modules/*"
  })
];

if (isProduction) {
  plugins = [
    ...plugins,
    terser({
      include: [/^.+\.min\.js$/, "*esm*"],
      output: {
        preamble: banner
      }
    })
  ];
}

export default {
  input: "./src/index.tsx",
  output: {
    file: `./dist/typeit-react.${isModern ? "modern." : ""}min.js`,
    format: "umd",
    name: "TypeIt",
    globals
  },
  plugins
};
