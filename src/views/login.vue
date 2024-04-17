<!--
 * @Descripttion: 登录
 * @version:
 * @Author: qianlishi
 * @Date: 2021-12-11 14:48:27
 * @LastEditors: Wang Su
 * @LastEditTime: 2024-01-17 18:18:12
-->
<template>
  <div class="login_container">
    <!-- 顶部logo -->
    <div class="login_title">
      <div class="left">
        <div class="box">
          <img src="../../static/logo-dp.png" alt="" />
        </div>
        <div class="name">计算推演开放平台</div>
      </div>
      <!-- <img src="@/assets/images/home-logo.png" alt="logo" /> -->
    </div>
    <div class="login_contant">
      <img src="@/assets/images/login.png" alt="image" class="login_img" />
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login_form"
        autocomplete="on"
        label-position="left"
        @keyup.enter.native="handleLogin"
      >
        <div class="title_container">
          <h3 class="title">
            HELLO!
            <br />
            <p class="title_name">计算推演开放平台</p>
          </h3>
        </div>
        <div class="form_fields">
          <!-- 黄色条条 -->
          <i :style="{ top: activeTop + '%' }" />
          <!-- 中间条条 -->
          <b />
          <div>
            <p>用户名</p>
            <el-form-item prop="loginName">
              <el-input
                ref="loginName"
                v-model="loginForm.loginName"
                placeholder="用户名"
                name="loginName"
                type="text"
                tabindex="1"
                autocomplete="on"
                @focus="setTop('0')"
              />
            </el-form-item>
          </div>
          <div>
            <p>密码</p>
            <input
              name="password"
              type="password"
              autocomplete="off"
              class="take"
            />
            <el-tooltip
              v-model="capsTooltip"
              content="Caps lock is On"
              placement="right"
              manual
            >
              <el-form-item prop="password">
                <el-input
                  :key="passwordType"
                  ref="password"
                  v-model="loginForm.password"
                  :type="passwordType"
                  placeholder="用户密码"
                  name="password"
                  tabindex="2"
                  autocomplete="on"
                  @blur="capsTooltip = false"
                  @focus="setTop('50')"
                />
              </el-form-item>
            </el-tooltip>
          </div>
        </div>
        <div class="control">
          <div class="remember">
            <input v-model="rememberPsw" type="checkbox" />
            <p>记住密码</p>
          </div>
        </div>
        <el-button
          :loading="loading"
          type="primary"
          class="login_btn"
          @click.native.prevent="handleLogin"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script>
import { transPsw } from "@/utils/encrypted";
import storage from "@/utils/storage";
export default {
  name: "Login",
  data() {
    return {
      activeTop: "-50%",
      rememberPsw: false,
      loginForm: {
        loginName: "",
        password: "",
        verifyCode: "",
      },
      loginRules: {
        loginName: [{ required: true, message: "用户名必填", trigger: "blur" }],
        password: [
          { required: true, message: "用户密码必填", trigger: "blur" },
        ],
      },
      passwordType: "password",
      capsTooltip: false,
      loading: false,
      redirect: undefined,
      otherQuery: {},
      needCaptcha: false,
      centerDialogVisible: false,
    };
  },
  watch: {},
  mounted() {
    this.testGet();
    this.testPost();
  },
  methods: {
    // 登录操作
    async testGet() {
      let res = await this.$api.LoginApi.loginOut();
      console.log(res);
    },
    async testPost() {
      let data = {
        devicePlatform: "输电",
        devicePlatformCategory: "输电线路",
        devicePlatformCategoryNum: 2959,
      };
      let res = await this.$api.LoginApi.login(data);
      console.log(res);
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;

          this.loginApi();
        } else {
          return false;
        }
      });
    },
    // 滑动条块的top控制
    setTop(val) {
      this.activeTop = val;
    },
    async loginApi() {
      const obj = {
        loginName: this.loginForm.loginName,
        verifyCode: "",
      };
      storage.setItem("token", "fffffws");
      this.$router.push({
        path: "/index",
      });
    },
  },
};
</script>

