<!--
 * @Description: 
 * @Author: Wang Su
 * @Date: 2024-01-09 15:49:21
 * @LastEditors: Wang Su
 * @LastEditTime: 2024-01-10 17:29:24
-->
<template>
  <div class="map">
    <div class="serach">
      <map-search
        @share_id="shareId"
        @input_val="inputVal"
        @select_val="selectVal"
      />
    </div>
    <div id="container"></div>
  </div>
</template>
<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import mapSearch from "../mapSearch/index.vue";
window._AMapSecurityConfig = {
  securityJsCode: "e3a924a19587ffe88c620e4a6da87bc3",
};
export default {
  name: "mapContainer",
  components: { mapSearch },
  mixins: [],
  props: {},
  data() {
    return {
      map: null,
      autoOptions: {
        input: "",
      },
      auto: null,
      placeSearch: null,
      searchPlaceInput: "",
      district: null,
      areaVal: "",
      polygons: [],
      positions: [
        {
          cityName: "高淳区",
          dot: [118.874, 31.327],
          num: 3123,
        },
        {
          cityName: "溧水区",
          dot: [119.028, 31.651],
          num: 1203,
        },
        {
          cityName: "江宁区",
          dot: [118.85, 31.953],
          num: 718,
        },
        {
          cityName: "六合区",
          dot: [118.821, 32.34],
          num: 937,
        },
        {
          cityName: "雨花台区",
          dot: [118.778, 31.995],
          num: 1123,
        },
        {
          cityName: "栖霞区",
          dot: [118.909, 32.13],
          num: 123,
        },
        {
          cityName: "玄武区",
          dot: [118.79772, 32.04856],
          num: 1874,
        },
        {
          cityName: "秦淮区",
          dot: [118.79815, 32.01112],
          num: 1090,
        },
        {
          cityName: "建邺区",
          dot: [118.732, 32.018],
          num: 1322,
        },
        {
          cityName: "鼓楼区",
          dot: [118.769, 32.072],
          num: 123,
        },
        {
          cityName: "浦口区",
          dot: [118.628, 32.058],
          num: 3210,
        },
      ],
      //点标记
      viaMarker: null,
      //地图配置
      mapConfig: {
        key: "d27d71e962d2ddbfcea15089cddca22c", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [
          "AMap.AutoComplete",
          "AMap.PlaceSearch",
          "AMap.Geocoder",
          "AMap.DistrictSearch",
        ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      },
      // 实例化DistrictSearch配置
      districtSearchOpt: {
        subdistrict: 0, //获取边界不需要返回下级行政区
        extensions: "all", //返回行政区边界坐标组等具体信息
        level: "district", //查询行政级别为 市
      },
    };
  },
  computed: {},
  watch: {
    searchPlaceInput(newValue) {
      if (newValue != null) {
        this.queryArea(newValue);
        this.setZoom(10);
      }
    },
    areaVal(newValue) {
      if (newValue.length != 0) {
        let val = newValue[newValue.length - 1];
        this.queryArea(val);
        this.setZoom(10);
      } else {
        this.queryArea("南京市");
        this.setZoom(10);
      }
    },
  },
  mounted() {
    this.initMap();
  },
  created() {},
  methods: {
    //结合输入提示进行POI搜索
    shareId(val) {
      this.autoOptions.input = val;
    },
    //直接POI搜索
    inputVal(val) {
      this.searchPlaceInput = val;
    },
    //区域搜索
    selectVal(val) {
      this.areaVal = val;
    },
    //初始化地图
    async initMap() {
      let AMap = await AMapLoader.load(this.mapConfig);
      this.map = new AMap.Map("container", {
        //设置地图容器id
        viewMode: "2D", //是否为3D地图模式
        zoom: 10, //初始化地图级别
        mapStyle: "amap://styles/whitesmoke", //设置地图的显示样式
        center: [118.796877, 32.060255], //初始化地图中心点位置
      });
      //poi查询
      this.queryPoI(AMap);
      // 新增海量marker
      this.addLotMarker(AMap);
    },
    //加载插件
    loadPlugin(AMap) {
      this.map.addControl(new AMap.Scale());
      this.map.addControl(new AMap.ToolBar());
      this.map.addControl(new AMap.Geolocation());
    },
    //添加海量marker
    addLotMarker(AMap) {
      this.map.on("complete", () => {
        // 创建 AMap.LabelsLayer 图层
        let layer = new AMap.LabelsLayer({
          zooms: [3, 20],
          zIndex: 1000,
          collision: false,
        });
        // 将图层添加到地图
        this.map.add(layer);
        // 普通点保存数组
        let markers = [];
        let icon = {
          type: "image",
          image: require("../img/icon.png"),
          size: [30, 30],
          anchor: "bottom-center",
        };
        this.positions.forEach((item) => {
          const text = {
            content: item.cityName + ":" + item.num + "台", //要展示的文字内容
            direction: "right", //文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
            offset: [-2, 5], //在 direction 基础上的偏移量
            //文字样式
            style: {
              fontSize: 12, //字体大小
              fillColor: "#22886f", //字体颜色
              strokeColor: "#fff", //描边颜色
              strokeWidth: 2, //描边宽度
            },
          };
          let labelMarker = new AMap.LabelMarker({
            position: item.dot,
            icon,
            text,
            rank: 1, //避让优先级
          });
          markers.push(labelMarker);
        });
        // 一次性将海量点添加到图层
        layer.add(markers);
        //注册点击事件
        this.map.on("click", (e) => {
          this.serachAreaCity(e, AMap);
        });
      });
    },
    //输入提示结合POI查询
    queryPoI(AMap) {
      this.auto = new AMap.AutoComplete(this.autoOptions);
      this.placeSearch = new AMap.PlaceSearch({
        map: this.map,
      }); //构造地点查询类
      this.auto.on("select", (e) => {
        this.queryArea(e.poi.name, e.poi.adcode);
        this.setZoom(5);
      });
    },
    //点击按钮POI查询数据
    queryArea(cityName, cityCode) {
      cityCode && this.placeSearch.setCity(cityCode);
      cityName && this.placeSearch.search(cityName); //关键字查询查询
    },
    //地图缩放
    setZoom(num) {
      this.map.setZoom(num, true, 1);
    },
    //新增market
    addMarket(AMap, lnglat) {
      if (this.viaMarker) {
        this.map.remove(this.viaMarker);
      }
      this.viaMarker = new AMap.Marker({
        position: lnglat,
        // 将一张图片的地址设置为 icon
        icon: require("../img/position.png"),
        // 设置了 icon 以后，设置 icon 的偏移量，以 icon 的 [center bottom] 为原点
        offset: new AMap.Pixel(-13, -30),
      });
      this.map.add(this.viaMarker);
    },
    //点击查询对应城市
    serachAreaCity(e, AMap) {
      let lngLat = e.lnglat;
      let geocoder = new AMap.Geocoder({
        city: "全国", //城市设为北京，默认：“全国
      });
      //新增点标记
      this.addMarket(AMap, lngLat);
      //逆地理编码查询
      this.serachLngLat(geocoder, lngLat);
    },
    //逆地理编码查询
    serachLngLat(geocoder, lngLat) {
      geocoder.getAddress(lngLat, (status, result) => {
        if (status === "complete" && result.regeocode) {
          let cityName = result.regeocode.formattedAddress;
          this.queryArea(cityName);
          this.setZoom(10);
        } else {
          log.error("根据经纬度查询地址失败");
        }
      });
    },
  },
  beforeDestory(){
     this.map && this.map.destroy();
  }
};
</script>
<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
  position: relative;
  #container {
    width: 100%;
    height: 100%;
  }
  .serach {
    position: absolute;
    z-index: 55;
    left: 20px;
    top: 40px;
  }
}
</style>
<style>
.amap-logo {
  right: 0 !important;
  left: auto !important;
  display: none !important;
}

.amap-copyright {
  right: 70px !important;
  left: auto !important;
  opacity: 0 !important;
}
</style>
