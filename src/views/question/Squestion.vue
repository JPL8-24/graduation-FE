<template>
    <div>
        <div class="question-title">[简答题]</div>
        <div class="des">
            <div class="des-title">题目描述</div>
            <div class="des-content">
                有一对刚出生的兔子（一雌一雄）被放生到一个岛上，兔子会不断繁殖，它们在出生后的第一个月不能繁殖，之后每个月结尾时会生出一雌一雄两只兔子。
                请问两年结束之时这个岛上会有多少只兔子？
                请用你熟悉的语言实现一个函数计算 年结束之时这个岛上共有多少只兔子。
            </div>
        </div>
        <div class="answer">
            <Input type="textarea" v-model="answer" :rows="14" />
        </div>
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
    import {
        Input
    } from 'iview'
    export default {
        name: '',
        data() {
            return {
                answer: ''
            }
        },
        components: {
            Input
        }
    }
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

    .des {
        padding: 20px;
    }

    .des-title {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .des-content {
        font-size: 14px;
        line-height: 1.6;
    }

    .answer {
        width: 96%;
        margin: 20px auto;
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