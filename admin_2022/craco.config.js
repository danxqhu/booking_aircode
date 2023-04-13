module.exports = {
  // ...
  devServer: {
    historyApiFallback: true,
    output: {
      publicPath: '/',
    },
    // historyApiFallback: {
    //   rewrites: [
    //     { from: /^\/$/, to: '/index.html' },
    //     { from: /^\/subpage/, to: '/index.html' },
    //     { from: /./, to: '/views/404.html' },
    //   ],
    // },
  },
};
