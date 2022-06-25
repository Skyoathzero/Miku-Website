const webpack = require('webpack');

module.exports = function override(config) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "buffer": require.resolve("buffer"),
        "os": require.resolve("os-browserify"),
        "url": require.resolve("url"),
        "fs": require.resolve("graceful-fs"),
        "zlib": require.resolve('browserify-zlib')
    })
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
        })
    ]),
    new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
        const mod = resource.request.replace(/^node:/, "");
        switch (mod) {
            case "buffer":
                resource.request = "buffer";
                break;
            case "stream":
                resource.request = "readable-stream";
                break;
            default:
                throw new Error(`Not found ${mod}`);
        }
    })
    return config;
}