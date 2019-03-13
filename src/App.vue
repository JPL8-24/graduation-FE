<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import {
    Icon
  } from 'iview'
  import {
    mapState,
    mapMutations
  } from 'vuex'

  export default {
    name: 'app',
    components: {
      HelloWorld,
      Icon
    // },
    // mounted() {
    //   this.changeUserName('jiangpanlei ')
    // },
    // computed: {
    //   ...mapState({
    //     user: state => state.user
    //   })
    // },
    // methods: {
    //   ...mapMutations([
    //     'changeUserName'
    //   ])
    }
  }
</script>

<style>
  @font-face {
    font-family: mySegoeUI;
    src: url('https://ali.bczcdn.com/college/xd/assets/upload/1517221928_segoeui.ttf');
  }

  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    /* -webkit-touch-callout: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -ms-touch-action: none;
    -moz-user-select: -moz-none; */
  }

  *:not(input, textarea) {
    -webkit-touch-callout: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: -moz-none;
  }

  html {
    font-size: 14px;
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
  }

  #app {
    font-family:
      mySegoeUI, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    width: 100%;
    height: 100%;
  }

  .l {
    float: left;
  }

  .r {
    float: right;
  }

  .cl {
    clear: both;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }
</style>