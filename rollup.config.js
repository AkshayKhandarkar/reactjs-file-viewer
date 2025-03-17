import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: "dist/reactjs-file-viewer.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/reactjs-file-viewer.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    json(),
    typescript({ tsconfig: "./tsconfig.json" }),
    babel({
      babelHelpers: "bundled",
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      include: ["src/**/*"],
    }),
  ],
};
