module.exports = {
  // devServer: {
  //   host: '127.0.0.1',
  //   port: 8800,
  // },
  devServer: {
    // overlay: {
    //   // 让浏览器 overlay 同时显示警告和错误
    //   warnings: true,
    //   errors: true,
    // },
    // host: '0.0.0.0',
    // port: 8080, // 端口号
    // https: false, // https:{type:Boolean}
    // open: true, // 配置自动启动浏览器  open: 'Google Chrome'-默认启动谷歌
    // historyApiFallback: true,

    // 配置单个代理
    proxy: 'http://www.johnnywork.com/wanchaotest',

    // 配置多个代理
    // proxy: {
    //   allowedHosts: ['https://yth2veim6m.hk.aircode.run'],
    //   '/api': {
    //     // target: "https://127.0.0.0:8080", // 目标主机
    //     target: 'https://yth2veim6m.hk.aircode.run',
    //     // ws: true, //代理的WebSockets
    //     // changeOrigin: true, // 允许websockets跨域
    //     pathRewrite: {
    //       '^/api': '',
    //     },
    //   },
    // },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  devtool: 'cheap-module-source-map',
};
