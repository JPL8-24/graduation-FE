<template>
  <div class="Login-container">
    <login-canvas></login-canvas>
    <div class="login-witket fadeIn">
      <h2 class="active">欢迎使用本系统</h2>
      <div class="login-icon fadeIn-icon">
        <svg>
          <use xlink:href="#icon--chart-"></use>
        </svg>
      </div>
      <div class="login-input fadeIn-input">
        <Input prefix="ios-contact" size="large" clearable placeholder="请输入账号" v-model="userID" />
      </div>
      <div class="login-input fadeIn-input">
        <Input prefix="ios-barcode" type="password" size="large" clearable placeholder="请输入密码" v-model="userPwd" />
      </div>
      <div class="login-button fadeIn-input">
        <Button type="primary" icon="ios-bonfire-outline" size="large" @click.native="login" :loading="loading">
          <span v-if="!loading">登录</span>
          <span v-else>Loading...</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
  import LoginCanvas from "./LoginCanvas";
  import {
    Input,
    Button,
    Notice
  } from "iview";
  import {
    mapMutations
  } from "vuex";
  export default {
    name: "",
    data() {
      return {
        userID: "",
        userPwd: "",
        loading: false
      };
    },
    components: {
      LoginCanvas,
      Input,
      Notice
    },
    created() {
      // this.$api.login(this.userID,this.userPwd)
      Notice.config({
        top: 50
      });
    },
    methods: {
      ...mapMutations(["changeUserInfo"]),
      login() {
        if (this.userID == "" || this.userPwd == "") {
          Notice.error({
            title: "登录失败",
            desc: "账号或密码不能为空"
          });
          return;
        }
        this.$api.login(this.userID, this.userPwd).then(data => {
          if (data.data.status === "1") {
            localStorage.setItem("token", data.data.data);
            this.$api.getUserInfo().then(res => {
              console.log(res)
              if (res.data.status === "1") {
                if (res.data.data.type == 0) {
                  this.changeUserInfo(res.data.data);
                  this.$router.push('/home')
                } else if (res.data.data.type == 1) {
                  this.changeUserInfo(res.data.data);
                  this.$router.push('/Thome')
                }
              } else if (res.data.status === "2") {
                Notice.error({
                  title: "获取用户信息失败",
                  desc: "token错误"
                });
              }
            });
          } else {
            Notice.error({
              title: "登录失败",
              desc: "账号密码错误"
            });
          }
        });
      }
    },
    mounted() {}
  };
</script>

<style scoped>
  .Login-container {
    width: 100%;
    height: 100%;
    background-color: #5cadff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-witket {
    width: 90%;
    max-width: 450px;
    background: white;
    z-index: 99;
    border-radius: 10px;
    box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }

  .active {
    color: #0d0d0d;
    border-bottom: 2px solid #5fbae9;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .login-icon {
    text-align: center;
  }

  .login-icon>svg {
    width: 125px;
    height: 125px;
  }

  .login-input {
    margin: 10px auto 10px auto;
    width: 90%;
  }

  button {
    height: 40px;
    width: 125px;
  }

  .login-button {
    margin: 20px auto 20px auto;
  }

  .fadeIn {
    animation: fadeIn 1s linear;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }

    100% {
      opacity: 1;
      transform: none;
    }
  }

  .fadeIn-icon {
    opacity: 0;
    animation: fadeIn-icon ease-in 1s;
    animation-fill-mode: forwards;
    animation-delay: 0.4s;
  }

  @keyframes fadeIn-icon {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .fadeIn-input {
    animation: fadeIn-input 1s ease-in 0.6s forwards;
    opacity: 0;
  }

  @keyframes fadeIn-input {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
</style>