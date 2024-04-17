<template>
  <el-input
    v-model="inputValue"
    :placeholder="field.placeholder"
    :disabled="field.disabled"
    v-bind="$attrs"
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
  mounted(){
  }
};
</script>

<style scoped>
/* 添加一些样式以定制输入框的外观 */
</style>
