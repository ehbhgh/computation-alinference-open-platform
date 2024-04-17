<template>
  <div class="box">
    <div class="input_area">
      <el-input
        placeholder="请输入设备名称"
        :id="search_id"
        v-model="input"
        class="input_item"
      />
      <img src="../img/gwlogo.png" alt="" class="img_logo" />
      <span class="el-icon-search search" @click="searchMap"></span>
    </div>
    <div class="select_area">
      <el-cascader
        :options="options"
        placeholder="请选择地域"
        :show-all-levels="false"
        :props="cityProps"
        clearable
        v-model="cityVal"
        @change="selectCity"
      ></el-cascader>
    </div>
    <div class="date_area">
      <el-date-picker
        v-model="mapDate"
        align="right"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions"
        @change="changeDate"
      />
    </div>
  </div>
</template>
<script>
import cityList from "@/db/area.js";
export default {
  name: "mapSearch",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      search_id: "searchId",
      input: "",
      options: cityList,
      cityProps: {
        children: "children",
        label: "business_name",
        value: "business_name",
        checkStrictly: true,
      },
      cityVal: "",
      mapDate: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.sendId();
  },
  methods: {
    sendId() {
      this.$emit("share_id", this.search_id);
    },
    searchMap() {
      this.$emit("input_val", this.input);
    },
    selectCity() {
      this.$emit("select_val", this.cityVal);
    },
    changeDate(){
      console.log(this.mapDate)
    }
  },
};
</script>
<style lang="scss" scoped>
.box {
  display: flex;
  .input_area {
    position: relative;
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    .input_item {
      width: 100%;
      /deep/ .el-input__inner {
        padding-left: 30px !important;
      }
    }
    .img_logo {
      position: absolute;
      left: 5px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    span {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 16px;
      color: #ccc;
      cursor: pointer;
    }
  }
  .select_area {
    width: 120px;
    display: flex;
    align-items: center;
    height: 50px;
    margin-left: 10px;
  }
  .date_area {
    width: 150px;
    display: flex;
    align-items: center;
    height: 50px;
    margin-left: 10px;
  }
}
</style>
