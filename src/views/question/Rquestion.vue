<template>
  <div>
    <div class="question-title">[单项选择题]</div>
    <div class="des">
      {{questionData.des}}
    </div>
    <RadioGroup v-model="answer" vertical>
      <div class="options" v-for="(item,key,index) in questionData.options" :key="index" ref='option'>
        <radio :label="key" @click.native.self="checked(index,$event)">
          <span>{{item}}</span>
        </radio>
      </div>
    </RadioGroup>
    <div class="btn-group">
      <div class="btn  pre-btn" @click.stop="pre">
        上一题
      </div>
      <div class="btn next-btn" @click.stop="next">
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
  import {
    mapMutations,
    mapState
  } from 'vuex'
  export default {
    name: "",
    data() {
      return {
        answer: "",
        option: {}
      };
    },
    components: {
      RadioGroup,
      Radio,
      Button
    },
    methods: {
      checked(index, event) {
        let bro = this.$refs['option']
        let len = bro.length
        for (let i = 0; i < len; i++) {
          bro[i].classList.remove('checked')
        }
        let checked = bro[index]
        checked.classList.add('checked')
      },
      ...mapMutations([
        'setQustionIndex',
        'setPreQuestionIndex',
        'setUserAnswer'
      ]),
      next() {
        this.setUserAnswer({
          userAnswer: this.answer
        })
        this.setQustionIndex({})
        this.answer = ''
        let bro = this.$refs['option']
        let len = bro.length
        for (let i = 0; i < len; i++) {
          bro[i].classList.remove('checked')
        }
      },
      pre() {
        this.setPreQuestionIndex()
      }
    },
    props: {
      questionData: {
        type: Object
      }
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