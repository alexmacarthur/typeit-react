const pkg = require("./package.json");
import path from "path";
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript";
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";

const isProduction = process.env.NODE_ENV === "production";
const banner = `/** TypeIt by ${pkg.author} - ${pkg.homepage}*/`;

const globals = {
  react: "React",
  "react-dom": "ReactDOM",
};

const OUTPUT_DATA = [
  {
    file: pkg.main,
    format: "umd",
  },
  {
    file: pkg.module,
    format: "es",
  },
];

let plugins = [
  typescript(),
  resolve(),
  babel({
    configFile: path.resolve(__dirname, "babel.config.js"),
    exclude: "node_modules/*",
  }),
];

if (isProduction) {
  plugins = [
    ...plugins,
    terser({
      format: {
        preamble: banner,
        comments: false
      }
    }),
  ];
}

export default OUTPUT_DATA.map(({ file, format }) => ({
  input: "./src/index.tsx",
  output: {
    file,
    format,
    name: "TypeIt",
    globals,
  },
  plugins,
  external: [...Object.keys(pkg.peerDependencies || {})],
}));
