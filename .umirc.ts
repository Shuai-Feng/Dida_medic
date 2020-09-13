import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: './',
  alias: {
    '@pub': '@/../public/',
  },
});
