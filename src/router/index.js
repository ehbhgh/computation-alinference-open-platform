import Vue from "vue";
import Router from "vue-router";

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router);

/* Layout */
import Layout from "../layout/index.vue";

export const constantRouterMap = [
  {
    path: "/login",
    component: () => import("@/views/login"),
    hidden: true,
  },
  {
    path: "/",
    component: Layout,
    name: "index",
    redirect: "/index",
    children: [
      {
        path: "/index",
        component: () => import("@/views/home/index"),
        meta: {
          title: "首页",
          icon: "el-icon-s-home",
          keepAlive: true,
          requireAuth: true,
        },
      },
    ],
  },
  {
    path: "/staging",
    name: "staging",
    component: Layout,
    redirect: "/staging/view",
    meta: {
      title: "工作台管理",
      icon: "el-icon-s-platform",
      requireAuth: true,
      permission: "authorityManage|roleManage|userManage",
    },
    children: [
      {
        path: "/staging/view",
        name: "staging",
        component: () => import("@/views/staging/mapContainer/index.vue"),
        meta: {
          title: "工作台",
          icon: "el-icon-data-board",
          keepAlive: true,
          requireAuth: true,
          permission: "authorityManage",
        },
      },
      {
        path: "/staging/noticeManager",
        name: "noticeManager",
        component: () => import("@/views/notify/index.vue"),
        meta: {
          title: "消息通知管理",
          icon: "el-icon-bell",
          keepAlive: true,
          requireAuth: true,
          permission: "roleManage",
        },
      },
      {
        path: "/staging/helpCenter",
        name: "helpCenter",
        component: () => import("@/views/notify/index.vue"),
        meta: {
          title: "帮助中心",
          icon: "el-icon-view",
          keepAlive: true,
          requireAuth: true,
          permission: "userManage",
        },
      },
    ],
  },

  {
    path: "/access",
    name: "access",
    component: Layout,
    redirect: "/access/authority",
    meta: {
      title: "用户权限",
      icon: "el-icon-s-custom",
      requireAuth: true,
      permission: "authorityManage|roleManage|userManage",
    },
    children: [
      {
        path: "/access/authority",
        name: "authority",
        component: () => import("@/views/notify/index.vue"),
        meta: {
          title: "权限管理",
          icon: "el-icon-c-scale-to-original",
          keepAlive: true,
          requireAuth: true,
          permission: "authorityManage",
        },
      },
      {
        path: "/access/role",
        name: "role",
        component: () => import("@/views/notify/index.vue"),
        meta: {
          title: "角色管理",
          icon: "el-icon-user",
          keepAlive: true,
          requireAuth: true,
          permission: "roleManage",
        },
      },
      {
        path: "/access/user",
        name: "user",
        component: () => import("@/views/notify/index.vue"),
        meta: {
          title: "用户管理",
          icon: "el-icon-price-tag",
          keepAlive: true,
          requireAuth: true,
          permission: "userManage",
        },
      },
    ],
  },
  {
    path: "/report",
    name: "report",
    component: Layout,
    redirect: "/report/datasource",
    meta: {
      title: "可视化报表",
      icon: "el-icon-s-data",
      requireAuth: true,
      permission:
        "datasourceManage|resultsetManage|reportManage|bigScreenManage|excelManage",
    },
    children: [
      {
        path: "/report/datasource",
        name: "datasource",
        component: () => import("@/views/notify/index.vue"),
        meta: {
          title: "数据源",
          icon: "el-icon-tickets",
          keepAlive: true,
          requireAuth: true,
          permission: "datasourceManage",
        },
      },
      {
        path: "/report/resultset",
        name: "resultset",
        component: () => import("@/views/notify/index.vue"),
        meta: {
          title: "数据集",
          icon: "el-icon-document-copy",
          keepAlive: true,
          requireAuth: true,
          permission: "resultsetManage",
        },
      },
      {
        path: "/report/report",
        name: "reportIndex",
        component: () => import("@/views/notify/index.vue"),
        meta: {
          title: "报表管理",
          icon: "el-icon-pie-chart",
          keepAlive: true,
          requireAuth: true,
          permission: "reportManage",
        },
      },
      {
        path: "/report/bigscreen",
        name: "bigscreen",
        component: () => import("@/views/bigScreenReport/index"),
        meta: {
          title: "大屏报表",
          icon: "el-icon-data-analysis",
          keepAlive: true,
          requireAuth: true,
          permission: "bigScreenManage",
        },
      },

      {
        path: "/report/reportshare",
        name: "reportshare",
        component: () => import('@/views/reportShare/index'),
        meta: {
          title: "报表分享",
          icon: "el-icon-paperclip",
          keepAlive: true,
          requireAuth: true,
          permission: "reportShareManage",
        },
      },
    ],
  },
  {
    path: "/sim",
    name: "sim",
    component: Layout,
    redirect: "/sim/model",
    meta: {
      title: "仿真模拟推演",
      icon: "el-icon-s-grid",
      requireAuth: true,
      permission:
        "datasourceManage|resultsetManage|reportManage|bigScreenManage|excelManage",
    },
    children: [
      {
        path: "/sim/model",
        name: "model",
        component: () => import("@/views/notify/index.vue"),
        meta: {
          title: "模型库管理",
          icon: "el-icon-folder-opened",
          keepAlive: true,
          requireAuth: true,
          permission: "datasourceManage",
        },
      },
      {
        path: "/sim/modelComponent",
        name: "modelComponent",
        component: () => import("@/views/notify/index.vue"),
        meta: {
          title: "模型组件管理",
          icon: "el-icon-takeaway-box",
          keepAlive: true,
          requireAuth: true,
          permission: "resultsetManage",
        },
      },
      {
        path: "/sim/modelAttr",
        name: "modelAttr",
        component: () => import("@/views/notify/index.vue"),
        meta: {
          title: "模型属性管理",
          icon: "el-icon-notebook-1",
          keepAlive: true,
          requireAuth: true,
          permission: "reportManage",
        },
      },
      {
        path: "/sim/modelEdit",
        name: "modelEdit",
        component: () => import("@/views/model/modelEdit/index"),
        meta: {
          title: "模型编辑器",
          icon: "el-icon-edit-outline",
          keepAlive: true,
          requireAuth: true,
          permission: "bigScreenManage",
        },
      },
    ],
  },
  {
    path: "/monitor",
    name: "monitor",
    component: Layout,
    redirect: "/monitor/computational",
    meta: {
      title: "运行监控",
      icon: "el-icon-camera-solid",
      requireAuth: true,
      permission: "fileManage|dictManage|dictItemManage",
    },
    children: [
      {
        path: "/monitor/computational",
        name: "computational",
        component: () => import("@/views/notify/index.vue"),
        meta: {
          title: "计算推演任务监控",
          icon: "el-icon-notebook-2",
          keepAlive: true,
          requireAuth: true,
          permission: "fileManage",
        },
      },
      {
        path: "/monitor/modelAlgorithm",
        name: "modelAlgorithm",
        component: () => import("@/views/notify/index.vue"),
        meta: {
          title: "模型算法监控",
          icon: "el-icon-files",
          keepAlive: true,
          requireAuth: true,
          permission: "dictManage",
        },
      },
      {
        path: "/monitor/messageQueue",
        name: "messageQueue",
        component: () => import("@/views/notify/index.vue"),
        meta: {
          title: "消息队列监控",
          icon: "el-icon-crop",
          keepAlive: true,
          requireAuth: true,
          permission: "dictItemManage",
        },
      },
      {
        path: "/monitor/dataBase",
        name: "dataBase",
        component: () => import("@/views/notify/index.vue"),
        meta: {
          title: "数据库监控",
          icon: "el-icon-coin",
          keepAlive: true,
          requireAuth: true,
          permission: "dictItemManage",
        },
      },
      {
        path: "/monitor/interfaceCall",
        name: "interfaceCall",
        component: () => import("@/views/notify/index.vue"),
        meta: {
          title: "接口调用监控",
          icon: "el-icon-link",
          keepAlive: true,
          requireAuth: true,
          permission: "dictItemManage",
        },
      },
      {
        path: "/monitor/microserviceComponents",
        name: "microserviceComponents",
        component: () => import("@/views/notify/index.vue"),
        meta: {
          title: "微服务组件监控",
          icon: "el-icon-paperclip",
          keepAlive: true,
          requireAuth: true,
          permission: "dictItemManage",
        },
      },
    ],
  },
  {
    path: "/system",
    name: "system",
    component: Layout,
    redirect: "/system/file",
    meta: {
      title: "系统设置",
      icon: "el-icon-s-tools",
      requireAuth: true,
      permission: "fileManage|dictManage|dictItemManage",
    },
    children: [
      {
        path: "/system/file",
        name: "file",
        component: () => import("@/views/notify/index.vue"),
        meta: {
          title: "服务目录",
          icon: "el-icon-document",
          keepAlive: true,
          requireAuth: true,
          permission: "fileManage",
        },
      },
      {
        path: "/system/dict",
        name: "dict",
        component: () => import("@/views/notify/index.vue"),
        meta: {
          title: "应用服务管理",
          icon: "el-icon-aim",
          keepAlive: true,
          requireAuth: true,
          permission: "dictManage",
        },
      },
      {
        path: "/system/dictItem",
        name: "dictItem",
        component: () => import("@/views/notify/index.vue"),
        meta: {
          title: "应用进度管理",
          icon: "el-icon-set-up",
          keepAlive: true,
          requireAuth: true,
          permission: "dictItemManage",
        },
      },
    ],
  },
  {
    path: "/bigscreen/viewer",
    name: "viewer",
    component: () => import("@/views/bigscreenDesigner/viewer"),
    hidden: true,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/bigscreen/designer",
    name: "designer",
    component: () => import("@/views/bigscreenDesigner/designer"),
    hidden: true,
    meta: {
      requireAuth: true,
    },
  },

  // 重写大屏
  {
    path: "/screenDesigner",
    component: () => import("@/views/screenDesigner/index"),
    name: "screenDesigner",
    hidden: true,
  },
  {
    path: "/screen/preview",
    name: "preview",
    component: () => import("@/views/screenDesigner/preview"),
    hidden: true,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },
  {
    //任意路由到404
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
    hidden: true,
  },
];

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
});
