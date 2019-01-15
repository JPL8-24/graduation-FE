<template>
  <div class="TestContainer">
    <div class="TestList">
      <card>
        <p slot="title">招商银行信用卡中心2019秋招IT笔试（AI方向第三批）</p>
        <div class="test-img">
          <img src="https://uploadfiles.nowcoder.com/images/20180809/4107856_1533797817203_60018B7A8B3D9A9425C8F7C73B8ED0F7">
        </div>
        <p class="text">共25题</p>
        <Rate disabled v-model='value' show-text>
        </Rate>
      </card>
      <card>
        <p slot="title">招商银行信用卡中心2019秋招IT笔试（AI方向第三批）</p>
      </card>
      <card>
        <p slot="title">招商银行信用卡中心2019秋招IT笔试（AI方向第三批）</p>
      </card>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { Card ,Rate} from "iview";
export default {
  data() {
    return {
      value:3.8
    };
  },
  components: {
    Card,
    Rate
  }
};
</script>

<style scoped>
.TestContainer {
  width: 85%;
  margin: 0 auto;
  position: relative;
  top: -80px;
  box-sizing: border-box;
  background: white;
  padding: 30px;
  border-radius: 20px;
}
.ivu-card {
  width: 30%;
  margin-left: 8px;
  margin-right: 8px;
  text-align: center;
  margin-bottom:20px;
}
.TestList {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  
}
.test-img{
  width: 100px;
  height: 100px;
  margin:0 auto;
}
.test-img>img{
  width: 100%;
  height: 100%;
}
.text{
  margin-top:10px;
  margin-bottom:10px;
}
</style>