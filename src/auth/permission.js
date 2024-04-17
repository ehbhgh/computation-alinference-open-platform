import router from "@/router";

import storage from "@/utils/storage";
router.beforeEach(async (to, from, next) => {
  if (storage.hasItem("token")) {
    next();
  } else {
    if (to.path !== "/login") { // 检查当前路由是否已经是登录页面
      next({ path: "/login" });
    }
    else {
      next(); // 如果已经在登录页面，则继续路由跳转
    }
  }
});

router.afterEach((to, from) => {});
