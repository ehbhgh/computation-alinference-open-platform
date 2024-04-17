<template>
  <el-form :model="form" :rules="rules" ref="dynamicForm" class="form">
    <el-form-item
      v-for="(field, index) in fields"
      :key="index"
      :label="field.label"
      :prop="field.prop"
      :label-width="field.labelWidth"
    >
      <component
        :is="field.type"
        :field="field"
        v-model="form[field.name]"
        :id="field.name"
        :style="field.style"
        size="mini"
        @submit-form="submitForm"
        @upload="upload"
      />
    </el-form-item>
  </el-form>
</template>

<script>
import wlInput from "./components/wl-input.vue";
import wlTextarea from "./components/wl-textarea.vue";
import wlSelect from "./components/wl-select.vue";
import wlButton from "./components/wl-button.vue";
import wlCascader from "./components/wl-cascader.vue";
import wlCheckbox from "./components/wl-checkbox.vue";
import wlDateTimePicker from "./components/wl-date-time-picker.vue";
import wlUpload from "./components/wl-upload.vue";
// 其他组件的引入
export default {
  props: {
    fields: {
      type: Array,
      required: true,
    },

    formData: {
      type: Object,
      default: () => ({}),
    },
    formRules: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    wlInput,
    wlSelect,
    wlButton,
    wlCascader,
    wlCheckbox,
    wlDateTimePicker,
    wlUpload,
    wlTextarea
    // 其他组件的注册
  },
  data() {
    return {
      form: { ...this.formData },
      rules: { ...this.formRules },
    };
  },
  methods: {
    submitForm(callBack) {
      this.$refs.dynamicForm.validate((valid) => {
        if (valid) {
          // 处理表单提交逻辑
          callBack && callBack(this.form);
        } else {
          console.log("Validation failed");
        }
      });
    },
    upload(val) {
      this.form={
        ...this.form,
        app:val
      }
      console.log(val,'ddd');
    },
  },
};
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
</style>
