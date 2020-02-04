const pkg = require("./package.json");
import path from "path";
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript";
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";

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

const OUTPUT_DATA = [
  {
    file: pkg.main,
    format: "umd"
  },
  {
    file: pkg.module,
    format: "es"
  }
];

let plugins = [
  typescript(),
  resolve(),
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

export default OUTPUT_DATA.map(({ file, format }) => ({
  input: "./src/index.tsx",
  output: {
    file,
    format,
    name: "TypeIt",
    globals
  },
  plugins,
  external: [...Object.keys(pkg.peerDependencies || {})]
}));
