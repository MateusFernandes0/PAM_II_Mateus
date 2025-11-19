// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Suporte ao WASM
config.resolver.assetExts.push("wasm");
config.resolver.sourceExts.push("wasm");

// Headers para WebAssembly + SharedArrayBuffer
config.server = {
  enhanceMiddleware: (middleware) => {
    return (req, res, next) => {
      res.setHeader("Cross-Origin-Embedder-Policy", "credentialless");
      res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
      middleware(req, res, next);
    };
  },
};

module.exports = config;
