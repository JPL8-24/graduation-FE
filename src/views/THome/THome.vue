<template>
  <div class="main">
    <nav-header activename="1" @done='getCheckList(userID)'></nav-header>
    <div class="list">
      <div class="item">
        <div class="avatar">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icon30"></use>
          </svg>
        </div>
        <div class="test-title">关于本学期第一次考试测试</div>
        <div class="id">2015141463072</div>
        <div class="time">2018-6-15</div>
      </div>
      <div v-for="Titem in checkList" :key="Titem.paperID">
        <div class="item" v-for="Nitem in Titem.noCheck" :key="Nitem.userID" @click="goCheck(Titem.paperID,Nitem.userID,'no')">
          <div class="avatar">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon30"></use>
            </svg>
          </div>
          <div class="test-title">{{Titem.title}}</div>
          <div class="id">{{Nitem.userID}}</div>
          <div class="time">{{Nitem.doneTime}}</div>
          <div class="nocheck">未批改</div>
        </div>
        <div class="item" v-for="Citem in Titem.checked" :key="Citem.userID" @click="goCheck(Titem.paperID,Citem.userID,'ok')">
          <div class="avatar">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon30"></use>
            </svg>
          </div>
          <div class="test-title">{{Titem.title}}</div>
          <div class="id">{{Citem.userID}}</div>
          <div class="time">{{Citem.doneTime}}</div>
          <div class="ischeck">已批改</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import NavHeader from "../../components/NavHeader";
  import {
    mapState
  } from "vuex";
  import {Notice} from 'iview'
  export default {
    name: "",
    data() {
      return {
        checkList: []
      };
    },
    components: {
      NavHeader,
      Notice
    },
    methods: {
      getCheckList(teacherID) {
        this.$api.getCheckList(teacherID).then(res => {
          this.checkList = res.data.data.slice();
          console.log(this.checkList);
        });
      },
      goCheck(paperID, userID,flag) {
        console.log(flag)
        if(flag=='no') {
          this.$router.push(`/check?paperID=${paperID}&userID=${userID}`)
        } else {
          Notice.warning({
            title:"该学生试卷已经批改过"
          })
        }
       
      }
    },
    computed: {
      ...mapState({
        userID: state => state.user.userID,
        userName: state => state.user.userName
      })
    },
    mounted() {}
  };
</script>

<style scoped>
  .main {
    background: #eee;
    width: 100%;
    height: 100%;
  }

  .list {
    width: 60%;
    min-height: 500px;
    margin: 0 auto;
    background: white;
    border-radius: 10px;
    margin-top: 10px;
    padding: 12px;
    font-size: 14px;
  }

  .item {
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 0.5px solid #d4d4d4;
    margin-top: 6px;
  }

  .avatar {
    height: 100%;
    width: 50px;
  }

  .avatar>svg {
    height: 100%;
    width: 100%;
  }

  .test-title {
    margin: auto 20px;
    font-size: 16px;
    font-weight: bold;
  }

  .id {
    margin: auto 20px;
    color: #fd8321;
  }

  .time {
    margin: auto 20px;
  }

  .nocheck {
    margin-left: 30px;
    color: #fd8321;
  }

  .ischeck {
    margin-left: 30px;
    color: #59b59c;
  }
</style>