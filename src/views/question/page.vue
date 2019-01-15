<template>
  <div class="page">
    <div class="pageItem" v-for="n in total" :key="n">{{n}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  props: {
    total: Number
  }
};
</script>

<style scoped>
.page {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  background: white;
  margin: 20px 40px 20px 40px;
}

.pageItem {
  height: 40px;
  width: 40px;
  margin-right: 10px;
  font-size: 20px;
  color: #dce4ec;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}

.pageItem:hover {
  display: block;
  background: #59b59c;
  color: #fff;
}
.currentItem {
  background: #59b59c;
  color: #fff;
}
</style>