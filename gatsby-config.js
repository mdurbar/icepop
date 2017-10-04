const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Ice Pop Co.',
  },
  pathPrefix: '/icepop',
  plugins: [
    {
      resolve: 'custom-sass-loader',
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 2 versions'],
          })
        ]
      }
    }
  ],
}

