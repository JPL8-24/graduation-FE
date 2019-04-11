<template>
   <div class="step1">
      <Form :label-width="100" label-position="left" ref="Step1">
         <FormItem prop="password" label="旧密码">
            <Input type="text" v-model="password1" placeholder="请输入旧密码" />
         </FormItem>
         <FormItem prop="password" label="确认旧密码">
            <Input type="text" v-model="password2" placeholder="请输入旧密码" />
         </FormItem>
         <FormItem>
            <Button type="primary" @click="handleNextStep('Step1')">下一步</Button>
         </FormItem>
      </Form>
   </div>
</template>

<script type="text/ecmascript-6">
   import {
      Form,
      FormItem,
      Input,
      Button,
      Notice
   } from 'iview'
   export default {
      name: '',
      data() {
         return {
            password1: '',
            password2: ''
         }
      },
      components: {
         Form,
         FormItem,
         Input,
         Button
      },
      methods: {
         handleNextStep(name) {
            
            if (this.password1 != this.password2) {
               return Notice.error({
                  title: "两次输入密码不同"
               })
            } else {
               this.vertifyPassword(this.userID, this.password1)
            }
         },
         vertifyPassword(userID, passWord) {
            console.log(passWord)
            this.$api.postVertifyPassword(userID, passWord).then(res => {
               console.log(res)
               console.log(res.data.data.msg )
               if (res.data.status === "1" && res.data.msg === "suc") {
                  this.$emit('nextStep')
               } else {
                  return Notice.error({
                     title: "密码错误"
                  })
               }
            })
         }
      },
      props: ['userID']
   }
</script>

<style scoped>
   .step1 {
      margin-top: 20px;
   }
</style>