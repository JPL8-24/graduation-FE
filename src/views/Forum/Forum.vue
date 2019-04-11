<template>
  <div class="main">
    <nav-header activename="2"></nav-header>
    <div class="container">
      <div class="header">
        <h2>分享与求助</h2>
        <div class="publish">
          <a class="btn btn-primary" @click="go('/publish')">
            <Icon type="ios-brush-outline" size="16" />发布帖子
          </a>
        </div>
      </div>
      <div class="invitation-container">
        <div class="invitation-item" v-for="(item) in forumList" :key="item.postID" @click="goDetail(item.postID)">
          <div class="avatar">
            <img :src="item.user.portrait" v-if="item.user.portrait">
            <svg class="icon" aria-hidden="true" v-else>
              <use xlink:href="#icon-icon30"></use>
            </svg>
          </div>
          <div class="content">
            <div class="title">{{item.title}}</div>
            <div class="remarks">
              <span>{{item.user.userName}}</span>
              <span>{{item.date}}</span>
            </div>
          </div>
          <div class="comments_count">
            {{item.comments.length}}
          </div>
        </div>
      </div>
      <div class="load">
        <span v-if="!loadingForum">
          加载更多
        </span>
        <span v-else>
          <Spin></Spin>正在加载
        </span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import NavHeader from "../../components/NavHeader";
  import {
    Icon,
    Spin
  } from "iview";
  export default {
    name: "",
    data() {
      return {
        forumList: [],
        loadingForum: false,
        page: 1,
        pageSize: 10
      };
    },
    components: {
      NavHeader,
      Icon,
      Spin
    },
    methods: {
      go(url) {
        this.$router.push(url)
      },
      loadList() {
        this.loadingForum = true
        this.$api.getPostList(this.page, this.pageSize).then(res => {
          if (res.data.status === '1') {
            this.forumList = res.data.data
          }
          this.loadingForum = false
        })
      },
      loadMore() {
        this.loadingForum = true
        this.page += 1
        this.$api.getPostList(this.page, this.pageSize).then(res => {
          if (res.data.status === '1') {
            this.forumList.push(res.data.data)
          }
          this.loadingForum = false
        })
      },
      goDetail(postID){
        this.$router.push(`/forumDetail?postID=${postID}`)
      }
    },
    mounted() {
      document.body.style.backgroundColor = '#eee'
    },
    created() {
      this.loadList()
    }
  };
</script>

<style scoped>
  .container {
    width: 60%;
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

  .header>h2 {
    position: relative;
    left: 20px;
  }

  .header>h2::before {
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
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 0px;
  }

  .invitation-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 0.5px solid #d4d4d4;
    position: relative;
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .avatar svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    overflow: hidden;
  }

  .avatar > img {
    height: 100%;
    width: 100%;
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

  .remarks>span:nth-child(2) {
    margin-left: 14px;
  }

  .remarks>span:nth-child(1) {
    color: #fd8321;
  }

  .load {
    text-align: center;
    font-size: 15px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
  }

  .load>span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .comments_count {
    font-size:15px;
    border-radius: 50%;
    border: 1px solid lightblue;
    height: 40px;
    width:40px;
    line-height: 40px;
    text-align: center;
    position:absolute;
    right:150px;
  }
</style>