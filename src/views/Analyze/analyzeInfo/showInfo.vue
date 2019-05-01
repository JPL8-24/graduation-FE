<template>
    <div>
        <div class="Infocontainer" v-if="currentAnalyze.type==='1' || currentAnalyze.type==='2'">
            <div class="des">
                <span>{{currentAnalyze.index}}.</span>
                {{currentAnalyze.des}}
            </div>
            <div class="Options">
                <div class="OptionItem" v-for="(item,key) in currentAnalyze.options" :key="item.index">
                    <span>{{key}}.</span>
                    {{item}}
                </div>
            </div>
            <div class="Canswer">
                <span>正确答案为：</span>
                <span v-for="(item,index) in currentAnalyze.rightAnswer" :key="index">{{item}}</span>
            </div>
            <div class="Canswer">
                <span>你的答案为：</span>
                <span v-for="(item,index) in currentAnalyze.userAnswer" :key="index">{{item}}</span>
            </div>
        </div>

        <div class="Infocontainer" v-else>
            <div class="des">
                <span>{{currentAnalyze.index}}.</span>
                {{currentAnalyze.des}}
            </div>
            <div class="answer">
                <span>学生答案为：</span>
                <div v-html="currentAnalyze.userAnswer"></div>
            </div>
            <div class="answer">
                <span>老师批改意见为：</span>
                <div v-html="currentAnalyze.checkMethod"></div>
            </div>
            <div class="answer">
                <span>本简答题得分：</span>
                {{currentAnalyze.checkRate}}
            </div>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
    import {
        mapState,
        mapMutations
    } from "vuex";
    export default {
        name: "",
        data() {
            return {
        
            };
        },
        props: {
            currentAnalyze:{
                type:Object,
                default:{}
            }
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

    .des>span {
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

    .answer>span {
        color: lightsalmon;
    }

    .check {
        margin-top: 6px;
    }

    .check>div {
        margin-bottom: 6px;
        font-size: 14px;
        color: lightsalmon;
    }

    .Canswer>span:nth-child(1) {
        color: lightsalmon;
    }


    .right {
        background: #59b59c;
        color: white;
    }
</style>