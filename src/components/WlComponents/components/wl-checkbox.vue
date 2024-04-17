<template>
  <el-checkbox-group v-model="inputValue">
    <el-checkbox
      v-for="item in field.options"
      :label="item.value"
      :key="item.value"
      >{{ item.label }}</el-checkbox
    >
  </el-checkbox-group>
</template>
<script>
export default {
  name: "wl-checkbox",
  props: {
    field: {
      type: Object,
      required: true,
    },
    value: {
      type: Array,
      required: true,
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
  mounted() {},
};
</script>

<style >
.is-checked .el-checkbox__label{
    color: #15B4A5  !important;
}
/* 添加一些样式以定制输入框的外观 */
</style>
