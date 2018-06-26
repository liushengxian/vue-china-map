<template>
    <div class="china-map" id="china-map" :style="`width:${width}px; height:${height}px;`">地图渲染失败！</div>
</template>
<script>
import Highcharts from "./china";
import citylist from "./citylist";
import { findCities } from "./utils";

console.log(citylist, "citylist");
export default {
  props: ["width", "height"],
  data() {
    return {
      title: "ChinaMap",
      footData: [],
      map: null
    };
  },
  mounted() {
    var chinaData = Highcharts.maps["cn/china"];

    this.footData = citylist.map(val => {
      return {name: val.name, value: 0 };
    })

    this.map = new Highcharts.Map("china-map", {
      title: {
        text: "旅行地图 - China"
      },
      colorAxis: {
        min: 0,
        max: 20,
        minColor: "rgb(255,255,255)",
        maxColor: "#006cee"
      },
      series: [
        {
          data: this.footData,
          name: "去过的城市",
          mapData: Highcharts.maps["cn/china"],
          joinBy: "name" // 根据 name 属性进行关联
        }
      ],
      credits:{
        enabled: false,
      }
    });

    Highcharts.addEvent(document.getElementById("china-map"), "click", e => {
      if (e.target.nodeName !== "path") return;
      var properties = e.target.point.properties;
      //在这里发送相关的事件
      this.$emit('click', properties, findCities(citylist,properties.filename).chidren);
    });
  },
  methods:{
    setData(data,index){
      var value = data.reduce((sum,val)=>{
        return sum + (val.selected?1:0)
      },0);

      console.log('value: ',value,index);

      this.footData[index].value = value?value:null;

      this.map.series[0].update([ ...this.footData],true);
      // this.map.redraw();
    }
  }
};
</script>
<style scoped>
</style>
