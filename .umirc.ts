import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: { antd: true },
  routes: [
    { exact: true, path: '/', component: '@/pages/index' },
    { component: '@/pages/404' },
  ],
  fastRefresh: {},
  ssr: {},
  dynamicImport: {},
});