<style lang="scss">
.login_container .el-input input {
  color: #000;
  background: #fff;
}

.login_container {
  .el-input {
    display: inline-block;
    width: 100%;
    input {
      -webkit-appearance: none;
      caret-color: rgba($color: #000000, $alpha: 0.3);
      border: 1px solid #fff;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #eee inset !important;
        -webkit-text-fill-color: #666 !important;
      }
    }
  }

  .el-form-item {
    border-radius: 5px;
    color: #454545;
  }
}
.verifybox {
  position: absolute;
  left: auto;
  right: 30%;
  transform: translate(50%, -50%);
}
.take {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.login_container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  .login_title {
    width: 100%;
    height: 60px;
    padding: 10px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      flex-direction: row;
      .box {
        width: 120px;
        height: 50px;
        margin-top: 6px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 5px;
        margin-left: 10px;
        border-left: 1px solid #ccc;
        padding-top: 14px;
        padding-left: 10px;
      }
      .box1 {
        width: 100px;
        margin-left: 40px;
        cursor: pointer;
        img {
          width: 100%;
          margin-top: 10px;
          margin-left: 10px;
        }
      }
    }
    .right {
      display: flex;
      flex-direction: row;
      .item {
        margin-right: 60px;
        cursor: pointer;
      }
    }
  }
  .login_contant {
    position: relative;
    width: 100%;
    height: calc(100% - 60px);
    .login_img {
      display: block;
      width: 100%;
      height: 60%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .login_form {
      position: absolute;
      top: 50%;
      right: 30%;
      transform: translate(50%, -50%);
      min-width: 400px;
      width: 22%;
      height: 390px;
      background-color: #ffffff;
      border-radius: 11px;
      padding: 30px;
      overflow: hidden;
      .title_container {
        position: relative;
        .title {
          font-size: 24px;
          color: #1a1a1a;
          .title_name {
            margin: 0;
            font-size: 18px;
          }
        }
        .set_language {
          color: #fff;
          position: absolute;
          top: 3px;
          font-size: 18px;
          right: 0px;
          cursor: pointer;
        }
      }
      .form_fields {
        position: relative;
        width: 100%;
        overflow: hidden;
        padding: 5px 16px;
        background: #ffffff;
        border: 1px solid #e0e0e0;
        box-shadow: 0 0 14px 4px rgba(230, 229, 229, 0.5);
        border-radius: 4px 10px 10px 4px;
        i {
          position: absolute;
          top: -50%;
          left: 0;
          width: 4px;
          height: 50%;
          transition: top 0.2s;
          background: #016469;
          border-radius: 14px;
        }
        b {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 1px;
          background: #e0e0e0;
          border-radius: 2px;
          margin-top: -0.5px;
        }
        p {
          margin: 0;
          padding: 0;
          line-height: 32px;
          height: 32px;
          font-size: 12px;
          color: #666;
        }
        .show_pwd {
          position: absolute;
          right: 10px;
          top: 0;
          font-size: 16px;
          color: #889aa4;
          cursor: pointer;
          user-select: none;
        }
      }
      .control {
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        color: #919191;
        .remember {
          width: 36%;
          display: flex;
          align-items: center;
          p {
            padding-left: 8px;
          }
          & > input {
            position: relative;
            width: 14px;
            height: 14px;
          }
          & > input:checked::before {
            content: "\2713";
            background-color: #016469;
            position: absolute;
            top: 0;
            left: 0px;
            padding-left: 1.5px;
            width: 100%;
            height: 100%;
            border: 1px solid #016469;
            border-radius: 2px;
            font-size: 12px;
            color: white;
            font-weight: bold;
          }
        }
      }
      .login_btn {
        width: 320px;
        height: 40px;
        background: #078782;
        border: none;
        border-radius: 10px;
        margin-left: 20px;
        font-size: 16px;
        color: #ffffff;
        text-align: center;
      }
    }
  }
}
</style>
