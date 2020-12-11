# **p5JS & ToneJS TypeScript Webpack Example** with Babel, ESlint and Prettier

[![License](https://img.shields.io/github/license/derkalaender/p5js-typescript-webpack.svg?color=blue&style=flat-square)](https://github.com/derkalaender/p5js-typescript-webpack/blob/master/LICENSE)

Example project and starter tenplate in one. 
For demonstration purposes I've included a minimal use case. If you want to start fresh delete: `/drone, attractor.ts & mover.ts` and change the
content of `sketch.ts` to:

```ts
import * as p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
  };

  p.draw = () => {
  };
};

new p5(sketch);
```

## Installation

2. Download/Clone this repository
3. Execute the following shell command in the repo directory:

```shell
npm install
```

## Usage

```shell
  npm run build # build production-ready, minified bundle
  npm run dev   # launch dev-enviroment: opens browser with hot reload
```
