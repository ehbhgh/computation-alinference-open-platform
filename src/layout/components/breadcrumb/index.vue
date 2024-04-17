<template>
  <!-- 顶部左侧图标 -->
  <div class="tabbar_left">
    <i
      :class="[fold ? 'el-icon-s-fold' : 'el-icon-s-unfold', 'fold']"
      @click="changeFold"
    ></i>
    <div class="breadCrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          :to="item.path"
          v-for="(item, index) in $route.matched"
          :key="index"
          v-show="item.meta.title"
          class="breadcrumb_area"
        >
          <span :class="item.meta.icon"></span>
          <span> {{ item.meta.title }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "breadcrumb",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["fold"]),
  },
  methods: {
    ...mapMutations(["modifyFoldStatus"]),
    changeFold() {
      this.modifyFoldStatus(!this.fold);
    },
  },
};
</script>

<style scoped lang="scss">
.fold {
  cursor: pointer;
}
.tabbar_left {
  display: flex;
  align-items: center;
  height: 100%;
  .breadCrumb {
    margin-left: 10px;
  }
}

/* 不被选中时的颜色 */
.el-breadcrumb ::v-deep .el-breadcrumb__inner {
        color: #15B4A5 !important;
        font-weight:400 !important;
}
/* 被选中时的颜色 */
.el-breadcrumb__item:last-child ::v-deep .el-breadcrumb__inner {
        color: #006f6b !important;
        font-weight:800 !important;
}
::v-deep .el-breadcrumb__separator{
color: #15B4A5 !important;
}
</style>
