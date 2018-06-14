import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import VuePlugin from 'rollup-plugin-vue'
import replace from 'rollup-plugin-replace'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

export default [{
  input: 'src/index.js',
  output: {
    name: 'vc-mask',
    file: 'dist/vc-mask.js',
    format: 'umd',
    exports: 'named'
  },
  plugins: [
    resolve(),
    commonjs(),
    VuePlugin(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    babel()
  ]
}, {
  input: 'src/index.js',
  output: {
    name: 'vc-mask',
    file: 'dist/vc-mask.min.js',
    format: 'umd',
    exports: 'named'
  },
  plugins: [
    resolve(),
    commonjs(),
    VuePlugin(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    babel(),
    uglify()
  ]
}, {
  input: 'src/index.js',
  output: {
    name: 'vc-mask',
    file: 'dist/vc-mask.es.js',
    format: 'es'
  },
  plugins: [
    resolve(),
    commonjs(),
    VuePlugin(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    babel()
  ]
}]
