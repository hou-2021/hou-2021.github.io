import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from '../views/home.vue'

const routes = [{
    path: '',
    require: Home
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 全局守卫
router.beforeEach(function (to, from, next) {
  document.title = to.matched[0].meta.title;
  next();
})

export default router;