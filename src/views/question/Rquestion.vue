<template>
  <div>
    <div class="question-title">[单项选择题]</div>
    <div class="des">
      浏览器渲染流程,以下哪个顺序是正确的?
      1构建render树 2绘制render树 3布局render树 4解析HTML并构建DOM树
    </div>
    <RadioGroup v-model="answer" vertical>
      <div class="options" v-for="(item,index) in option" :key="index" ref='option'>
        <radio :label="item" @click.native.self="checked(index,$event)">
          <span>{{item}}</span>
        </radio>
      </div>
    </RadioGroup>
    <div class="btn-group">
      <div class="btn  pre-btn">
        上一题
      </div>
      <div class="btn next-btn">
        下一题
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Page from './page.vue'
  import {
    RadioGroup,
    Radio,
    Button
  } from "iview";
  export default {
    name: "",
    data() {
      return {
        answer: "",
        option: ["a", "b", "c", "d"]
      };
    },
    components: {
      RadioGroup,
      Radio,
      Button
    },
    methods: {
      checked(index, event) {
        console.log('1')
        let bro = this.$refs['option']
        let len = bro.length
        for (let i = 0; i < len; i++) {
          bro[i].classList.remove('checked')
        }
        let checked = bro[index]
        checked.classList.add('checked')
      }
    },
    mounted() {
      // this.initTime()
    },
    destroyed() {
      clearInterval(this.timer);
    }
  };
</script>

<style scoped>
  .question-title {
    padding: 14px 20px 14px 55px;
    background: #fff url(https://static.nowcoder.com/images/img/q-ico.png) 20px 16px no-repeat;
    line-height: 1.5;
    font-size: 16px;
    border-bottom: 1px solid #eee;
    border-radius: 3px;
  }

  .ivu-radio-group {
    display: block;
    overflow: hidden;
  }

  .options {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    border: 1px solid #d4d4d4;
    margin: 20px 20px;
  }

  .options:hover {
    background: #f3f3f3;
    text-decoration: none;
    border-color: #909090;
  }

  .des {
    font-size: 14px;
    line-height: 1.6;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    border-bottom: 1px solid #eee;
  }

  .checked {
    border-color: #1abc9c;
    color: #1abc9c;
  }

  .btn-group {
    display: flex;
    justify-content: center;
    border-bottom: 2px dashed #ddd;
    padding-bottom: 30px;
  }

  .btn {
    display: inline-block;
    text-align: center;
    padding: 10px 0;
    width: 110px;
    color: #fff;
    font-size: 14px;
    border-radius: 3px;
    border: none 0;
    cursor: pointer;
    line-height: normal;
    outline: 0;
    white-space: nowrap;
  }

  .pre-btn {
    background: #ff6547;
    margin-right: 15px;
  }

  .next-btn {
    background: #22ae90;
  }
</style>