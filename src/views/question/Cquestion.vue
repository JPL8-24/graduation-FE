<template>
    <div>
        <div class="question-title">[不定项选择题]</div>
        <div class="des">
            {{questionData.des}}
        </div>
        <checkbox-group v-model="answer">
            <div class="options" v-for="(item,key,index) in questionData.options" :key="index">
                <Checkbox :label="key" @click.native.self="check($event)">{{item}}</Checkbox>
            </div>
        </checkbox-group>
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
        CheckboxGroup,
        Checkbox
    } from 'iview'
    import {
        mapMutations
    } from 'vuex'
    export default {
        name: '',
        data() {
            return {
                answer: []
            }
        },
        components: {
            CheckboxGroup,
            Checkbox
        },
        methods: {
            check(event) {
                if (event.target.parentNode.classList.contains('checked')) {
                    event.target.parentNode.classList.remove('checked')
                } else {
                    event.target.parentNode.classList.add('checked')
                }
            },
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
        },
        props: {
            questionData: {
                type: Object
            }
        },
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
        font-size: 14px;
        line-height: 1.6;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 20px;
        border-bottom: 1px solid #eee;
    }

    .checked {
        color: #1abc9c;
        border: 1px solid #1abc9c !important;
    }

    .ivu-checkbox-group {
        display: block;
        overflow: hidden;
        font-size: 12px;
    }

    .ivu-checkbox-group-item {
        display: block;
        height: 30px;
        line-height: 30px;
    }

    .options {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 15px;
        border: 1px solid #d4d4d4;
        margin: 20px 20px;
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