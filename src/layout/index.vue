<template>
  <div class="layout_container">
    <el-container>
      <el-header class="header">
        <img src="../../static/country.png" alt="" />
        <div class="title">计算推演开放平台</div>
        <div class="right">
          <div class="right_area" @click="refreshDom">
            <span class="el-icon-refresh"></span>
          </div>
          <div class="right_area" @click="fullscreen">
            <span class="el-icon-full-screen"></span>
          </div>

          <drop-menu />
        </div>
      </el-header>
      <el-container class="container">
        <el-aside :width="fold ? '49px' : '200px'" class="aside">
          <el-scrollbar class="scroll_bar">
            <el-menu
              class="layout_el-menu"
              background-color="#282828"
              text-color="hsla(0, 0%, 100%, 1)"
              active-text-color="#006f6b"
              unique-opened
              :collapse="fold"
              :default-active="$route.path"
            >
              <!-- 递归菜单组件 -->
              <recursiveMenu :menuList="menuList" />
            </el-menu>
          </el-scrollbar>
        </el-aside>
        <el-main class="main" v-if="$route.path != '/staging/view'">
          <div class="top">
            <breadcrumb />
          </div>
          <div class="box">
            <Main />
          </div>
        </el-main>
        <div class="boxmap" v-else>
          <div class="top">
            <breadcrumb />
          </div>
          <Main />
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import RecursiveMenu from "./components/nav/RecursiveMenu.vue";
import Main from "./components/main/index.vue";
import dropMenu from "./components/dropMenu/index.vue";
import breadcrumb from "./components/breadcrumb/index.vue";
export default {
  name: "Layout",
  components: {
    RecursiveMenu,
    Main,
    dropMenu,
    breadcrumb,
  },
  provide() {
    return {};
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["menuList", "fold", "refreshed"]),
  },
  mounted() {

  },

  methods: {
    ...mapMutations(["modifyRefreshStatus"]),
    refreshDom() {
      this.modifyRefreshStatus(!this.refreshed);
    },

    fullscreen() {
      let full = document.fullscreenElement;
      if (!full) {
        document.documentElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.layout_container {
  height: 100%;
  width: 100%;
  .header {
    background: #282828;
    color: #fff;
    height: 50px !important;
    position: relative;
    img {
      position: absolute;
      top: 50%;
      left: 20px;
      width: 100px;
      height: 40px;
      transform: translateY(-50%);
    }
    & > .title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    & > .right {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 40px;
      display: flex;
      align-items: center;
      .right_area {
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #fff;
        border-radius: 50%;
        margin-right: 20px;
        cursor: pointer;
      }
      & > .right_area:nth-child(2) {
        margin-right: 60px;
      }
    }
  }
  .container {
    box-sizing: border-box;
    display: flex;
    .boxmap {
      height: calc(100vh - 50px);
      box-sizing: border-box;
      position: relative;
      flex: 1;
      .top {
        position: absolute;
        border-radius: 10px;
        box-sizing: border-box;
        width: calc(100% - 40px);
        left: 20px;
        top: 10px;
        z-index: 55;
        height: 30px;
        background: #fff;
        box-shadow: 0px 0px 1px 1px #dddddd;
        line-height: 30px;
        padding-left: 20px;
      }
    }
    .aside {
      background: #282828;
      .scroll_bar {
        height: calc(100vh - 50px);
      }
      /deep/.el-scrollbar__wrap {
        overflow-y: scroll !important;
        overflow-x: inherit !important;
      }
      // 菜单组件样式
      /deep/.el-menu {
        border-right: none !important;
      }
    }
    .main {
      background: #f5f3f7;
      padding: 0px 20px !important;
            box-sizing: border-box;
      .top {
        margin: 10px auto;
        background: #fff;
        height: 30px;
        border-radius: 10px;
        box-sizing: border-box;
        box-shadow: 0px 0px 1px 1px #dddddd;
        line-height: 30px;
        padding-left: 20px;
      }
      .box {
        margin: 0px auto;
        background: #fff;
        border-radius: 10px;
        height: 86vh;
        padding: 20px;
        box-sizing: border-box;
        box-shadow: 0px 0px 1px 1px #dddddd;
      }
    }
  }
}
::v-deep .el-menu-item.is-active {
  border-right: 3px solid #15b4a5 !important;
}
::v-deep .el-menu-item:hover {
  background: #15b4a5 !important;
}

.el-menu-item.is-active {
  background-color: #15b4a5 !important;
}
</style>
