<template>
  <div :style="styleObj">
    <v-chart ref="myVChart" :options="options" autoresize />
  </div>
</template>
<script>
import { targetWidgetLinkageLogic } from "@/views/bigscreenDesigner/designer/linkageLogic";

import echarts from "echarts";
import "../../../../../../node_modules/echarts/map/js/province/jiangsu.js";

let geoCoordMap = {
  南京市: [118.7749, 32.0295],
  无锡市: [120.2487, 31.5356],
  常州市: [119.7858, 31.7977],
  苏州市: [120.6473, 31.2977],
  南通市: [121.1587, 32.0839],
  扬州市: [119.4039, 32.3938],
  盐城市: [120.166, 33.3441],
  镇江市: [119.4662, 31.9873],
  泰州市: [119.9153, 32.4537],
  宿迁市: [118.0621, 34.0039],
  淮安市: [119.1179, 33.5474],
  连云港市: [119.1664, 34.5996],
  徐州市: [117.1899, 34.2704]
};
let data = [
  {
    name: "南京市",
    value: 123
  },
  {
    name: "常州市",
    value: 524
  },
  {
    name: "无锡市",
    value: 14
  },
  {
    name: "苏州市",
    value: 150
  },
  {
    name: "南通市",
    value: 75
  },
  {
    name: "扬州市",
    value: 130
  },
  {
    name: "盐城市",
    value: 183
  },
  {
    name: "镇江市",
    value: 111
  },
  {
    name: "泰州市",
    value: 19
  },
  {
    name: "宿迁市",
    value: 215
  },
  {
    name: "淮安市",
    value: 169
  },
  {
    name: "连云港市",
    value: 260
  },
  {
    name: "徐州市",
    value: 139
  }
];
let convertData = function(data) {
  let res = [];
  for (let i = 0; i < data.length; i++) {
    let geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};
let max = 6000,
  min = 10;
let maxSize4Pin = 100,
  minSize4Pin = 20;
import { eventBusParams } from "@/utils/screen";
export default {
  name: "widgetJSBarMap",
  props: {
    value: Object,
    ispreview: Boolean
  },
  data() {
    return {
      options: {
        //backgroundColor: '#0F1C3C',
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            if (params.value.length > 1) {
              return params.data.name + "" + params.data.value[2];
            } else {
              return params.name;
            }
          }
        },
        geo: {
          map: "江苏",
          show: true,
          roam: false,
          label: {
            emphasis: {
              show: false
            }
          },
          layoutSize: "80%",
          itemStyle: {
            normal: {
              borderColor: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "#00F6FF"
                  },
                  {
                    offset: 1,
                    color: "#53D9FF"
                  }
                ],
                false
              ),
              borderWidth: 3,
              shadowColor: "rgba(10,76,139,1)",
              shadowOffsetY: 0,
              shadowBlur: 60
            }
          }
        },
        series: [
          {
            type: "map",
            map: "江苏",
            aspectScale: 0.75,

            label: {
              normal: {
                //调整数值
                position: "center",
                show: true,
                color: "#53D9FF",
                fontSize: 20
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                //地图块颜色
                areaColor: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#073684" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#061E3D" // 100% 处的颜色
                    }
                  ]
                },
                borderColor: "#215495",
                borderWidth: 1
              },
              //鼠标放置颜色加深
              emphasis: {
                areaColor: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#073684" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#2B91B7" // 100% 处的颜色
                    }
                  ]
                }
              }
            },
            data: data
          },
          {
            name: "点",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin",
            itemStyle: {
              normal: {
                //气泡颜色
                color: {
                  type: "radial",
                  x: 0.5,
                  y: 0.5,
                  r: 0.5,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(5,80,151,0.2)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(5,80,151,0.8)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,108,255,0.7)"
                    }
                  ],
                  global: false
                }
              }
            },
            symbolSize: 40,
            label: {
              normal: {
                show: true,
                position: "bottom",
                textStyle: {
                  color: "#fff",
                  fontSize: 12
                },
                formatter(value) {
                  return value.data.name + "：" + value.data.value[2];
                }
              }
            },
            data: convertData(data),
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            zlevel: 6
          }
        ]
      },
      optionsStyle: {}, // 样式
      optionsData: {}, // 数据
      optionsCollapse: {}, // 图标属性
      optionsSetup: {},
      flagInter: null
    };
  },
  computed: {
    styleObj() {
      return {
        position: this.ispreview ? "absolute" : "static",
        width: this.optionsStyle.width + "px",
        height: this.optionsStyle.height + "px",
        left: this.optionsStyle.left + "px",
        top: this.optionsStyle.top + "px",
        background: this.optionsSetup.background
      };
    },
    allComponentLinkage() {
      return this.$store.state.designer.allComponentLinkage;
    }
  },
  watch: {
    value: {
      handler(val) {
        this.optionsStyle = val.position;
        this.optionsData = val.data;
        this.optionsCollapse = val.setup;
        this.optionsSetup = val.setup;
        this.editorOptions();
      },
      deep: true
    }
  },
  mounted() {
    this.optionsStyle = this.value.position;
    this.optionsData = this.value.data;
    this.optionsCollapse = this.value.setup;
    this.optionsSetup = this.value.setup;
    this.editorOptions();
    eventBusParams(
      this.optionsSetup,
      this.optionsData,
      (dynamicData, optionsSetup) => {
        console.log("dynamicData", dynamicData);
        this.getEchartData(dynamicData, optionsSetup);
      }
    );
    targetWidgetLinkageLogic(this); // 联动-目标组件逻辑
  },
  methods: {
    // 修改图标options属性
    editorOptions() {
      this.setOptionsTitle();
      this.setOptionTextValue();
      //this.setOptionDataValue();
      this.setOptionsData();
      this.setOptionAirSize();
      this.setOptionsTooltip();
      this.setOptionMapBlock();
    },
    // 标题设置
    setOptionsTitle() {
      const optionsSetup = this.optionsSetup;
      const title = {};
      title.text = optionsSetup.titleText;
      title.show = optionsSetup.isNoTitle;
      title.left = optionsSetup.textAlign;
      title.textStyle = {
        color: optionsSetup.textColor,
        fontSize: optionsSetup.textFontSize,
        fontWeight: optionsSetup.textFontWeight,
        fontStyle: optionsSetup.textFontStyle
      };
      title.subtext = optionsSetup.subText;
      title.subtextStyle = {
        color: optionsSetup.subTextColor,
        fontWeight: optionsSetup.subTextFontWeight,
        fontSize: optionsSetup.subTextFontSize,
        fontStyle: optionsSetup.subTextFontStyle
      };
      this.options.title = title;
    },
    setOptionTextValue() {
      const optionsSetup = this.optionsSetup;
      const label = this.options.series[0]["label"];
      const normal = {
        position: "center",
        show: optionsSetup.isShowMap,
        color: optionsSetup.fontTextColor,
        fontSize: optionsSetup.fontTextSize,
        fontWeight: optionsSetup.fontTextWeight
      };
      label["normal"] = normal;
    },
    setOptionMapBlock() {
      const optionsSetup = this.optionsSetup;
      const itemStyle = this.options.series[0]["itemStyle"];
      const normal = {
        //地图块颜色
        areaColor: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: optionsSetup.font0PreColor // 0% 处的颜色
            },
            {
              offset: 1,
              color: optionsSetup.font100PreColor // 100% 处的颜色
            }
          ]
        },
        borderColor: "#215495",
        borderWidth: 1
      };
      //鼠标放置颜色加深
      const emphasis = {
        areaColor: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#073684" // 0% 处的颜色
            },
            {
              offset: 1,
              color: optionsSetup.fontHighlightColor // 100% 处的颜色
            }
          ]
        }
      };
      itemStyle["normal"] = normal;
      itemStyle["emphasis"] = emphasis;
    },
    setOptionAirSize() {
      maxSize4Pin = this.optionsSetup.fontmaxSize4Pin;
      minSize4Pin = this.optionsSetup.fontminSize4Pin;
    },
    // tooltip 设置
    setOptionsTooltip() {
      const optionsSetup = this.optionsSetup;
      const tooltip = {
        trigger: "item",
        show: true,
        textStyle: {
          color: optionsSetup.tipsColor,
          fontSize: optionsSetup.tipsFontSize
        },
        formatter: function(params) {
          if (params.value.length > 1) {
            return params.data.name + "" + params.data.value[2];
          } else {
            return params.name;
          }
        }
      };
      this.options.tooltip = tooltip;
    },
    //数据解析
    setOptionsData(e, paramsConfig) {
      const optionsData = this.optionsData; // 数据类型 静态 or 动态
      // 联动接收者逻辑开始
      optionsData.dynamicData = optionsData.dynamicData || {}; // 兼容 dynamicData undefined
      const myDynamicData = optionsData.dynamicData;
      clearInterval(this.flagInter); // 不管咋，先干掉上一次的定时任务，避免多跑
      if (
        e &&
        optionsData.dataType !== "staticData" &&
        Object.keys(myDynamicData.contextData).length
      ) {
        const keyArr = Object.keys(myDynamicData.contextData);
        paramsConfig.forEach(conf => {
          if (keyArr.includes(conf.targetKey)) {
            myDynamicData.contextData[conf.targetKey] = e[conf.originKey];
          }
        });
      }
      // 联动接收者逻辑结束
      optionsData.dataType == "staticData"
        ? this.staticDataFn(optionsData.staticData)
        : this.dynamicDataFn(optionsData.dynamicData, optionsData.refreshTime);
    },
    staticDataFn(val) {
      this.options.series[0]["data"] = val;
      const optionsSetup = this.optionsSetup;
      const label = this.options.series[1]["label"];
      const normal = {
        show: true,
        color: "#fff",
        fontWeight: "bold",
        position: "inside",
        formatter: function(para) {
          return "{cnNum|" + para.data.value[2] + "}";
        },
        rich: {
          cnNum: {
            fontSize: optionsSetup.fontDataSize,
            color: optionsSetup.fontDataColor,
            fontWeight: optionsSetup.fontDataWeight
          }
        }
      };
      const data = convertData(val);
      this.options.series[1]["data"] = data;
      label["normal"] = normal;
    },
    dynamicDataFn(val, refreshTime) {
      if (!val) return;
      if (this.ispreview) {
        this.getEchartData(val);
        this.flagInter = setInterval(() => {
          this.getEchartData(val);
        }, refreshTime);
      } else {
        this.getEchartData(val);
      }
    },
    getEchartData(val) {
      const data = this.queryEchartsData(val);
      data.then(res => {
        this.renderingFn(res);
      });
    },
    renderingFn(val) {
      this.options.series[0]["data"] = val;
      const optionsSetup = this.optionsSetup;
      const label = this.options.series[1]["label"];
      const normal = {
        show: true,
        color: "#fff",
        fontWeight: "bold",
        position: "inside",
        formatter: function(para) {
          return "{cnNum|" + para.data.value[2] + "}";
        },
        rich: {
          cnNum: {
            fontSize: optionsSetup.fontDataSize,
            color: optionsSetup.fontDataColor,
            fontWeight: optionsSetup.fontDataWeight
          }
        }
      };
      const data = convertData(val);
      this.options.series[1]["data"] = data;
      label["normal"] = normal;
    }
  }
};
</script>
<style lang="scss" scoped>
.echartMap {
  width: 100%;
  height: 100%;
}

.echarts {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
