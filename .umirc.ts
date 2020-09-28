import { defineConfig } from 'umi';
const path = require('path');
const resolve = (dir: any) => path.resolve(__dirname, dir);

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: './',
  alias: {
    '@pub': '@/../public/',
  },
  history: {
    type: 'hash',
  },
  chainWebpack(memo) {
    memo.resolve.alias
      .set('@common', resolve('src/common'))
      .set('ppblic', resolve('public'));
  },
  proxy: {
    '/getIcon': {
      target: 'https://shuaifeng.xyz/myphp/dream.php',
      changeOrigin: true,
      pathRewrite: { '^/getIcon': '' },
    },
  },
  headScripts: [
    {
      src:
        'http://api.map.baidu.com/api?v=2.0&ak=n7GDsu4PuHcnt3Er3weXUeommL5ItQR1',
      type: 'text/javascript',
    },
  ],
  dynamicImport: {
    loading: '@/components/GlobalLoading',
  },
});
