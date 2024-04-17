<template>
  <el-button
    :disabled="field.disabled"
    v-bind="$attrs"
    @click="onClick"
    :icon="field.icon"
  >
    {{ field.buttonText }}
  </el-button>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      required: true,
    },
  },

  mounted() {},
  methods: {
    onClick() {
      this.$emit("submit-form");
    },
  },
};
</script>

<style scoped>
/* 添加一些样式以定制输入框的外观 */
</style>
