module.exports = {
  resolve: {
    fallback: {
      util: require.resolve("util"),
      url: require.resolve("url/"),
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer/"),
      querystring: require.resolve("querystring-es3"),
      http: require.resolve("stream-http"),
      crypto: require.resolve("crypto-browserify"),
      zlib: require.resolve("browserify-zlib"),
    },
  },
};
