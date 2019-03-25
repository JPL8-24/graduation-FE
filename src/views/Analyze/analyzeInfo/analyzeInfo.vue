<template>
   <div class="infoContainer">
      <page></page>
      <showInfo :currentAnalyze='currentAnalyze'></showInfo>
   </div>
</template>

<script type="text/ecmascript-6">
   import page from './page'
   import showInfo from './showInfo'
   import {
      mapState,
      mapMutations
   } from 'vuex'
   export default {
      name: '',
      data() {
         return {
            currentAnalyze: {}
         }
      },
      components: {
         page,
         showInfo
      },
      props: ['userID', 'paperID'],
      methods: {
         ...mapMutations([
            'setAnalyzeInfo',
            'setAnalyzeQuestion'
         ])
      },
      created() {
         this.$api.getStuResult(this.userID, this.paperID).then(res => {
            if (res.data.status === '1') {
               this.setAnalyzeInfo(res.data.data)
               this.setAnalyzeQuestion(res.data.data.questions)
               this.currentAnalyze = this.analyzeQuestion[this.analyzeIndex]
            }
         })
      },
      computed: {
         ...mapState({
            analyzeIndex: state => state.analyze.analyzeIndex,
            analyzeQuestion: state => state.analyze.analyzeQuestion
         })
      },
      watch: {
         analyzeIndex(newVal, oldVal) {
            this.currentAnalyze = this.analyzeQuestion[newVal]
         }
      }
   }
</script>

<style scoped>
</style>