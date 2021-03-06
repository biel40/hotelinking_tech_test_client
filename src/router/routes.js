
const routes = [
    { 
      path: '/', component: () => import('pages/Login.vue') 
    }
  ,
  {
    path: '/register', component: () => import('pages/Signup.vue')
  },
  {
    path: '',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/app/index', component: () => import('pages/Index.vue') },
      { path: '/app/productCodeList', component: () => import('pages/ProductCodesList.vue') },
      { path: '/app/productCodeCreation', component: () => import('pages/ProductCodeCreation.vue') }
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
