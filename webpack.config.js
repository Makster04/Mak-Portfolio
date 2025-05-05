module.exports = {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader?modules',
            'sass-loader'
          ]
        }
      ]
    }
  };
  