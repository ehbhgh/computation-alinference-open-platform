<template>
  <el-dialog
    :visible.sync="visible"
    :title="title"
    :width="width"
    :close-on-click-modal="closeOnClickModal"
    @close="handleClose"
    v-bind="$attrs"
    v-dialogDrag
  >
    <!-- 可以在这里添加自定义的内容 -->
  <div class="content" :style="dialogStyle">
      <slot></slot>
  </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleConfirm" type="primary">{{
        confirmButtonText
      }}</el-button>
      <!-- 添加自定义的底部按钮 -->
      <el-button @click="handleCancel" type="default">{{
        cancelButtonText
      }}</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: "Dialog Title",
    },
    width: {
      type: String,
      default: "50%",
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    cancelButtonText: {
      type: String,
      default: "取消",
    },
    confirmButtonText: {
      type: String,
      default: "确定",
    },
    dialogStyle:{
      type:Object,
      default:()=>{}
    }
  },
  methods: {
    handleClose() {
      // 在 Dialog 关闭时的逻辑
      this.$emit("update:visible", false); // 通过 emit 更新 visible 属性
      this.$emit("close"); // 触发 close 事件
    },
    handleCancel() {
      // 在点击取消按钮时的逻辑
      this.$emit("update:visible", false); // 通过 emit 更新 visible 属性
      this.$emit("cancel"); // 触发 cancel 事件
    },
    handleConfirm() {
      // 在点击确认按钮时的逻辑
      this.$emit("confirm"); // 触发 confirm 事件
    },
  },
};
</script>

<style scoped lang="scss">
/deep/.dialog-footer {
  text-align: right;
}
.el-dialog,
/deep/.el-popper {
  box-shadow: 0 0px 5px #333;
}
.el-dialog {
  background-color: #fff;
  border-color: #dcdfe6;
  color: #333;
}

//弹窗公共样式dialog
/deep/.el-dialog__header {
  background: #006f6b;
  text-align: left;
  height: 40px;
  padding: 0 20px !important;

  .el-dialog__title {
    line-height: 40px;
    font-size: 14px;
  }

  .el-dialog__headerbtn {
    top: 12px;
  }
}

/deep/.el-dialog__title {
  color: white;
}

/deep/.el-dialog__close.el-icon.el-icon-close {
  font-size: 20px;
  color: white;
}
.content{
  width: 100%;

  overflow-y:scroll;
   // 滚动条
  
}
</style>
