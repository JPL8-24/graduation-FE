<template>
  <div class="main">
    <nav-header></nav-header>
    <div class="container">
      <h2 class="test-title">关于本学期第一次考试测试</h2>
      <div class="choose-answer">
        <div class="item">
          <span>1:</span>
          <span>B</span>
        </div>
        <div class="item">
          <span>2:</span>
          <span>A</span>
        </div>
      </div>
      <div class="sperate"></div>
      <div class="check-container">
        <div class="checkItem">
          <div class="content">
            <span>20:</span> 有一对刚出生的兔子（一雌一雄）被放生到一个岛上，兔子会不断繁殖，它们在出生后的第一个月不能繁殖，之后每个月结尾时会生出一雌一雄两只兔子。
            请问两年结束之时这个岛上会有多少只兔子？
            请用你熟悉的语言实现一个函数计算 年结束之时这个岛上共有多少只兔子。
          </div>
          <div class="answer">
            <span>学生答案为：</span>还记得发交话费卡收到货副科级阿萨德会发生地方哈是否合适开放后是否奥斯卡给大家了客服即可拉伸机房打卡机
          </div>
          <div class="check">
            <div>请输入批改意见：</div>
            <Input type="textarea"/>
          </div>
        </div>
        <div class="checkItem">
          <div class="content">
            <span>20:</span> 有一对刚出生的兔子（一雌一雄）被放生到一个岛上，兔子会不断繁殖，它们在出生后的第一个月不能繁殖，之后每个月结尾时会生出一雌一雄两只兔子。
            请问两年结束之时这个岛上会有多少只兔子？
            请用你熟悉的语言实现一个函数计算 年结束之时这个岛上共有多少只兔子。
          </div>
          <div class="answer">
            <span>学生答案为：</span>还记得发交话费卡收到货副科级阿萨德会发生地方哈是否合适开放后是否奥斯卡给大家了客服即可拉伸机房打卡机
          </div>
          <div class="check">
            <div>请输入批改意见：</div>
            <Input type="textarea"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavHeader from "../../components/NavHeader";
import { Input } from "iview";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    NavHeader,
    Input
  }
};
</script>

<style scoped>
.main {
  background: #eee;
  width: 100%;
  height: 100%;
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

.choose-answer {
  width: 60%;
  margin: 10px auto;
  font-size: 18px;
  border: 1px solid lightgray;
  display: flex;
}

.item {
  margin: 10px;
}

.item > span:nth-child(1) {
  color: lightsalmon;
}

.item > span:nth-child(2) {
  animation: fade 0.6s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.check-container {
  margin: 10px 20px;
}

.content {
  font-size: 14px;
}

.content > span {
  color: lightsalmon;
}

.checkItem {
  border-bottom: 1px soild lightgray;
  margin: 0 0 20px 0;
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