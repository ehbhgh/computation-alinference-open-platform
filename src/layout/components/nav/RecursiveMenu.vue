<template>
  <div>
    <div v-for="menuItem in menuList" :key="menuItem.path">
      <!-- 没有子路由 -->
      <el-menu-item
        :index="menuItem.path"
        v-if="!menuItem.children && !menuItem.hidden"
        @click="goRouter(menuItem.path)"
      >
        <span :class="menuItem.meta && menuItem.meta.icon"></span>
        <span>{{ menuItem.meta && menuItem.meta.title }}</span>
      </el-menu-item>
      <!-- 路由存在 -->
      <template v-if="menuItem.children && !menuItem.hidden">
        <!-- 只有一个子路由 -->
        <recursive-menu
          :menuList="menuItem.children"
          v-if="menuItem.children.length === 1"
        />
        <!-- 有很多子路由 -->
        <el-submenu v-if="menuItem.children.length > 1" :index="menuItem.path">
          <template slot="title">
            <span :class="menuItem.meta && menuItem.meta.icon"></span>
            <span>{{ menuItem.meta && menuItem.meta.title }}</span>
          </template>
          <recursive-menu :menuList="menuItem.children"></recursive-menu>
        </el-submenu>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecursiveMenu",
  props: {
    menuList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    goRouter(path) {
      if (this.$route.path !== path) {
        this.$router.push({ path });
      }
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
/deep/.el-submenu__title i {
  color: #fff; /* 设置箭头颜色为红色 */
}
/deep/.el-icon-arrow-right {
  display: none;
}
::v-deep.el-menu-item-group {
  background: #b1afaf !important;
}
</style>
