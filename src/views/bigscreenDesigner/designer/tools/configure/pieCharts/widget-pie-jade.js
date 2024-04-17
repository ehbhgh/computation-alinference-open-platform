/*
 * @Descripttion: 饼图
 * @version:
 * @Author: qianlishi
 * @Date: 2021-08-29 07:28:20
 * @LastEditors: Wang Su
 * @LastEditTime: 2023-12-12 16:02:51
 */
export const widgetPieJadechart = {
  code: "widgetPieJadechart",
  type: "pieChart",
  tabName: "饼图",
  label: "玉玦图",
  icon: "iconicon_tubiao_bingtu",
  options: {
    // 配置
    setup: [
      {
        type: "el-input-text",
        label: "图层名称",
        name: "layerName",
        required: false,
        placeholder: "",
        value: "玉玦图"
      },
      {
        type: "vue-color",
        label: "背景颜色",
        name: "background",
        required: false,
        placeholder: "",
        value: ""
      },
      {
        type: "el-input-number",
        label: "最大半径设定",
        name: "maxRadius",
        required: false,
        placeholder: "",
        value: 200
      },
      [
        {
          name: "标题设置",
          list: [
            {
              type: "el-switch",
              label: "标题显示",
              name: "isNoTitle",
              required: false,
              placeholder: "",
              value: true
            },
            {
              type: "el-input-text",
              label: "标题名",
              name: "titleText",
              required: false,
              placeholder: "",
              value: "室内温度"
            },

            {
              type: "vue-color",
              label: "字体颜色",
              name: "textColor",
              required: false,
              placeholder: "",
              value: "#ffffff"
            },
            {
              type: "el-input-number",
              label: "字体字号",
              name: "textFontSize",
              required: false,
              placeholder: "",
              value: 20
            },
            {
              type: "el-select",
              label: "字体粗细",
              name: "textFontWeight",
              required: false,
              placeholder: "",
              selectOptions: [
                { code: "normal", name: "正常" },
                { code: "bold", name: "粗体" },
                { code: "bolder", name: "特粗体" },
                { code: "lighter", name: "细体" }
              ],
              value: "normal"
            },
            {
              type: "el-select",
              label: "字体风格",
              name: "textFontStyle",
              required: false,
              placeholder: "",
              selectOptions: [
                { code: "normal", name: "正常" },
                { code: "italic", name: "italic斜体" },
                { code: "oblique", name: "oblique斜体" }
              ],
              value: "normal"
            },
            {
              type: "el-select",
              label: "字体位置",
              name: "textAlign",
              required: false,
              placeholder: "",
              selectOptions: [
                { code: "center", name: "居中" },
                { code: "left", name: "左对齐" },
                { code: "right", name: "右对齐" }
              ],
              value: "center"
            },
            {
              type: "el-select",
              label: "纵向位置",
              name: "textOffect",
              required: false,
              placeholder: "",
              selectOptions: [
                { code: "top", name: "顶端" },
                { code: "middle", name: "居中" },
                { code: "bottom", name: "末端" }
              ],
              value: "middle"
            },
            {
              type: "el-input-text",
              label: "副标题名",
              name: "subText",
              required: false,
              placeholder: "",
              value: "26℃"
            },
            {
              type: "vue-color",
              label: "字体颜色",
              name: "subTextColor",
              required: false,
              placeholder: "",
              value: '#0f0'
            },
            {
              type: "el-input-number",
              label: "字体字号",
              name: "subTextFontSize",
              required: false,
              placeholder: "",
              value: 20
            },
            {
              type: "el-select",
              label: "字体粗细",
              name: "subTextFontWeight",
              required: false,
              placeholder: "",
              selectOptions: [
                { code: "normal", name: "正常" },
                { code: "bold", name: "粗体" },
                { code: "bolder", name: "特粗体" },
                { code: "lighter", name: "细体" }
              ],
              value: "bold"
            },
            {
              type: "el-select",
              label: "字体风格",
              name: "subTextFontStyle",
              required: false,
              placeholder: "",
              selectOptions: [
                { code: "normal", name: "正常" },
                { code: "italic", name: "italic斜体" },
                { code: "oblique", name: "oblique斜体" }
              ],
              value: "normal"
            }
          ]
        },

        {
          name: "提示语设置",
          list: [
            {
              type: "el-input-number",
              label: "字体字号",
              name: "tipsFontSize",
              required: false,
              placeholder: "",
              value: 16
            },
            {
              type: "vue-color",
              label: "字体颜色",
              name: "tipsColor",
              required: false,
              placeholder: "",
              value: "#00FEFF"
            }
          ]
        },
        {
          name: "图例操作",
          list: [
            {
              type: "el-switch",
              label: "图例",
              name: "isShowLegend",
              required: false,
              placeholder: "",
              value: true
            },
            {
              type: "vue-color",
              label: "字体颜色",
              name: "legendColor",
              required: false,
              placeholder: "",
              value: "#fff"
            },
            {
              type: "el-input-number",
              label: "字体字号",
              name: "legendFontSize",
              required: false,
              placeholder: "",
              value: 12
            },
            {
              type: "el-input-number",
              label: "图例宽度",
              name: "legendWidth",
              required: false,
              placeholder: "",
              value: 15
            },
            {
              type: "el-input-number",
              label: "图例高度",
              name: "legendHeight",
              required: false,
              placeholder: "",
              value: 20
            },
            {
              type: "el-input-number",
              label: "横向位置",
              name: "lateralPosition",
              required: false,
              placeholder: "",
              value: 50
            },
            {
              type: "el-input-number",
              label: "纵向位置",
              name: "longitudinalPosition",
              required: false,
              placeholder: "",
              value: 125
            },
            {
              type: "el-select",
              label: "布局前置",
              name: "layoutFront",
              required: false,
              placeholder: "",
              selectOptions: [
                { code: "vertical", name: "竖排" },
                { code: "horizontal", name: "横排" }
              ],
              value: "vertical"
            }
          ]
        },
        {
          name: "自定义配色",
          list: [
            {
              type: "customColor",
              label: "",
              name: "customColor",
              required: false,
              value: [
                { color: "#0CD2E6" },
                { color: "#00BFA5" },
                { color: "#FFC722" },
                { color: "#886EFF" },
                { color: "#008DEC" }
              ]
            }
          ]
        },

        {
          name: "组件联动",
          list: [
            {
              type: "componentLinkage",
              label: "",
              name: "componentLinkage",
              required: false,
              value: []
            }
          ]
        }
      ]
    ],
    // 数据
    data: [
      {
        type: "el-radio-group",
        label: "数据类型",
        name: "dataType",
        require: false,
        placeholder: "",
        selectValue: true,
        selectOptions: [
          {
            code: "staticData",
            name: "静态数据"
          },
          {
            code: "dynamicData",
            name: "动态数据"
          }
        ],
        value: "staticData"
      },
      {
        type: "el-input-number",
        label: "刷新时间(毫秒)",
        name: "refreshTime",
        relactiveDom: "dataType",
        relactiveDomValue: "dynamicData",
        value: 600000
      },
      {
        type: "el-button",
        label: "静态数据",
        name: "staticData",
        required: false,
        placeholder: "",
        relactiveDom: "dataType",
        relactiveDomValue: "staticData",
        value: [
          { value: 28, name: "室外温度", total: 50, radius: [180, 200] },
          { value: 26, name: "室内温度设定点", total: 58, radius: [150, 170] },
          { value: 28, name: "室内温度", total: 50, radius: [120, 140] }
        ]
      },
      {
        type: "dycustComponents",
        label: "",
        name: "dynamicData",
        required: false,
        placeholder: "",
        relactiveDom: "dataType",
        chartType: "widget-piechart",
        relactiveDomValue: "dynamicData",
        dictKey: "PIE_PROPERTIES",
        value: ""
      }
    ],
    // 坐标
    position: [
      {
        type: "el-input-number",
        label: "左边距",
        name: "left",
        required: false,
        placeholder: "",
        value: 0
      },
      {
        type: "el-input-number",
        label: "上边距",
        name: "top",
        required: false,
        placeholder: "",
        value: 0
      },
      {
        type: "el-input-number",
        label: "宽度",
        name: "width",
        required: false,
        placeholder: "该容器在1920px大屏中的宽度",
        value: 600
      },
      {
        type: "el-input-number",
        label: "高度",
        name: "height",
        required: false,
        placeholder: "该容器在1080px大屏中的高度",
        value: 500
      }
    ]
  }
};
