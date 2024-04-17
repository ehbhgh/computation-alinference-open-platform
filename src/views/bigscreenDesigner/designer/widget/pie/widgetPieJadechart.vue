<template>
  <div :style="styleObj">
    <v-chart ref="myVChart" :options="options" autoresize />
  </div>
</template>

<script>
import {
  originWidgetLinkageLogic,
  targetWidgetLinkageLogic
} from "@/views/bigscreenDesigner/designer/linkageLogic";
export default {
  name: "widgetPieJadechart",
  components: {},
  props: {
    value: Object,
    ispreview: Boolean
  },
  data() {
    return {
      options: {
        // backgroundColor: "#344b58",
        title: {
          text: "", //主标题
          subtext: "", //副标题
          textStyle: {
            //主标题样式
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20
          },
          subtextStyle: {
            //副标题样式
            color: "#fff",
            fontSize: 20,
            fontWeight: "bold",
            color: "#0f0"
          }
        },
        tooltip: {
          formatter: function(params, ticket, callback) {
            //第一个参数数据集、第二个参数是异步回调标志、第三个参数是异步回调
            return params.seriesName + ": " + params.value; //系列名称：数据值
          }
        },
        color: [], //调色盘颜色列表，默认情况下图例和饼形环图颜色使用
        legend: {
          itemHeight: 20, //图例的高度
          itemGap: 10, //图例之间的间距
          data: [], //图例的数据数组
          textStyle: {
            color: "#fff"
          },
          selectedMode: true, //图例选择模式
          orient: "vertical" //图例布局方式
        },
        series: []
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
        this.optionsCollapse = val.collapse;
        this.optionsSetup = val.setup;
        this.editorOptions();
      },
      deep: true
    }
  },
  created() {
    this.optionsStyle = this.value.position;
    this.optionsData = this.value.data;
    this.optionsCollapse = this.value.collapse;
    this.optionsSetup = this.value.setup;
    this.editorOptions();
    targetWidgetLinkageLogic(this); // 联动-目标组件逻辑
    originWidgetLinkageLogic(this); // 联动-源组件逻辑
  },
  methods: {
    // 修改图标options属性
    editorOptions() {
      this.setOptionsTitle();
      this.setOptionsTooltip();
      this.setOptionsColor();
      this.setOptionsData();
      this.setOptionsLegend();
    },

    // 标题设置
    setOptionsTitle() {
      const optionsSetup = this.optionsSetup;
      const title = {};
      title.text = optionsSetup.titleText;
      title.show = optionsSetup.isNoTitle;
      title.left = optionsSetup.textAlign;
      title.top = optionsSetup.textOffect;
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
    // 提示语设置 tooltip
    setOptionsTooltip() {
      const optionsSetup = this.optionsSetup;
      const tooltip = {
        trigger: "item",
        textStyle: {
          color: optionsSetup.tipsColor,
          fontSize: optionsSetup.tipsFontSize
        }
      };
      this.options.tooltip = tooltip;
    },
    // 图例操作 legend
    setOptionsLegend() {
      const optionsSetup = this.optionsSetup;
      const legend = this.options.legend;
      legend.show = optionsSetup.isShowLegend;
      legend.left = optionsSetup.lateralPosition + "%";
      legend.top = optionsSetup.longitudinalPosition + "px";
      legend.orient = optionsSetup.layoutFront;
      legend.textStyle = {
        color: optionsSetup.legendColor,
        fontSize: optionsSetup.legendFontSize
      };
      legend.itemWidth = optionsSetup.legendWidth;
      legend.itemHeight = optionsSetup.legendHeight;
    },
    // // 图例颜色修改
    setOptionsColor() {
      const optionsSetup = this.optionsSetup;
      const customColor = optionsSetup.customColor;
      if (!customColor) return;
      const arrColor = [];
      for (let i = 0; i < customColor.length; i++) {
        arrColor.push(customColor[i].color);
      }
      this.options.color = arrColor;
      this.options = Object.assign({}, this.options);
    },

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
      const staticData = typeof val == "string" ? JSON.parse(val) : val;
      const placeHolderStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      };
      const optionsSetup = this.optionsSetup;
      const customColor = optionsSetup.customColor;
      let staticList = [];
      let lengendList = [];
      const maxRadius = optionsSetup.maxRadius;
      staticData.forEach((item, index) => {
        lengendList.push(item.name);
        staticList.push({
          name: item.name,
          type: "pie",
          clockWise: false, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          radius: [maxRadius - 20 - index * 30, maxRadius - index * 30],
          itemStyle: placeHolderStyle,
          label: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: item.value,
              itemStyle: {
                normal: {
                  color: customColor[index].color
                }
              }
            },
            {
              value: item.total - item.value,
              itemStyle: {
                normal: {
                  color: "transparent"
                }
              }
            }
          ]
        });
      });
      this.options.series = staticList;
      this.options.legend.data = lengendList;
      // this.options = Object.assign({}, this.options);
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
      this.options.series = val;
    }
  }
};
</script>

<style scoped lang="scss">
.echarts {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
