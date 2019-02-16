<template>
  <div class="main">
    <nav-header activename="2"></nav-header>
    <div class="container">
      <div class="header">
        <h2>分享与求助</h2>
        <div class="publish">
          <a class="btn btn-primary">
            <Icon type="ios-brush-outline" size="16"/>发布帖子
          </a>
        </div>
      </div>
      <div class="invitation-container">
        <div class="invitation-item" v-for="(item,index) in forumList" :key="index">
          <div class="avatar">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon30"></use>
            </svg>
          </div>
          <div class="content">
            <div class="title">请问暑期实习的招聘什么时候开始？是跟春招一起么？</div>
            <div class="remarks">
              <span>牛客9358094号</span>
              <span>2019-01-16</span>
            </div>
          </div>
        </div>
      </div>
      <div class="load">
        <span><Spin></Spin>加载更多</span>
        <span><Spin></Spin>正在加载</span>
        
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavHeader from "../../components/NavHeader";
import { Icon, Spin } from "iview";
export default {
  name: "",
  data() {
    return {
      forumList: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ],
      loadingForum: false
    };
  },
  components: {
    NavHeader,
    Icon,
    Spin
  }
};
</script>

<style scoped>
.container {
  width: 60%;
  min-height: 500px;
  margin: 0 auto;
  background: white;
  border-radius: 10px;
}

.main {
  background: #eee;
  width: 100%;
}

.header {
  display: flex;
  height: 50px;
  padding: 10px;
  justify-content: space-between;

  margin: 10px;
}

.header > h2 {
  position: relative;
  left: 20px;
}

.header > h2::before {
  background: #ff6547;
  content: "";
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-right: 5px;
  margin-bottom: 2px;
  vertical-align: middle;
}

.publish {
  height: 100%;
  position: relative;
  top: -2px;
  right: 4px;
}

.btn {
  display: inline-block;
  text-align: center;
  padding: 8px 0;
  width: 110px;
  color: #fff;
  font-size: 14px;
  border-radius: 6px;
  border: none 0;
  cursor: pointer;
  line-height: normal;
  outline: 0;
  white-space: nowrap;
  transition: all 0.8s;
}

.btn-primary {
  background: #7edac6;
}

.btn:hover {
  background: #25bb9b;
}

.invitation-container {
  min-height: 500px;
  padding: 20px;
}

.invitation-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 0.5px solid #d4d4d4;
}

.avatar {
  width: 50px;
  height: 50px;
}

.avatar svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
  overflow: hidden;
}

.content {
  margin-left: 8px;
}

.title {
  font-size: 14px;
  color: black;
}

.remarks {
  color: #999;
  white-space: nowrap;
  margin-top: 4px;
}

.remarks > span:nth-child(2) {
  margin-left: 14px;
}
.remarks > span:nth-child(1) {
  color: #fd8321;
}
.load {
  text-align: center;
  font-size: 15px;
  margin-top:-6px;
  margin-bottom:10px;
}
.load>span{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>