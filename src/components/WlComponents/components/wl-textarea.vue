<!--
 * @Description: 
 * @Author: Wang Su
 * @Date: 2024-01-16 14:03:51
 * @LastEditors: Wang Su
 * @LastEditTime: 2024-01-16 14:13:29
-->
<template>
  <el-input
    v-model="inputValue"
    type="textarea"
    :placeholder="field.placeholder"
    :disabled="field.disabled"
    v-bind="$attrs"
    maxlength="500"
    show-word-limit
  />
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      required: true,
    },
    value: {
      type: String,
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

<style lang='scss'>

/* 添加一些样式以定制输入框的外观 */
</style>
