<template>
  <div class="alertBox">
    <h2 class="box-header">到过的城市</h2>
    <div class="box-content">
      <ul>
        <li v-for="item in listData" @click="handleClick(item)" :class="{'selected':item.selected}">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="box-actions">
      <div class="box-button" @click="confirm">确认</div>
      <!-- <div @click="cancel">取消</div> -->
    </div>
  </div>
</template>
<script>
export default {
  props: ["listData"],
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    handleClick(item) {
      // item.selected = true;
      this.$set(item, "selected", !item.selected);
    },
    confirm() {
      this.$emit("confirm", this.listData);
    },
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>
<style scoped>
.alertBox {
  position: absolute;
  width: 300px;
  height: 200px;
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid black;
  border-radius: 8px;
  top: 200px;
  left: 50%;
  margin-left: -150px;
  box-shadow: 1px;
  padding: 20px;
}

h2.box-header {
  font-size: 22px;
}

.box-content {
}

.box-content ul {
  margin: 0;
  padding: 0;
}

.box-content ul li {
  list-style-type: none;
  display: inline-block;
  border: 1px solid gainsboro;
  cursor: pointer;
}

.box-content ul li:hover {
}

.box-actions {
}

.box-actions .box-button {
  border: 1px solid #333333;
  border-radius: 5px;
}
.box-actions .box-button:hover {
  background: #333333;
  color: #fff;
}

.selected {
  color: red;
  background: black;
}
</style>

