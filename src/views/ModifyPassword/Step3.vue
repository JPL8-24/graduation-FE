<template>
   <div class="step3">
      <div class="img"><img src="../../assets/提现成功.png"/></div>
      <h2 class="warning">修改密码成功，{{count}}秒后跳转至登录页面</h2>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: '',
   data() {
       return {
          count:3,
          timer:""
       }
   },
  components: {},
  mounted () {
     this.timer=setInterval(()=>{
        this.count-=1
        if(this.count===0) {
           this.$router.push('/login')
        }
     },1000)
  },
  destroyed () {
     clearInterval(this.timer)
  }
}
</script>

<style scoped>
.step3{
   margin-top:20px;
}
.img{
   margin:0 auto;
   width: 200px;
   height: 200px;
}

.img>img{
   width: 100%;
   height: 100%;
}

.warning{
   text-align: center;
   margin-top:20px;
}
</style>
