module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
  configureWebpack: config => {
    config.module.rules.push({
      // 处理markdown文件
      test: /\.md$/,
      use: [
        {
          loader: "vue-loader"
        },
        {
          loader: require.resolve("./src/common/config/markdownLoader.js")
        }
      ],
    },
    );
  }
};