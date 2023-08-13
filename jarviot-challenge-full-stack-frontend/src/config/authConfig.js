module.exports = {
  google: {
    clientId: "512696744909-ttsvsr03au9ls3vtpmbg4bjsa83ou25e.apps.googleusercontent.com",
    clientSecret: "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",
    redirectUri: "http://localhost:3000/auth/google/callback",
  },
  resolve: {
    fallback: {
      assert: require.resolve("assert/"),
      fs: false,
      dns: require.resolve("dns/"),
      net: require.resolve("net/"),
      crypto: require.resolve("crypto-browserify"),
      util: require.resolve("util/"),
      path: require.resolve("path-browserify"),
      buffer: require.resolve("buffer/"),
      stream: require.resolve("stream-browserify"),
    },
  },
};
