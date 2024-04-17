<template>
  <div>
    <div class="header">
      <wl-form
        :fields="queryFormFields"
        :formData="formData"
        :formRules="formRules"
        ref="wlForm"
      />
    </div>
    <wl-table :data="tableData" :column="column" style="width: 100%" border>
      <template #handle="{ scope: { row, $index } }">
        <el-button
          size="mini"
          type="text"
          icon="el-icon-edit"
          @click="handleUpdate(row)"
          >编辑</el-button
        >
        <el-button
          size="mini"
          type="text"
          style="background:red;border:none"
          icon="el-icon-delete"
          @click="handleDelete(row, $index)"
          >删除</el-button
        >
      </template>
    </wl-table>
    <wl-pagination
      :total="total"
      :pageNum.sync="pages.pageNum"
      :limit.sync="pages.pageSize"
      @pagination="fetchData"
    />
    <wl-dialog
      :visible.sync="dialogVisible"
      :title="dialogTitle"
      :width="dialogWidth"
      @close="handleDialogClose"
      @cancel="handleDialogCancel"
      @confirm="handleDialogConfirm"
      :close-on-click-modal="false"
      :cancelButtonText="cancelButtonText"
      :confirmButtonText="confirmButtonText"
      :dialogStyle="dialogStyle"
    >
      <wl-form
        :fields="formFields"
        :formData="formData"
        :formRules="formRules"
        ref="wlForm"
      />
    </wl-dialog>
  </div>
