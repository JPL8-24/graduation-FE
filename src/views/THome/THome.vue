<template>
   <div class="main">
      <nav-header activename="1"></nav-header>
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
      </div>
   </div>
</template>

<script type="text/ecmascript-6">
   import NavHeader from "../../components/NavHeader";
   export default {
      name: "",
      data() {
         return {};
      },
      components: {
         NavHeader
      }
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
      margin-top:6px;
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
</style>