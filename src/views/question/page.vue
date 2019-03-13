<template>
  <div class="page">
    <div class="pageItem" 
    v-for="(n,index) in total" 
    :key="n" 
    :class="{currentItem:index==questionIndex}"
    @click="setIndex(index)"
    >{{n}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    name: "",
    data() {
      return {};
    },
    props: {
      total: Number
    },
    methods: {
      ...mapMutations([
        'setQustionIndex'
      ]),
      setIndex(index){
        this.setQustionIndex({index})
      }
    },
    computed: {
      ...mapState({
        questionIndex: state => state.paper.questionIndex
      })
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
    color: lightgray;
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