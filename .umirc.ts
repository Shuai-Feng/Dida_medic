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
  //分离React
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
  },
  scripts: [
    'https://gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.production.min.js',
    'https://gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.production.min.js',
  ],
  headScripts: [
    {
      src:
        'https://api.map.baidu.com/api?v=2.0&ak=n7GDsu4PuHcnt3Er3weXUeommL5ItQR1&s=1',
      type: 'text/javascript',
    },
  ],
  dynamicImport: {
    loading: '@/components/GlobalLoading',
  },
});
