<template>
  <el-dropdown class="avatar-container">
    <div class="avatar-wrapper">
      <i class="icon iconfont iconyonghu user" />
      <span class="user-name">{{usernames}}</span>
      <i class="el-icon-caret-bottom" />
    </div>
    <el-dropdown-menu slot="dropdown" class="user-dropdown">
      <el-dropdown-item divided>
        <span style="display: block" @click="updatePassword">修改密码</span>
      </el-dropdown-item>
      <el-dropdown-item divided>
        <span style="display: block" @click="logout">注销登录</span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "dropMenu",
  data() {
    return {
    usernames: "ws",
    };
  },
  methods: {
    async logout() {
        this.$router.push("/login");
      
    },
    updatePassword() {},
  },
};
</script>

<style lang="scss" scoped>
.user-name {
  color: #fff;
}
.icon {
  color: #fff !important;
}
.el-icon-caret-bottom {
  color: #fff !important;
}
.avatar-wrapper {
  cursor: pointer;
}
</style>
