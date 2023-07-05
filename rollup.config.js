const {uglify} = require('rollup-plugin-uglify')

module.exports = {
  input: 'index.js',
  plugins: [
    uglify()
  ],
  output: [
    {format: 'umd', file: 'dist/build.js', name: 'toast'}
  ]
}
