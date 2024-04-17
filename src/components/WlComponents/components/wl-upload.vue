<!--
 * @Description: 
 * @Author: Wang Su
 * @Date: 2024-01-15 17:23:24
 * @LastEditors: Wang Su
 * @LastEditTime: 2024-01-16 10:40:59
-->
<template>
  <div>
    <el-upload
      drag
      :auto-upload="false"
      action
      id="appFile"
      :accept="field.accept"
      :limit="1"
      :on-remove="() => fileRemove('appFile')"
      :on-exceed="handleExceed"
      :file-list="fileList"
      :on-change="appFileChange"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div slot="tip" class="el-upload__tip">
        只能上传类型为{{ field.accept }}的文件且文件大小不超过{{
          this.field.size / 1024 / 1024 / 1024
        }}G。
      </div>
    </el-upload>
  </div>
</template>
<script>
export default {
  name: "wl-upload",
  components: {},
  mixins: [],
  data() {
    return {
      fileList: [],
    };
  },
  props: {
    field: {
      type: Object,
      required: true,
    },
  },

  watch: {},
  mounted() {},
  methods: {
    //公共方法。
    handleExceed(files, fileList) {
      this.$message.warning("当前限制只能上传1个文件");
    },
    //file移除文件公共方法 vueFileData:传入绑定的fileData
    fileRemove(vueFileData) {
      this.downFlag = false;
      this[vueFileData] = {};
      this.appFileList = [];
    },
    appFileChange(file, fileList) {
      const isLt2M = file.size < this.field.size; //返回的kb转换成字节
      if (!isLt2M) {
        this.$message({
          message: `上传文件大小不能超过${this.field.size /
            1024 /
            1024 /
            1024}G!`,
          type: "warning",
        });
        this.appFileList = [];
      } else if (file.name.toLowerCase().indexOf(".zip") === -1) {
        this.$message({
          type: "warning",
          message: `请上传类型为${this.field.accept}的文件！`,
        });
        this.appFileList = [];
      } else {
        this.$emit("upload", file);
      }
    },
  },
};
</script>
<style lang="scss">
#appFile .el-upload-dragger {
  width: 300px !important;
}
#appFile .el-upload-dragger:hover {
  border: 1px dashed #15b4a5 !important;
}
#appFile .el-upload__text em {
  color: #15b4a5 !important;
}
</style>
