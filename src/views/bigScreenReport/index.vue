<template>
  <div class="main-layout">
    <el-form
      ref="form"
      :model="params"
      :rules="rules"
      label-width="120px"
      class="form"
    >
      <!-- 搜索 -->

      <el-form-item label="名称">
        <el-input
          v-model="params.reportName"
          size="mini"
          clearable
          placeholder="名称"
          class="filter-item"
        />
      </el-form-item>

      <el-form-item label="报表编码">
        <el-input
          v-model="params.reportCode"
          size="mini"
          clearable
          placeholder="报表编码"
          class="filter-item"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini" @click="search('form')"
          >查询</el-button
        >
        <el-button type="danger" size="mini" @click="reset('form')"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
    <el-row :gutter="20">
      <el-col v-for="item in list" :key="item.id" :span="6">
        <div class="bg">
          <img
            class="bg-img"
            :src="
              item.reportImage == null || item.reportImage == ''
                ? require('@/assets/images/charts.jpg')
                : item.reportImage
            "
            alt=""
          />
          <div class="content">
            <header>{{ item.reportName }}</header>
            <footer>
              {{ item.updateTime }}
              <div class="operation">
                <span
                  style="color:#15B4A5;cursor: pointer;"
                  class="el-icon-edit"
                  type="text"
                  @click="openDesign(item)"
                />
              </div>
            </footer>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="block">
      <wl-pagination
        :total="total"
        :pageNum.sync="pages.pageNum"
        :limit.sync="pages.pageSize"
        @pagination="fetchData"
      />
    </div>
  </div>
</template>
<script>
import { bigScreenList } from "@/db/bigscreen.js";
import wlPagination from "@/components/WlComponents/wl-pagination.vue";

export default {
  name: "bigScreenReport",
  data() {
    return {
      total: 30,
      pages: {
        pageNum: 1,
        pageSize: 10,
      },
      list: [],
      rules: {},
      params: {
        reportCode: "",
        reportName: "",
        reportType: "report_screen",
        pageNumber: 1,
        pageSize: 8,
        order: "DESC",
        sort: "update_time",
      },
      // 分享
      visibleForShareDialog: false,
      reportCodeForShareDialog: "",
      reportNameForShareDialog: "",
      reportTypeForShareDialog: "",
    };
  },
  components: {
    wlPagination,
  },
  mounted() {},
  created() {
    this.queryByPage();
  },
  methods: {
    // 查询
    search() {
      this.params.pageNumber = 1;
      this.queryByPage();
    },
    // 重置
    reset(formName) {
      this.$refs[formName].resetFields();
      this.params.reportName = "";
      this.params.reportCode = "";
      this.params.pageNumber = 1;
      this.queryByPage();
    },
    //分页
    fetchData(sizeData) {
      console.log(sizeData);
    },
    async queryByPage() {
      const res = bigScreenList;
      if (res.code != "200") return;
      this.listLoading = true;
      this.list = res.data.records;
      this.list.forEach((value) => {
        value["reportNameCode"] =
          value.reportName + "[" + value.reportCode + "]";
      });
      this.totalCount = res.data.total;
      this.totalPage = res.data.pages;
      this.listLoading = false;
    },
    handleSizeChange(val) {
      this.params.pageSize = val;
      this.queryByPage();
    },
    handleCurrentChange(val) {
      this.params.pageNumber = val;
      this.queryByPage();
    },
    // 分享
    share(val) {
      this.reportCodeForShareDialog = val.reportCode;
      this.reportNameForShareDialog = val.reportName;
      this.reportTypeForShareDialog = val.reportType;
      this.visibleForShareDialog = true;
    },
    openDesign(val) {
      let routeUrl = this.$router.resolve({
        //path: "/screenDesigner",
        path: "/bigscreen/designer",
        query: {
          reportCode: val.reportCode,
        },
      });
      window.open(routeUrl.href, "_blank");
    },
    viewDesign(val) {
      let routeUrl = this.$router.resolve({
        path: "/bigscreen/viewer",
        query: { reportCode: val.reportCode },
      });
      window.open(routeUrl.href, "_blank");
    },
  },
};
</script>

<style scoped lang="scss">
.form {
  display: flex;
  align-items: center;
}
.main-layout {
  padding: 20px;
  position: relative;
  height: auto;
  background: #fff;
  header {
    font-size: 24px;
    text-align: center;
    line-height: 80px;
  }
  .bg {
    width: 100%;
    height: 200px;
    position: relative;
    overflow: hidden;
    margin: 10px 0;
    border: 12px solid white;
  }

  .bg .bg-img {
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(6px);
    z-index: 2;
  }
  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    color: #fff;
    left: 0;
    top: 0;
    z-index: 3;
  }
  footer {
    width: 100%;
    font-size: 14px;
    padding: 16px;
    line-height: 30px;
    position: absolute;
    z-index: 3;
    bottom: 0;
    .operation {
      float: right;
      .view,
      .edit {
        color: #fff;
        font-size: 14px;
      }
    }
  }
}
</style>
