import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import gsap from "gsap";

const routeSettings: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "HOME",
  },
  {
    name: "HOME",
    path: "/HOME",
    component: () => {
      return import("@/views/HomeArea.vue");
    },
  },
  {
    name: "TENT",
    path: "/TENT",
    component: () => {
      return import("@/views/TentArea.vue");
    },
  },
  {
    name: "FOOD",
    path: "/FOOD",
    component: () => {
      return import("@/views/FoodArea.vue");
    },
  },
  {
    name: "ACCESS",
    path: "/ACCESS",
    component: () => {
      return import("@/views/AccessArea.vue");
    },
  },
  {
    name: "FAQ",
    path: "/FAQ",
    component: () => {
      return import("@/views/FaqArea.vue");
    },
  },
  {
    name: "FAQ",
    path: "/FAQ",
    component: () => {
      return import("@/views/FaqArea.vue");
    },
  },
  {
    name: "NotFound",
    path: "/:pathMatch(.*)*",
    component: () => {
      return import("@/views/NotFound.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeSettings,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// 遷移アニメーション
router.beforeEach((to, from, next) => {
  if (from.fullPath != "/") {
    const tl = gsap.timeline();
    tl.to("#app", {
      duration: 0.5,
      opacity: 0,
      onComplete: () => {
        next();
      },
    }).to(
      "#app",
      {
        duration: 0.5,
        opacity: 1,
      },
      1
    );
  } else {
    next();
  }
});

export default router;
