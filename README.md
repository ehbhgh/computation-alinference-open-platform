### 一.项目介绍

计算推演平台能力开放与交互服务采用分层解耦的微服务架构，分为**操作层、服务层**和**数据层**三层。基于统一引擎组件服务能力，结合搭建出的**仿真模型**和**仿真场景**的能力，提供主配一体化的电气拓扑、一张图的潮流、企业发展的未来态势和发展趋势等各类专业服务能力和应用工具的统一展示，形成**数字可描述、可观测及可推演**的统一展示交互入口。

### 二.项目环境

```
node v12.16.3
```

### 三.项目构建

#### 3.1运行

```
yarn 
yarn start
```
#### 3.2打包

```
yarn
yarn build:prod
```
### 四.项目技术
- [npm](https://www.npmjs.com/)：node.js的包管理工具，用于统一管理我们前端项目中需要用到的包、插件、工具、命令等，便于开发和维护。
- [webpack](https://webpack.docschina.org/)：用于现代 JavaScript 应用程序的_静态模块打包工具
- [ES6](https://es6.ruanyifeng.com/)：Javascript的新版本，ECMAScript6的简称。利用ES6我们可以简化我们的JS代码，同时利用其提供的强大功能来快速实现JS逻辑。
- [vue-cli](https://cli.vuejs.org/)：Vue的脚手架工具，用于自动生成Vue项目的目录及文件。
- [vue-router](https://router.vuejs.org/)： Vue提供的前端路由工具，利用其实现页面的路由控制，局部刷新及按需加载，构建单页应用，实现前后端分离。
- [vuex](https://vuex.vuejs.org/zh/guide/)：Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库，它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
- [element-ui](https://element.eleme.cn/#/zh-CN)：基于MVVM框架Vue开源出来的一套前端ui组件。
- [avue](https://www.avuejs.com/): 用该组件包裹后可以变成拖拽组件,采用相对于父类绝对定位;用键盘的上下左右也可以控制移动
- [vue-echarts](https://www.npmjs.com/package/vue-echarts/): vue-echarts是封装后的vue插件,基于 ECharts v4.0.1+ 开发
- [vue-superslide](https://www.npmjs.com/package/vue-super-slider/): Vue-SuperSlide(Github) 是 SuperSlide 的 Vue 封装版本
- [vuedraggable](https://github.com/SortableJS/Vue.Draggable/): 是一款基于Sortable.js实现的vue拖拽插件。
- [Antv X6](https://x6.antv.antgroup.com/)：是基于 HTML 和 SVG 的图编辑引擎，提供低成本的定制能力和开箱即用的内置扩展，方便我们快速搭建 DAG 图、ER 图、SIMULINK图、血缘图等应用.
- [思极地图](https://map.sgcc.com.cn/products/epgis_portals/index.html#/)：提供国网内网开发地图应用,对标互联网地图服务，提供便捷的二次开发支撑

### 五.项目目录

####  5.1目录结构

├── build （webpack配置层）

```
webpack.base.conf.js(公共配置)  
webpack.dev.conf.js(生产配置)
|webpack.pro.conf.js(开发配置)
```

├── config （config启动环境配置层）

```
index.js(公共配置) 
dev.env.js(生产配置)
prod.env.js(开发配置)
```

├── node_modules （依赖包）

├── src （主文件）

```
api(api层，用于api的封装，可查看到请求方式请求体)
assets（文件层，用于放置css,图片，iconfont等文件）
auth(权限管理层，处理各种权限的文件层)
components(组件层，用于放置封装的组件)
db（模拟数据层，mock数据）
layout(布局文件，组件层，用于存放布局组件)
mixins(混合api层，用于各组件间公共api的统一管理)
router(路由层，用于路由跳转)
service(封装的axios请求层，用于处理各种请求于拦截器处理)
store(Vuex数据状态管理方式，存放公共数据)
utils(用于放置自定义封装的各种js工具插件)
views(视图层组件，用于放置展示视图的组件)
App.vue（app的主文件，根组件）
main.js（全局入口文件）
```

├── static(静态文件，不会打包进webpack)

├──  index.html(模板文件)

├──  package.json(依赖包管理文件)

#### 5.2布局组件目录

```
├── layout

│ ├── nav(文件夹) 递归树组件

│ ├── main(文件夹) 占位组件

│ ├── breadcrumb(文件夹) 面包屑组件

│ ├── dropMenu 菜单栏组件
```

#### 5.3可视化组件目录

```
├── screenDesigner

│ ├── components(文件夹) 公共组件目录

│ ├── config(文件夹) 配置 json

│ │ ├── barCharts(文件夹) (柱状图)

│ │ ├── decorateCharts(文件夹) (装饰图)

│ │ ├── funnelCharts(文件夹) (漏斗图)

│ │ ├── heatmap(文件夹) (热力图)

│ │ ├── lineCharts(文件夹) (折线图)

│ │ ├── mapCharts(文件夹) (地图)

│ │ ├── percentCharts(文件夹) (百分百图)

│ │ ├── pieCharts(文件夹) (饼图)

│ │ ├── texts(文件夹) (文本、滚动文本、超链接、当前时间、图片、视频、表格、内联框架)

│ ├── layout(文件夹)

│ │ ├── left.vue 大屏左侧工具栏

│ │ ├── middle.vue 大屏中间配置

│ │ ├── right.vue 大屏右侧配置

│ ├── util(文件夹) 公共 js

│ ├── widget(文件夹) 图表组件

│ │ ├── barCharts(文件夹) (柱状图)

│ │ ├── decorateCharts(文件夹) (装饰图)

│ │ ├── funnelCharts(文件夹) (漏斗图)

│ │ ├── heatmap(文件夹) (热力图)

│ │ ├── lineCharts(文件夹) (折线图)

│ │ ├── mapCharts(文件夹) (地图)

│ │ ├── percentCharts(文件夹) (百分百图)

│ │ ├── pieCharts(文件夹) (饼图)

│ │ ├── texts(文件夹) (文本、滚动文本、超链接、当前时间、图片、视频、表格、内联框架)

│ ├── index.vue 大屏设计器

│ ├── preview.vue 预览大屏
```



