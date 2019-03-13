<template>
    <div>
        <div class="question-title">[简答题]</div>
        <div class="des">
            <div class="des-title">题目描述</div>
            <div class="des-content">
                <pre>
                    <code>
                        {{questionData.des}}
                    </code>
                </pre>
            </div>
        </div>
        <div class="answer">
            <Input type="textarea" v-model="answer" :rows="14" />
        </div>
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
    import {
        Input
    } from 'iview'
    import {
        mapMutations
    } from 'vuex'
    export default {
        name: '',
        data() {
            return {
                answer: ''
            }
        },
        components: {
            Input
        },
        props: {
            questionData: {
                type: Object
            }
        },
        methods: {
            ...mapMutations([
                'setQustionIndex',
                'setPreQuestionIndex'
            ]),
            next() {
                this.setQustionIndex({})
            },
            pre() {
                this.setPreQuestionIndex()
            }
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
        word-wrap: break-word;
        word-break: break-all;
    }

    code {
        word-wrap: break-word;
        word-break: break-all;
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

    pre,
    code {
        display: block;
        overflow: auto;
        padding: 5px 10px;
        border: 1px solid #eee;
        word-wrap: break-word;
        white-space: pre-wrap;
    }
</style>