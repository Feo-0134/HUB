import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: {antd: true},
  routes: [
    { path: '/products', component: '@/pages/index' },
    { path: '/', component: '@/pages/products' },
  ],
});
