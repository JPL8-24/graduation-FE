<template>
  <div>
    <div class="Infocontainer" v-if="CheckQuestionInfo.type==='1' || CheckQuestionInfo.type==='2'">
      <div class="des">
        <span>{{CheckQuestionInfo.index}}.</span>
        {{CheckQuestionInfo.des}}
      </div>
      <div class="Options">
        <div class="OptionItem" v-for="(item,key) in CheckQuestionInfo.options" :key="item.index">
          <span>{{key}}.</span>
          {{item}}
        </div>
      </div>
      <div class="Canswer">
        <span>正确答案为：</span>
        <span v-for="(item,index) in CheckQuestionInfo.rightAnswer" :key="index">{{item}}</span>
      </div>
      <div class="Canswer">
        <span>学生答案为：</span>
        <span v-for="(item,index) in CheckQuestionInfo.userAnswer" :key="index">{{item}}</span>
      </div>
    </div>

    <div class="Infocontainer" v-else>
      <div class="des">
        <span>{{CheckQuestionInfo.index}}.</span>
        {{CheckQuestionInfo.des}}
      </div>
      <div class="answer">
        <span>学生答案为：</span>
        {{CheckQuestionInfo.userAnswer}}
      </div>
      <div class="check">
        <div>请输入批改意见：</div>
        <Input type="textarea" v-model="answer"/>
      </div>
      <div class="check">
        <div>请输入批改分数：</div>
        <InputNumber :max="10" :min="1" v-model="value1"></InputNumber>
      </div>
    </div>
    <div class="btn-group">
      <div class="btn pre-btn" @click.stop="pre">上一题</div>
      <div class="btn next-btn" @click.stop="next" v-if="checkIndex+1!=checkQuestion.length">下一题</div>
      <div class="btn next-btn" @click.stop="postCheck" v-else>提交</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState, mapMutations } from "vuex";
import { Input, Notice, InputNumber } from "iview";
export default {
  name: "",
  data() {
    return {
      answer: "",
      value1: 1
    };
  },
  components: {
    Input,
    Notice,
    InputNumber
  },
  props: ["CheckQuestionInfo", "StuID", "info"],
  methods: {
    ...mapMutations(["setCheckIndex", "setPreQuestionIndex", "setCheckMethod"]),
    next() {
      if (this.CheckQuestionInfo.type === "3") {
        this.setCheckMethod({
          checkMethod: this.answer,
          checkRate: this.value1
        });
        this.answer = "";
        this.value1 = 0;
      }
      this.setCheckIndex({});
    },
    postCheck() {
      this.setCheckMethod({
        checkMethod: this.answer,
        checkRate: this.value1
      });
      const payload = {};
      payload.teacherID = this.userID;
      payload.stuID = this.checkInfo.userID;
      payload.paperID = this.checkInfo.paperID;
      payload.checkResult = this.checkQuestion;
      console.log(payload);
      this.$api.postCheckResult(payload).then(res => {
        if (res.data.status === "1") {
          Notice.success({
            title: "操作成功",
            desc: "批改结果成功通知给学生"
          });
          this.$router.push("/Thome");
        }
      });
    }
  },
  computed: {
    ...mapState({
      checkIndex: state => state.check.checkIndex,
      checkQuestion: state => state.check.checkQuestion,
      checkInfo: state => state.check.checkInfo,
      userID: state => state.user.userID
    })
  }
};
</script>

<style scoped>
.Infocontainer {
  width: 86%;
  margin: 10px auto;
  font-size: 14px;
}

.des {
  margin-bottom: 6px;
}

.des > span {
  margin-right: 4px;
  color: lightsalmon;
}

.Options {
  display: flex;
  flex-direction: column;
}

.OptionItem {
  min-height: 40px;
  border: 1px solid #2d8cf0;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 6px;
  margin-top: 6px;
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

.Canswer > span:nth-child(1) {
  color: lightsalmon;
}

.btn-group {
  display: flex;
  justify-content: center;
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

.right {
  background: #59b59c;
  color: white;
}
</style>