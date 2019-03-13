<template>
   <div class="main">
      <nav-header></nav-header>
      <div class="question">
         <div class="question-header">
            <Progress :percent="percent" status="active" :stroke-width="14">
               <span id="text">{{currentQuestion.index}}/{{localDb.length}}</span>
            </Progress>
            <a class="progress-time">
               <div class="icon">
                  <Icon type="md-pause" size="20" />
               </div>
               <div>
                  <span>{{time}}</span>
               </div>
            </a>
         </div>
         <rquestion v-if="currentQuestion.type==='1'" :questionData='currentQuestion'></rquestion>
         <cquestion v-else-if="currentQuestion.type==='2'" :questionData='currentQuestion'></cquestion>
         <squestion v-else-if="currentQuestion.type==='3'" :questionData='currentQuestion'></squestion>
         <page :total="questionCount"></page>
      </div>
   </div>
</template>

<script type="text/ecmascript-6">
   import NavHeader from "../../components/NavHeader";
   import Rquestion from './Rquestion.vue';
   import Cquestion from './Cquestion.vue';
   import Squestion from './Squestion.vue'
   import Page from './page.vue'
   import {
      Progress,
      Icon,
      RadioGroup,
      Radio,
      Button
   } from "iview";
   import {
      mapState,
      mapMutations
   } from 'vuex'
   export default {
      name: '',
      data() {
         return {
            time: "02:00:00",
            timer: "",
            question: [],
            questionID: '',
            currentQuestion: {},
            percent: 0,
            questionCount: 0
         }
      },
      components: {
         NavHeader,
         Rquestion,
         Progress,
         Icon,
         RadioGroup,
         Radio,
         Button,
         Page,
         Cquestion,
         Squestion
      },
      methods: {
         initTime() {
            let h = "0" + 1;
            let m = 59;
            let s = 59;
            let that = this;
            this.timer = setInterval(function () {
               --s;
               if (s < 0) {
                  --m;
                  s = 59;
               }
               if (m < 0) {
                  --h;
                  m = 59;
               }
               if (h < 0) {
                  s = 0;
                  m = 0;
               }
               s = that.checkTime(s);
               m = that.checkTime(m);
               that.time = h + ":" + m + ":" + s;
            }, 1000);
         },
         checkTime(i) {
            if (i < 10) {
               i = "0" + i;
            }
            return i;
         },
         getPaperContent(id) {
            this.$api.getPaperContent(id).then((res) => {
               if (res.data.status === '1') {
                  this.setQuestionInfo(res.data.data)
                  this.setLocalDb({
                     questions: res.data.data.questions
                  })
                  this.currentQuestion = this.localDb[this.questionIndex]
                  let current = parseInt(this.currentQuestion.index)
                  this.percent = (current / this.localDb.length) * 100
                  this.time = this.questionInfo.TotalTime
                  this.questionCount = this.localDb.length
               }
            })
         },
         ...mapMutations([
            'setLocalDb',
            'setQuestionInfo',
            'setQustionIndex'
         ])
      },
      destroyed() {
         clearInterval(this.timer);
      },
      mounted() {
         this.questionID = this.$route.query.questionID
         this.getPaperContent(this.questionID)
         document.body.style.backgroundColor = "#eee";
      },
      computed: {
         ...mapState({
            localDb: state => state.paper.localDb,
            questionInfo: state => state.paper.questionInfo,
            questionIndex: state => state.paper.questionIndex,

         })
      },
      watch: {
         questionIndex(newVal, oldVal) {
            this.currentQuestion = this.localDb[newVal]
            let current = parseInt(this.currentQuestion.index)
            this.percent = (current / this.localDb.length) * 100
         }
      }
   }
</script>

<style scoped>
   body {
      background: #eee;
   }

   .main {
      width: 100%;
      overflow: hidden;
   }

   .question {
      width: 60%;
      margin: 10px auto;
      background: white;
   }

   .question-header {
      width: 100%;
      height: 50px;
      background: #232c31;
      border-radius: 8px 8px 0 0;
      padding-left: 30px;
      padding-right: 270px;
      display: flex;
      align-items: center;
      position: relative;
   }

   #text {
      color: #fff;
      font-size: 20px;
      line-height: 20px;
   }

   .progress-time {
      font-size: 18px;
      position: absolute;
      right: 0;
      top: 0;
      background: #2d3339;
      border-radius: 0 8px 0 0;
      color: #fff;
      height: 100%;
      width: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .icon {
      position: relative;
      top: -3px;
      margin-right: 6px;
   }
</style>