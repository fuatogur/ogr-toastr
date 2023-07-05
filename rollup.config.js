import {uglify} from 'rollup-plugin-uglify'
import pkg from './package.json'

export default {
  input: 'index.js',
  plugins: [
    uglify()
  ],
  output: [
    {format: 'umd', file: pkg.main, name: 'toast'}
  ]
}
