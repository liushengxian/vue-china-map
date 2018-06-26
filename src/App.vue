<template>
  <div id="app">
    <ChinaMap :width="800" :height="600" @click="handleClick" ref="chinamap" />
    <Alert v-if="alertBoxShow" @confirm="modifyData" @cancel="cancel" :listData=currentProvinceData />
  </div>
</template>

<script>
import ChinaMap from "./components/ChinaMap";
import Alert from "./components/Alert";

export default {
  name: "App",
  components: {
    ChinaMap,
    Alert
  },
  data() {
    return {
      alertBoxShow: false,
      currentProvinceData: [],
      subFeatureIndex: 0
    };
  },
  mounted() {
    console.log("mounted!");
  },
  methods: {
    handleClick(properties, childrenCities) {
      this.alertBoxShow = true;
      this.currentProvinceData = childrenCities;
      this.subFeatureIndex = properties.subFeatureIndex;
    },
    modifyData(data) {
      console.log(data, "modifyData");
      //deep copy.
      this.$refs.chinamap.setData(data, this.subFeatureIndex);
      this.alertBoxShow = false;
    },
    cancel() {
      this.alertBoxShow = false;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}
</style>
