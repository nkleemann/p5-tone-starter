const cdn_modules = {
  modules: [
    {
      name: "p5",
      cdn: "p5.js",
      path: "p5.min.js",
      version: "0.8.0",
    },
    {
      name: "p5",
      cdn: "p5.js",
      path: "addons/p5.dom.min.js",
      version: "0.8.0",
    },
    {
      name: "tone/Tone",
      path: "Tone.js",
      version: "14.7.71",
    },
  ],
  publicPath: "/node_modules",
  prodUrl: "https://cdnjs.cloudflare.com/ajax/libs/:name/:version/:path",
};

module.exports.cdn_modules = cdn_modules;
