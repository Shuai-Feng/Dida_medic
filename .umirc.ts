import { defineConfig } from 'umi';
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
