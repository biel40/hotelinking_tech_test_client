
const routes = [
    { 
      path: '/', component: () => import('pages/Login.vue') 
    }
  ,
  {
    path: '',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/app/index', component: () => import('pages/Index.vue') },
      { path: '/app/productCodeList', component: () => import('pages/ProductCodesList.vue') }
    ]
  }
]

if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
