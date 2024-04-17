<template>
  <el-select
     v-model="inputValue"
    :placeholder="field.placeholder"
    :disabled="field.disabled"
    v-bind="$attrs"
  >
    <el-option
      v-for="(option, index) in field.options"
      :key="index"
      :label="option.label"
      :value="option.value"
    />
  </el-select>
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
};
</script>

<style scoped>
/* 添加一些样式以定制选择框的外观 */
</style>
