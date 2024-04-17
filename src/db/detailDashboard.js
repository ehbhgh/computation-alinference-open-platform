export default {
    "code": "200",
    "message": "操作成功",
    "args": null,
    "ext": null,
    "data": {
        "reportCode": "bm1",
        "dashboard": {
            "id": 285,
            "createBy": "admin",
            "createByView": null,
            "createTime": "2024-01-02 09:53:17",
            "updateBy": "admin",
            "updateByView": null,
            "updateTime": "2024-01-02 09:53:17",
            "version": 1,
            "reportCode": "bm1",
            "title": null,
            "width": null,
            "height": null,
            "backgroundColor": null,
            "backgroundImage": null,
            "presetLine": null,
            "refreshSeconds": null,
            "enableFlag": 1,
            "deleteFlag": 0,
            "sort": 0,
            "widgets": [
                {
                    "type": "widgetLineStackChart",
                    "value": {
                        "reportCode": null,
                        "setup": {
                            "symbol": "circle",
                            "textFontStyle": "normal",
                            "lateralPosition": "center",
                            "percentSign": false,
                            "reversalY": false,
                            "reversalX": false,
                            "marginRight": 40,
                            "textInterval": "",
                            "dataColor": "#fff",
                            "isNoTitle": true,
                            "nameColorY": "#fff",
                            "nameColorX": "#fff",
                            "textFontWeight": "normal",
                            "nameX": "",
                            "titleText": "",
                            "tipsFontSize": 16,
                            "layoutFront": "horizontal",
                            "legendColor": "#fff",
                            "isShowY": true,
                            "splitLineWidthY": 1,
                            "fontWeight": "normal",
                            "splitLineWidthX": 1,
                            "area": true,
                            "textRowsNum": "",
                            "textAngleX": 0,
                            "textAngleY": 0,
                            "textAlign": "center",
                            "subTextColor": "rgba(30, 144, 255, 1)",
                            "textColor": "#FFD700",
                            "subText": "",
                            "lineColorY": "#fff",
                            "lineColorX": "#fff",
                            "textNameY": "",
                            "marginLeft": 10,
                            "subTextFontSize": 20,
                            "tipsColor": "#00FEFF",
                            "background": "",
                            "fontSize": 14,
                            "marginBottom": 10,
                            "layerName": "折线堆叠图",
                            "textRowsBreakAuto": false,
                            "hideX": true,
                            "verticalShow": false,
                            "scale": false,
                            "isShowSplitLineX": false,
                            "lineWidth": 4,
                            "isShowSplitLineY": false,
                            "subTextFontStyle": "normal",
                            "splitLineColorY": "#fff",
                            "areaThickness": 5,
                            "splitLineColorX": "#fff",
                            "legendWidth": 12,
                            "splitNumberY": "",
                            "smoothCurve": true,
                            "fontSizeY": 14,
                            "fontSizeX": 14,
                            "widgetId": "1ixzimkfud1",
                            "colorY": "#fff",
                            "colorX": "#fff",
                            "nameFontSizeX": 14,
                            "markPoint": true,
                            "nameFontSizeY": 14,
                            "isShow": false,
                            "textFontSize": 20,
                            "pointSize": 5,
                            "customColor": [
                                {
                                    "color": "#ff7f50"
                                },
                                {
                                    "color": "#87cefa"
                                },
                                {
                                    "color": "#da70d6"
                                },
                                {
                                    "color": "#32cd32"
                                },
                                {
                                    "color": "#6495ed"
                                }
                            ],
                            "longitudinalPosition": "top",
                            "subTextFontWeight": "normal",
                            "lineWidthX": 1,
                            "lineWidthY": 1,
                            "legendFontSize": 12,
                            "isShowLegend": true,
                            "widgetCode": "widgetLineStackChart",
                            "legendName": "",
                            "marginTop": 50
                        },
                        "data": {
                            "dynamicData": {},
                            "dataType": "staticData",
                            "refreshTime": 600000,
                            "staticData": [
                                {
                                    "data": "12",
                                    "name": "A",
                                    "axis": "2021-07-25"
                                },
                                {
                                    "data": "20",
                                    "name": "B",
                                    "axis": "2021-07-25"
                                },
                                {
                                    "data": "5",
                                    "name": "B",
                                    "axis": "2021-07-26"
                                },
                                {
                                    "data": "15",
                                    "name": "A",
                                    "axis": "2021-07-27"
                                },
                                {
                                    "data": "30",
                                    "name": "B",
                                    "axis": "2021-07-27"
                                }
                            ]
                        },
                        "collapse": {},
                        "position": {
                            "top": 229.72349974089764,
                            "left": 340.05697436012974,
                            "width": 500,
                            "height": 250,
                            "zIndex": 0
                        },
                        "options": null,
                        "refreshSeconds": null,
                        "enableFlag": null,
                        "deleteFlag": null,
                        "sort": null
                    },
                    "options": {
                        "data": [
                            {
                                "selectValue": true,
                                "selectOptions": [
                                    {
                                        "code": "staticData",
                                        "name": "静态数据"
                                    },
                                    {
                                        "code": "dynamicData",
                                        "name": "动态数据"
                                    }
                                ],
                                "name": "dataType",
                                "require": false,
                                "label": "数据类型",
                                "placeholder": "",
                                "type": "el-radio-group",
                                "value": "staticData"
                            },
                            {
                                "relactiveDom": "dataType",
                                "relactiveDomValue": "dynamicData",
                                "name": "refreshTime",
                                "label": "刷新时间(毫秒)",
                                "type": "el-input-number",
                                "value": 600000
                            },
                            {
                                "relactiveDom": "dataType",
                                "relactiveDomValue": "staticData",
                                "name": "staticData",
                                "label": "静态数据",
                                "placeholder": "",
                                "type": "el-button",
                                "value": [
                                    {
                                        "data": "12",
                                        "name": "A",
                                        "axis": "2021-07-25"
                                    },
                                    {
                                        "data": "20",
                                        "name": "B",
                                        "axis": "2021-07-25"
                                    },
                                    {
                                        "data": "5",
                                        "name": "B",
                                        "axis": "2021-07-26"
                                    },
                                    {
                                        "data": "15",
                                        "name": "A",
                                        "axis": "2021-07-27"
                                    },
                                    {
                                        "data": "30",
                                        "name": "B",
                                        "axis": "2021-07-27"
                                    }
                                ],
                                "required": false
                            },
                            {
                                "relactiveDom": "dataType",
                                "relactiveDomValue": "dynamicData",
                                "name": "dynamicData",
                                "chartType": "widget-stackchart",
                                "label": "",
                                "placeholder": "",
                                "type": "dycustComponents",
                                "dictKey": "STACK_PROPERTIES",
                                "value": "",
                                "required": false
                            }
                        ],
                        "setup": [
                            {
                                "name": "layerName",
                                "label": "图层名称",
                                "placeholder": "",
                                "type": "el-input-text",
                                "value": "折线堆叠图",
                                "required": false
                            },
                            {
                                "name": "verticalShow",
                                "label": "竖展示",
                                "placeholder": "",
                                "type": "el-switch",
                                "value": false,
                                "required": false
                            },
                            {
                                "name": "background",
                                "label": "背景颜色",
                                "placeholder": "",
                                "type": "vue-color",
                                "value": "",
                                "required": false
                            },
                            [
                                {
                                    "name": "折线设置",
                                    "list": [
                                        {
                                            "name": "markPoint",
                                            "label": "标记点",
                                            "placeholder": "",
                                            "type": "el-switch",
                                            "value": true,
                                            "required": false
                                        },
                                        {
                                            "name": "pointSize",
                                            "label": "点大小",
                                            "placeholder": "",
                                            "type": "el-slider",
                                            "value": 5,
                                            "required": false
                                        },
                                        {
                                            "selectOptions": [
                                                {
                                                    "code": "circle",
                                                    "name": "实心点"
                                                },
                                                {
                                                    "code": "emptyCircle",
                                                    "name": "空心点"
                                                }
                                            ],
                                            "name": "symbol",
                                            "label": "点样式",
                                            "placeholder": "",
                                            "type": "el-select",
                                            "value": "circle",
                                            "required": false
                                        },
                                        {
                                            "name": "smoothCurve",
                                            "label": "平滑曲线",
                                            "placeholder": "",
                                            "type": "el-switch",
                                            "value": true,
                                            "required": false
                                        },
                                        {
                                            "name": "area",
                                            "label": "面积堆积",
                                            "placeholder": "",
                                            "type": "el-switch",
                                            "value": true,
                                            "required": false
                                        },
                                        {
                                            "name": "areaThickness",
                                            "label": "面积厚度",
                                            "placeholder": "",
                                            "type": "el-slider",
                                            "value": 5,
                                            "required": false
                                        },
                                        {
                                            "name": "lineWidth",
                                            "label": "线条宽度",
                                            "placeholder": "",
                                            "type": "el-slider",
                                            "value": 4,
                                            "required": false
                                        }
                                    ]
                                },
                                {
                                    "name": "标题设置",
                                    "list": [
                                        {
                                            "name": "isNoTitle",
                                            "label": "标题显示",
                                            "placeholder": "",
                                            "type": "el-switch",
                                            "value": true,
                                            "required": false
                                        },
                                        {
                                            "name": "titleText",
                                            "label": "标题名",
                                            "placeholder": "",
                                            "type": "el-input-text",
                                            "value": "",
                                            "required": false
                                        },
                                        {
                                            "name": "textColor",
                                            "label": "字体颜色",
                                            "placeholder": "",
                                            "type": "vue-color",
                                            "value": "#FFD700",
                                            "required": false
                                        },
                                        {
                                            "name": "textFontSize",
                                            "label": "字体字号",
                                            "placeholder": "",
                                            "type": "el-input-number",
                                            "value": 20,
                                            "required": false
                                        },
                                        {
                                            "selectOptions": [
                                                {
                                                    "code": "normal",
                                                    "name": "正常"
                                                },
                                                {
                                                    "code": "bold",
                                                    "name": "粗体"
                                                },
                                                {
                                                    "code": "bolder",
                                                    "name": "特粗体"
                                                },
                                                {
                                                    "code": "lighter",
                                                    "name": "细体"
                                                }
                                            ],
                                            "name": "textFontWeight",
                                            "label": "字体粗细",
                                            "placeholder": "",
                                            "type": "el-select",
                                            "value": "normal",
                                            "required": false
                                        },
                                        {
                                            "selectOptions": [
                                                {
                                                    "code": "normal",
                                                    "name": "正常"
                                                },
                                                {
                                                    "code": "italic",
                                                    "name": "italic斜体"
                                                },
                                                {
                                                    "code": "oblique",
                                                    "name": "oblique斜体"
                                                }
                                            ],
                                            "name": "textFontStyle",
                                            "label": "字体风格",
                                            "placeholder": "",
                                            "type": "el-select",
                                            "value": "normal",
                                            "required": false
                                        },
                                        {
                                            "selectOptions": [
                                                {
                                                    "code": "center",
                                                    "name": "居中"
                                                },
                                                {
                                                    "code": "left",
                                                    "name": "左对齐"
                                                },
                                                {
                                                    "code": "right",
                                                    "name": "右对齐"
                                                }
                                            ],
                                            "name": "textAlign",
                                            "label": "字体位置",
                                            "placeholder": "",
                                            "type": "el-select",
                                            "value": "center",
                                            "required": false
                                        },
                                        {
                                            "name": "subText",
                                            "label": "副标题名",
                                            "placeholder": "",
                                            "type": "el-input-text",
                                            "value": "",
                                            "required": false
                                        },
                                        {
                                            "name": "subTextColor",
                                            "label": "字体颜色",
                                            "placeholder": "",
                                            "type": "vue-color",
                                            "value": "rgba(30, 144, 255, 1)",
                                            "required": false
                                        },
                                        {
                                            "name": "subTextFontSize",
                                            "label": "字体字号",
                                            "placeholder": "",
                                            "type": "el-input-number",
                                            "value": 20,
                                            "required": false
                                        },
                                        {
                                            "selectOptions": [
                                                {
                                                    "code": "normal",
                                                    "name": "正常"
                                                },
                                                {
                                                    "code": "bold",
                                                    "name": "粗体"
                                                },
                                                {
                                                    "code": "bolder",
                                                    "name": "特粗体"
                                                },
                                                {
                                                    "code": "lighter",
                                                    "name": "细体"
                                                }
                                            ],
                                            "name": "subTextFontWeight",
                                            "label": "字体粗细",
                                            "placeholder": "",
                                            "type": "el-select",
                                            "value": "normal",
                                            "required": false
                                        },
                                        {
                                            "selectOptions": [
                                                {
                                                    "code": "normal",
                                                    "name": "正常"
                                                },
                                                {
                                                    "code": "italic",
                                                    "name": "italic斜体"
                                                },
                                                {
                                                    "code": "oblique",
                                                    "name": "oblique斜体"
                                                }
                                            ],
                                            "name": "subTextFontStyle",
                                            "label": "字体风格",
                                            "placeholder": "",
                                            "type": "el-select",
                                            "value": "normal",
                                            "required": false
                                        }
                                    ]
                                },
                                {
                                    "name": "图例操作",
                                    "list": [
                                        {
                                            "name": "isShowLegend",
                                            "label": "图例显示",
                                            "placeholder": "",
                                            "type": "el-switch",
                                            "value": true,
                                            "required": false
                                        },
                                        {
                                            "name": "legendName",
                                            "label": "名称( | 分隔)",
                                            "placeholder": 0,
                                            "type": "el-input-text",
                                            "value": "",
                                            "required": false
                                        },
                                        {
                                            "name": "legendColor",
                                            "label": "字体颜色",
                                            "placeholder": "",
                                            "type": "vue-color",
                                            "value": "#fff",
                                            "required": false
                                        },
                                        {
                                            "name": "legendFontSize",
                                            "label": "字体字号",
                                            "placeholder": "",
                                            "type": "el-input-number",
                                            "value": 12,
                                            "required": false
                                        },
                                        {
                                            "name": "legendWidth",
                                            "label": "图例宽度",
                                            "placeholder": "",
                                            "type": "el-input-number",
                                            "value": 12,
                                            "required": false
                                        },
                                        {
                                            "selectOptions": [
                                                {
                                                    "code": "center",
                                                    "name": "居中"
                                                },
                                                {
                                                    "code": "left",
                                                    "name": "左对齐"
                                                },
                                                {
                                                    "code": "right",
                                                    "name": "右对齐"
                                                }
                                            ],
                                            "name": "lateralPosition",
                                            "label": "横向位置",
                                            "placeholder": "",
                                            "type": "el-select",
                                            "value": "center",
                                            "required": false
                                        },
                                        {
                                            "selectOptions": [
                                                {
                                                    "code": "top",
                                                    "name": "顶部"
                                                },
                                                {
                                                    "code": "bottom",
                                                    "name": "底部"
                                                }
                                            ],
                                            "name": "longitudinalPosition",
                                            "label": "纵向位置",
                                            "placeholder": "",
                                            "type": "el-select",
                                            "value": "top",
                                            "required": false
                                        },
                                        {
                                            "selectOptions": [
                                                {
                                                    "code": "vertical",
                                                    "name": "竖排"
                                                },
                                                {
                                                    "code": "horizontal",
                                                    "name": "横排"
                                                }
                                            ],
                                            "name": "layoutFront",
                                            "label": "布局前置",
                                            "placeholder": "",
                                            "type": "el-select",
                                            "value": "horizontal",
                                            "required": false
                                        }
                                    ]
                                },
                                {
                                    "name": "X轴设置",
                                    "list": [
                                        {
                                            "name": "hideX",
                                            "label": "显示",
                                            "placeholder": "",
                                            "type": "el-switch",
                                            "value": true,
                                            "required": false
                                        },
                                        {
                                            "name": "nameX",
                                            "label": "坐标名",
                                            "placeholder": "",
                                            "type": "el-input-text",
                                            "value": "",
                                            "required": false
                                        },
                                        {
                                            "name": "nameColorX",
                                            "label": "坐标名颜色",
                                            "placeholder": "",
                                            "type": "vue-color",
                                            "value": "#fff",
                                            "required": false
                                        },
                                        {
                                            "name": "nameFontSizeX",
                                            "label": "坐标名字号",
                                            "placeholder": "",
                                            "type": "el-input-number",
                                            "value": 14,
                                            "required": false
                                        },
                                        {
                                            "name": "colorX",
                                            "label": "数值颜色",
                                            "placeholder": "",
                                            "type": "vue-color",
                                            "value": "#fff",
                                            "required": false
                                        },
                                        {
                                            "name": "fontSizeX",
                                            "label": "数值字号",
                                            "placeholder": "",
                                            "type": "el-input-number",
                                            "value": 14,
                                            "required": false
                                        },
                                        {
                                            "name": "textRowsBreakAuto",
                                            "label": "数值自动换行",
                                            "placeholder": "",
                                            "type": "el-switch",
                                            "value": false,
                                            "required": false
                                        },
                                        {
                                            "name": "textRowsNum",
                                            "label": "数值行数",
                                            "placeholder": "",
                                            "type": "el-input-text",
                                            "value": "",
                                            "required": false
                                        },
                                        {
                                            "name": "textInterval",
                                            "label": "数值间隔",
                                            "placeholder": "",
                                            "type": "el-input-number",
                                            "value": "",
                                            "required": false
                                        },
                                        {
                                            "name": "textAngleX",
                                            "label": "数值角度",
                                            "placeholder": "",
                                            "type": "el-slider",
                                            "value": 0,
                                            "required": false
                                        },
                                        {
                                            "name": "reversalX",
                                            "label": "坐标轴反转",
                                            "placeholder": "",
                                            "type": "el-switch",
                                            "value": false,
                                            "required": false
                                        },
                                        {
                                            "name": "lineColorX",
                                            "label": "坐标轴颜色",
                                            "placeholder": "",
                                            "type": "vue-color",
                                            "value": "#fff",
                                            "required": false
                                        },
                                        {
                                            "name": "lineWidthX",
                                            "label": "坐标轴宽度",
                                            "placeholder": "",
                                            "type": "el-input-number",
                                            "value": 1,
                                            "required": false
                                        },
                                        {
                                            "name": "isShowSplitLineX",
                                            "require": false,
                                            "label": "分割线显示",
                                            "placeholder": "",
                                            "type": "el-switch",
                                            "value": false
                                        },
                                        {
                                            "name": "splitLineColorX",
                                            "label": "分割线颜色",
                                            "placeholder": "",
                                            "type": "vue-color",
                                            "value": "#fff",
                                            "required": false
                                        },
                                        {
                                            "name": "splitLineWidthX",
                                            "label": "分割线宽度",
                                            "placeholder": "",
                                            "type": "el-input-number",
                                            "value": 1,
                                            "required": false
                                        }
                                    ]
                                },
                                {
                                    "name": "Y轴设置",
                                    "list": [
                                        {
                                            "name": "isShowY",
                                            "require": false,
                                            "label": "显示",
                                            "placeholder": "",
                                            "type": "el-switch",
                                            "value": true
                                        },
                                        {
                                            "name": "textNameY",
                                            "require": false,
                                            "label": "坐标名",
                                            "placeholder": "",
                                            "type": "el-input-text",
                                            "value": ""
                                        },
                                        {
                                            "name": "nameColorY",
                                            "label": "坐标名颜色",
                                            "placeholder": "",
                                            "type": "vue-color",
                                            "value": "#fff",
                                            "required": false
                                        },
                                        {
                                            "name": "nameFontSizeY",
                                            "label": "坐标名字号",
                                            "placeholder": "",
                                            "type": "el-input-number",
                                            "value": 14,
                                            "required": false
                                        },
                                        {
                                            "name": "colorY",
                                            "label": "数值颜色",
                                            "placeholder": "",
                                            "type": "vue-color",
                                            "value": "#fff",
                                            "required": false
                                        },
                                        {
                                            "name": "fontSizeY",
                                            "label": "数值字号",
                                            "placeholder": "",
                                            "type": "el-input-number",
                                            "value": 14,
                                            "required": false
                                        },
                                        {
                                            "name": "scale",
                                            "require": false,
                                            "label": "缩放",
                                            "placeholder": "",
                                            "type": "el-switch",
                                            "value": false
                                        },
                                        {
                                            "name": "splitNumberY",
                                            "label": "均分",
                                            "placeholder": "",
                                            "type": "el-input-number",
                                            "value": "",
                                            "required": false
                                        },
                                        {
                                            "name": "textAngleY",
                                            "label": "数值角度",
                                            "placeholder": "",
                                            "type": "el-slider",
                                            "value": 0,
                                            "required": false
                                        },
                                        {
                                            "name": "reversalY",
                                            "label": "坐标轴反转",
                                            "placeholder": "",
                                            "type": "el-switch",
                                            "value": false,
                                            "required": false
                                        },
                                        {
                                            "name": "lineColorY",
                                            "label": "坐标轴颜色",
                                            "placeholder": "",
                                            "type": "vue-color",
                                            "value": "#fff",
                                            "required": false
                                        },
                                        {
                                            "name": "lineWidthY",
                                            "label": "坐标轴宽度",
                                            "placeholder": "",
                                            "type": "el-input-number",
                                            "value": 1,
                                            "required": false
                                        },
                                        {
                                            "name": "isShowSplitLineY",
                                            "require": false,
                                            "label": "分割线显示",
                                            "placeholder": "",
                                            "type": "el-switch",
                                            "value": false
                                        },
                                        {
                                            "name": "splitLineColorY",
                                            "label": "分割线颜色",
                                            "placeholder": "",
                                            "type": "vue-color",
                                            "value": "#fff",
                                            "required": false
                                        },
                                        {
                                            "name": "splitLineWidthY",
                                            "label": "分割线宽度",
                                            "placeholder": "",
                                            "type": "el-input-number",
                                            "value": 1,
                                            "required": false
                                        }
                                    ]
                                },
                                {
                                    "name": "数值设定",
                                    "list": [
                                        {
                                            "name": "isShow",
                                            "label": "显示",
                                            "placeholder": "",
                                            "type": "el-switch",
                                            "value": false,
                                            "required": false
                                        },
                                        {
                                            "name": "percentSign",
                                            "label": "百分比符号显示",
                                            "placeholder": "",
                                            "type": "el-switch",
                                            "value": false,
                                            "required": false
                                        },
                                        {
                                            "name": "fontSize",
                                            "label": "字体字号",
                                            "placeholder": "",
                                            "type": "el-input-number",
                                            "value": 14,
                                            "required": false
                                        },
                                        {
                                            "name": "dataColor",
                                            "label": "字体颜色",
                                            "placeholder": "",
                                            "type": "vue-color",
                                            "value": "#fff",
                                            "required": false
                                        },
                                        {
                                            "selectOptions": [
                                                {
                                                    "code": "normal",
                                                    "name": "正常"
                                                },
                                                {
                                                    "code": "bold",
                                                    "name": "粗体"
                                                },
                                                {
                                                    "code": "bolder",
                                                    "name": "特粗体"
                                                },
                                                {
                                                    "code": "lighter",
                                                    "name": "细体"
                                                }
                                            ],
                                            "name": "fontWeight",
                                            "label": "字体粗细",
                                            "placeholder": "",
                                            "type": "el-select",
                                            "value": "normal",
                                            "required": false
                                        }
                                    ]
                                },
                                {
                                    "name": "提示语设置",
                                    "list": [
                                        {
                                            "name": "tipsFontSize",
                                            "label": "字体字号",
                                            "placeholder": "",
                                            "type": "el-input-number",
                                            "value": 16,
                                            "required": false
                                        },
                                        {
                                            "name": "tipsColor",
                                            "label": "字体颜色",
                                            "placeholder": "",
                                            "type": "vue-color",
                                            "value": "#00FEFF",
                                            "required": false
                                        }
                                    ]
                                },
                                {
                                    "name": "坐标轴边距设置",
                                    "list": [
                                        {
                                            "name": "marginLeft",
                                            "label": "左边距(像素)",
                                            "placeholder": "",
                                            "type": "el-slider",
                                            "value": 10,
                                            "required": false
                                        },
                                        {
                                            "name": "marginTop",
                                            "label": "顶边距(像素)",
                                            "placeholder": "",
                                            "type": "el-slider",
                                            "value": 50,
                                            "required": false
                                        },
                                        {
                                            "name": "marginRight",
                                            "label": "右边距(像素)",
                                            "placeholder": "",
                                            "type": "el-slider",
                                            "value": 40,
                                            "required": false
                                        },
                                        {
                                            "name": "marginBottom",
                                            "label": "底边距(像素)",
                                            "placeholder": "",
                                            "type": "el-slider",
                                            "value": 10,
                                            "required": false
                                        }
                                    ]
                                },
                                {
                                    "name": "自定义配色",
                                    "list": [
                                        {
                                            "name": "customColor",
                                            "label": "",
                                            "type": "customColor",
                                            "value": [
                                                {
                                                    "color": "#ff7f50"
                                                },
                                                {
                                                    "color": "#87cefa"
                                                },
                                                {
                                                    "color": "#da70d6"
                                                },
                                                {
                                                    "color": "#32cd32"
                                                },
                                                {
                                                    "color": "#6495ed"
                                                }
                                            ],
                                            "required": false
                                        }
                                    ]
                                }
                            ]
                        ],
                        "position": [
                            {
                                "name": "left",
                                "label": "左边距",
                                "placeholder": "",
                                "type": "el-input-number",
                                "value": 0,
                                "required": false
                            },
                            {
                                "name": "top",
                                "label": "上边距",
                                "placeholder": "",
                                "type": "el-input-number",
                                "value": 0,
                                "required": false
                            },
                            {
                                "name": "width",
                                "label": "宽度",
                                "placeholder": "该容器在1920px大屏中的宽度",
                                "type": "el-input-number",
                                "value": 500,
                                "required": false
                            },
                            {
                                "name": "height",
                                "label": "高度",
                                "placeholder": "该容器在1080px大屏中的高度",
                                "type": "el-input-number",
                                "value": 250,
                                "required": false
                            }
                        ]
                    }
                }
            ],
            "accessKey": "85c7e01a42ff8bb247e7936804595d67"
        },
        "widgets": null
    }
}