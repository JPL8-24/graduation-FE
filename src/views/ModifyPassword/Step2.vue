<template>
   <div class="step2">
      <Form :label-width="100" label-position="left" ref="Step2">
         <FormItem prop="password1" label="新密码">
            <Input type="text" v-model="newPassword1" placeholder="请输新密码" />
         </FormItem>
         <FormItem prop="password1" label="确认新密码">
            <Input type="text" v-model="newPassword2" placeholder="请输新密码" />
         </FormItem>
         <FormItem>
            <Button type="primary" @click="handleNextStep('Step2')">下一步</Button>
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
            newPassword1: "",
            newPassword2: ""
         }
      },
      components: {
         Form,
         FormItem,
         Input,
         Button,
         Notice
      },
      methods: {
         handleNextStep(name) {
            if (this.newPassword1 != this.newPassword2) {
               return Notice.error({
                  title: "两次输入密码不同"
               })
            } else {
               this.modifyPassword(this.userID, this.newPassword1)
            }
         },
         modifyPassword(userID, passWord) {
            this.$api.postModifyPassword(userID, passWord).then(res => {
               if (res.data.status === "1" && res.data.msg == 'suc') {
                  this.$emit('nextStep3')
               } else {
                  return Notice.error({
                     title: "新密码不能与旧密码相同"
                  })
               }
            })
         }
      },
      props: ['userID']
   }
</script>

<style scoped>
   .step2 {
      margin-top: 20px;
   }
</style>