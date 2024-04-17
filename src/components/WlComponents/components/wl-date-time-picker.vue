<!--
 * @Description: 
 * @Author: Wang Su
 * @Date: 2024-01-16 09:15:33
 * @LastEditors: Wang Su
 * @LastEditTime: 2024-01-16 09:42:34
-->
<template>
  <el-date-picker
    v-model="inputValue"
    type="datetimerange"
    :picker-options="field.options"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    v-bind="$attrs"
    align="right"
    value-format="yyyy-MM-dd HH:mm:ss"
  >
  </el-date-picker>
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

<style lang="scss" >
.el-date-table td.end-date span,
.el-date-table td.start-date span {
  background-color: #15b4a5 !important;
}
 .el-date-table td.today span{
  color:#15b4a5 !important;
}
/* 添加一些样式以定制选择框的外观 */
</style>
