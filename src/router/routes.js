const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ],
  },
  {
    path: '/add/qrcode',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AddFromQRCodePage.vue') },
    ],
  },
  {
    path: '/add/code',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AddFromCodePage.vue') },
    ],
  },
  {
    path: '/export',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ExportPage.vue') },
    ],
  },
  {
    path: '/import',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ImportPage.vue') },
    ],
  },
  {
    path: '/settings',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SettingsPage.vue') },
    ],
  },
  {
    path: '/login',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') },
    ],
  },
  {
    path: '/signin',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SigninPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Error404Page.vue') },
    ],
  },
];

export default routes;
