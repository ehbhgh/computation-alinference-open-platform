<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "@/assets/iconfont/iconfont.css";
import { dicData } from "@/db/dictData";
import storage from "@/utils/storage";
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: false,
    };
  },
  watch: {
    $route(to, form) {
      if (to.path == "/login") {
        this.queryDictName();
      }
    },
  },
  computed: {},
  created() {
    this.queryDictName();
  },
  methods: {
    queryDictName() {
      storage.setItem("AJReportDict", dicData.data);
    },
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>