</template>
<script>
import wlTable from "@/components/WlComponents/wl-table.vue";
import wlPagination from "@/components/WlComponents/wl-pagination.vue";
import wlForm from "@/components/WlComponents/wl-form.vue";
import wlDialog from "@/components/WlComponents/wl-dialog.vue";
export default {
  name: "notify",
  components: { wlTable, wlPagination, wlForm, wlDialog },
  mixins: [],
  props: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      column: Object.freeze([
        { attrs: { type: "selection", width: "55" } },
        {
          attrs: {
            prop: "date",
            label: "时间",
            align: "center",
            "show-overflow-tooltip": true,
          },
        },
        {
          attrs: {
            prop: "name",
            label: "名字",
            align: "center",
            "show-overflow-tooltip": true,
          },
        },
        {
          attrs: {
            prop: "address",
            label: "地址",
            align: "center",
            "show-overflow-tooltip": true,
          },
        },
        {
          slot: "handle",
          attrs: {
            label: "操作",
            "class-name": "small-padding fixed-width",
            align: "center",
          },
        },
      ]),
      total: 30,
      pages: {
        pageNum: 1,
        pageSize: 10,
      },
      formFields: [
        {
          type: "wl-input",
          name: "username",
          label: "姓名",
          labelWidth: "80px",
          prop: "username",
          placeholder: "请输入姓名",
          style: {
            width: "300px",
          },
        },
        {
          type: "wl-select",
          name: "country",
          prop: "country",
          label: "国家",
          labelWidth: "80px",
          placeholder: "请选择国家",
          style: {
            width: "300px",
          },
          options: [
            {
              label: "中国",
              value: "china",
            },
            {
              label: "英国",
              value: "English",
            },
            {
              label: "日本",
              value: "japan",
            },
          ],
        },
        {
          type: "wl-cascader",
          name: "city",
          labelWidth: "80px",
          prop: "city",
          label: "城市",
          placeholder: "请选择城市",
          style: {
            width: "300px",
          },
          options: [
            {
              value: "zhinan",
              label: "指南",
              children: [
                {
                  value: "shejiyuanze",
                  label: "设计原则",
                  children: [
                    {
                      value: "yizhi",
                      label: "一致",
                    },
                    {
                      value: "fankui",
                      label: "反馈",
                    },
                    {
                      value: "xiaolv",
                      label: "效率",
                    },
                    {
                      value: "kekong",
                      label: "可控",
                    },
                  ],
                },
                {
                  value: "daohang",
                  label: "导航",
                  children: [
                    {
                      value: "cexiangdaohang",
                      label: "侧向导航",
                    },
                    {
                      value: "dingbudaohang",
                      label: "顶部导航",
                    },
                  ],
                },
              ],
            },
            {
              value: "zujian",
              label: "组件",
              children: [
                {
                  value: "basic",
                  label: "Basic",
                  children: [
                    {
                      value: "layout",
                      label: "Layout 布局",
                    },
                    {
                      value: "color",
                      label: "Color 色彩",
                    },
                    {
                      value: "typography",
                      label: "Typography 字体",
                    },
                    {
                      value: "icon",
                      label: "Icon 图标",
                    },
                    {
                      value: "button",
                      label: "Button 按钮",
                    },
                  ],
                },
                {
                  value: "form",
                  label: "Form",
                  children: [
                    {
                      value: "radio",
                      label: "Radio 单选框",
                    },
                    {
                      value: "checkbox",
                      label: "Checkbox 多选框",
                    },
                    {
                      value: "input",
                      label: "Input 输入框",
                    },
                    {
                      value: "input-number",
                      label: "InputNumber 计数器",
                    },
                    {
                      value: "select",
                      label: "Select 选择器",
                    },
                    {
                      value: "cascader",
                      label: "Cascader 级联选择器",
                    },
                    {
                      value: "switch",
                      label: "Switch 开关",
                    },
                    {
                      value: "slider",
                      label: "Slider 滑块",
                    },
                    {
                      value: "time-picker",
                      label: "TimePicker 时间选择器",
                    },
                    {
                      value: "date-picker",
                      label: "DatePicker 日期选择器",
                    },
                    {
                      value: "datetime-picker",
                      label: "DateTimePicker 日期时间选择器",
                    },
                    {
                      value: "upload",
                      label: "Upload 上传",
                    },
                    {
                      value: "rate",
                      label: "Rate 评分",
                    },
                    {
                      value: "form",
                      label: "Form 表单",
                    },
                  ],
                },
                {
                  value: "data",
                  label: "Data",
                  children: [
                    {
                      value: "table",
                      label: "Table 表格",
                    },
                    {
                      value: "tag",
                      label: "Tag 标签",
                    },
                    {
                      value: "progress",
                      label: "Progress 进度条",
                    },
                    {
                      value: "tree",
                      label: "Tree 树形控件",
                    },
                    {
                      value: "pagination",
                      label: "Pagination 分页",
                    },
                    {
                      value: "badge",
                      label: "Badge 标记",
                    },
                  ],
                },
                {
                  value: "notice",
                  label: "Notice",
                  children: [
                    {
                      value: "alert",
                      label: "Alert 警告",
                    },
                    {
                      value: "loading",
                      label: "Loading 加载",
                    },
                    {
                      value: "message",
                      label: "Message 消息提示",
                    },
                    {
                      value: "message-box",
                      label: "MessageBox 弹框",
                    },
                    {
                      value: "notification",
                      label: "Notification 通知",
                    },
                  ],
                },
                {
                  value: "navigation",
                  label: "Navigation",
                  children: [
                    {
                      value: "menu",
                      label: "NavMenu 导航菜单",
                    },
                    {
                      value: "tabs",
                      label: "Tabs 标签页",
                    },
                    {
                      value: "breadcrumb",
                      label: "Breadcrumb 面包屑",
                    },
                    {
                      value: "dropdown",
                      label: "Dropdown 下拉菜单",
                    },
                    {
                      value: "steps",
                      label: "Steps 步骤条",
                    },
                  ],
                },
                {
                  value: "others",
                  label: "Others",
                  children: [
                    {
                      value: "dialog",
                      label: "Dialog 对话框",
                    },
                    {
                      value: "tooltip",
                      label: "Tooltip 文字提示",
                    },
                    {
                      value: "popover",
                      label: "Popover 弹出框",
                    },
                    {
                      value: "card",
                      label: "Card 卡片",
                    },
                    {
                      value: "carousel",
                      label: "Carousel 走马灯",
                    },
                    {
                      value: "collapse",
                      label: "Collapse 折叠面板",
                    },
                  ],
                },
              ],
            },
            {
              value: "ziyuan",
              label: "资源",
              children: [
                {
                  value: "axure",
                  label: "Axure Components",
                },
                {
                  value: "sketch",
                  label: "Sketch Templates",
                },
                {
                  value: "jiaohu",
                  label: "组件交互文档",
                },
              ],
            },
          ],
        },
        {
          type: "wl-checkbox",
          name: "area",
          label: "地域",
          labelWidth: "80px",
          prop: "area",
          placeholder: "请选择地域",
          style: {
            width: "300px",
          },
          options: [
            {
              label: "中国",
              value: "china",
            },
            {
              label: "英国",
              value: "English",
            },
            {
              label: "日本",
              value: "japan",
            },
          ],
        },
        {
          type: "wl-date-time-picker",
          name: "time",
          label: "时间",
          labelWidth: "80px",
          prop: "time",
          style: {
            width: "300px",
          },
          options: {
            shortcuts: [
              {
                text: "最近一周",
                onClick(picker) {
                  const end = new Date();
                  const start = new Date();
                  start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                  picker.$emit("pick", [start, end]);
                },
              },
              {
                text: "最近一个月",
                onClick(picker) {
                  const end = new Date();
                  const start = new Date();
                  start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                  picker.$emit("pick", [start, end]);
                },
              },
              {
                text: "最近三个月",
                onClick(picker) {
                  const end = new Date();
                  const start = new Date();
                  start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                  picker.$emit("pick", [start, end]);
                },
              },
            ],
          },
        },
        {
          type: "wl-upload",
          name: "app",
          label: "应用",
          labelWidth: "80px",
          prop: "app",
          size: 1024 * 1024 * 1024,
          accept:".zip"
        },
           {
          type: "wl-textarea",
          name: "desc",
          label: "描述",
          labelWidth: "80px",
          prop: "desc",
           style: {
            width: "300px",
            height:"180px",
            "min-height": "180px"
          },
        },
      ],
      queryFormFields: [
        {
          type: "wl-input",
          name: "username",
          label: "姓名",
          prop: "username",
          placeholder: "请输入姓名",
          labelWidth: "60px",
          style: {
            width: "200px",
          },
        },
        {
          type: "wl-select",
          name: "country",
          labelWidth: "80px",
          prop: "country",
          label: "国家",
          placeholder: "请选择国家",
          style: {
            width: "200px",
          },
          options: [
            {
              label: "中国",
              value: "china",
            },
            {
              label: "英国",
              value: "English",
            },
            {
              label: "日本",
              value: "japan",
            },
          ],
        },
        {
          type: "wl-button",
          buttonText: "查询",
          size: "mini",
          labelWidth: "60px",
          icon: "el-icon-search",
          onClick: () => {
            console.log("ddd");
          },
        },
      ],
      formData: {
        username: "",
        country: "",
        city: [],
        area: [],
        time: [],
        desc:""
      },
      formRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "change",
          },
        ],
        city: [
          {
            required: true,
            message: "请选择城市",
            trigger: "change",
          },
        ],
        area: [
          {
            required: true,
            message: "请选择地域",
            trigger: "change",
          },
        ],
        time: [
          {
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        app: [
          {
            required: true,
            message: "请上传app",
            trigger: "change",
          },
        ],
        country: [
          {
            required: true,
            message: "请选择国家",
            trigger: "change",
          },
        ],
      },

      dialogVisible: false,
      dialogTitle: "编辑消息",
      dialogWidth: "50%",
      cancelButtonText: "取消",
      confirmButtonText: "确认",
      dialogStyle:{
        height:"400px"
      }
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    fetchData(sizeData) {
      console.log(sizeData);
    },
    handleUpdate() {
      this.openDialog();
    },
    handleDelete() {},
    onSubmit() {},
    openDialog() {
      this.dialogVisible = true;
    },
    handleDialogClose() {
      console.log("Dialog 关闭");
    },
    handleDialogCancel() {
      console.log("点击取消按钮");
    },
    handleDialogConfirm() {
      this.$refs.wlForm.submitForm((form) => {
        console.log(form);
        this.dialogVisible = false;
        //刷新页面
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.demo-form-inline {
  width: 700px;
}
</style>
