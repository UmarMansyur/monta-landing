import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { type IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Beranda",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/admin",
    name: "Dashboard",
    component: () => import("../views/Admin.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  document.title = to.name as string + " - MONTAK | Universitas Madura";
  next();
});



router.afterEach((_, _from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods?.autoInit();
    }, 100);
  }
});

export default router;
