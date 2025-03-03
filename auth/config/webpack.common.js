module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          }
        }
      }
    ]
  }
}

// @babel/preset-react
//    Babel is going to process all the different jsx tags, so we add into our application

// @babel/preset-env
//    Babel is going to transform our code in a variety of different ways.
//    So take all the kind of ES 2015, 16, 17 and so on syntax, and convert it down to ES five

// @babel/plugin-transform-runtime
//    Plug in transform runtime, is going to add in a little bit of additional code
//    just to enable some different features for our project, inside the browser.
//    Such as, async await syntax and some other related things.
