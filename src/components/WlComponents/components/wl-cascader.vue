<template>
 <el-cascader
      v-model="inputValue"
      :placeholder="field.placeholder"
      :disabled="field.disabled"
      :options="field.options"
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
      type: Array,
      required: () => [],
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

<style lang="scss">
 .el-cascader {
    line-height: 0px !important;
  }
.in-active-path .el-cascader-node__label{
     color: #15B4A5  !important;
}
.in-active-path .el-cascader-node__postfix{
    color: #15B4A5  !important;
}
.is-active .el-cascader-node__label{
     color: #15B4A5  !important;
}
.is-active .el-cascader-node__postfix{
     color: #15B4A5  !important;
}
</style>
