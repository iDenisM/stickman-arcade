import {terser} from 'rollup-plugin-terser';
import { uglify } from "rollup-plugin-uglify";

export default {
  input: 'src/index.js',
  output: [
    {
        file: 'dist/main.js',
        format: 'cjs',
        plugins: [
          uglify()
        ]
    },
    {
      file: 'dist/main.min.js',
      format: 'iife',
      name: 'version',
      plugins: [
        terser()
      ]
    }
  ]
};