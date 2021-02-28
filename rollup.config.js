import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import del from "rollup-plugin-delete";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";
// import pkg from "./package.json";
const pkg = require("./package.json");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  onwarn: function (warning) {
    // Skip certain warnings

    // should intercept ... but doesn't in some rollup versions
    if (warning.code === "THIS_IS_UNDEFINED") {
      return;
    }

    // console.warn everything else
    // console.warn(warning.message);
  },
  plugins: [
    external(),
    resolve(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "runtime",
    }),
    del({ targets: ["dist/*"] }),
    commonjs(),
    postcss({
      modules: false,
      extract: false,
    }),
    json(),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
