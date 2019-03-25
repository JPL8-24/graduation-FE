<template>
  <div class="main">
    <nav-header></nav-header>
    <div class="container">
      <h2 class="test-title">{{checkInfo.title}}</h2>
      <h3 class="test-info"><span>学生ID：{{checkInfo.userID}}</span><span>完成时间:{{checkInfo.doneTime}}</span></h3>
      <page :checkQuestion='checkQuestion'></page>
      <ShowInfo :CheckQuestionInfo='CheckQuestionInfo' ></ShowInfo>
      <div class="sperate"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavHeader from "../../components/NavHeader";
import Page from './page';
import ShowInfo from './ShowInfo';
import { Input } from "iview";
import {mapState,mapMutations} from 'vuex'
export default {
  name: "",
  data() {
    return {
      userID:'',
      paperID:'',
      CheckQuestionInfo:{},
    };
  },
  components: {
    NavHeader,
    Input,
    Page,
    ShowInfo
  },
  created () {
    this.userID=this.$route.query.userID,
    this.paperID=this.$route.query.paperID
    this.$api.getStuResult(this.userID,this.paperID).then(res=>{
      if(res.data.status==='1'){
        this.setCheckInfo(res.data.data)
        this.setCheckQuestion(res.data.data.questions)
        this.CheckQuestionInfo=this.checkQuestion[this.checkIndex]
      }
    })
   
  },
  mounted () {
    document.body.style.backgroundColor='#eee'
  },
  methods: {
    ...mapMutations([
      'setCheckIndex',
      'setPreQuestionIndex',
      'setCheckQuestion',
      'setCheckInfo'
    ])
  },
  computed: {
    ...mapState({
      checkIndex:state=>state.check.checkIndex,
      checkQuestion:state=>state.check.checkQuestion,
      checkInfo:state=>state.check.checkInfo
    })
  },
  watch: {
    checkIndex(newVal,oldVal){
      this.CheckQuestionInfo=this.checkQuestion[newVal]
    }
  }
};
</script>

<style scoped>
body{
    background: #eee;
}
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.container {
  width: 60%;
  min-height: 500px;
  margin: 10px auto;
  background: white;
  border-radius: 10px;
}

.test-title {
  text-align: center;
  font-size: 22px;
  margin: 0 20px;
  border-bottom: 0.5px solid lightgray;
  padding: 6px;
}

.test-info{
  text-align: center;
  font-size:15px;
  margin:10px 0;
}

.test-info>span:nth-child(1){
  margin-right:30px;
}

.sperate {
  height: 1px;
  background: lightgrey;
  margin: 0 10px;
}

.answer {
  font-size: 14px;
  margin-top: 4px;
}

.answer > span {
  color: lightsalmon;
}

.check {
  margin-top: 6px;
}

.check > div {
  margin-bottom: 6px;
  font-size: 14px;
  color: lightsalmon;
}
</style>