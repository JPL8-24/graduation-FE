<template>
    <div class="">
        <NavHeader></NavHeader>
        <div class="container">
            <div class="step">
                <Steps :current="current">
                    <Step title="填写信息" content="填写试卷相关信息"></Step>
                    <Step title="上传试卷封面" content="上传试卷的封面"></Step>
                    <Step title="上传题目信息" content="上传试卷相关题目信息"></Step>
                    <Step title="成功" content="上传试卷成功"></Step>
                </Steps>
            </div>
            <component :is="cuurentComponent" @nextStep2='nextStep2' @nextStep3='nextStep3' @nextStep4='nextStep4'>
            </component>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import NavHeader from '../../components/NavHeader'
    import fillInfo from './fillInfo.vue'
    import uploadImg from './uploadImg.vue'
    import uploadQuestion from './uploadQuestion.vue'
    import success from './success.vue'
    import tool from '../../tool.js'
    import {
        Steps,
        Step,
    } from 'iview'
    import {
        mapState
    } from 'vuex'
    export default {
        name: '',
        data() {
            return {
                current: 0,
                cuurentComponent: 'fillInfo',
                Img: '',
                title: '',
                paperRate: '',
                StudentList: []
            }
        },
        components: {
            NavHeader,
            Steps,
            Step,
            fillInfo,
            uploadImg,
            uploadQuestion
        },
        mounted() {
            document.body.style.backgroundColor = "#eee"
        },
        created() {},
        methods: {
            nextStep2(payload) {
                this.title = payload.title
                this.paperRate = payload.paperRate
                this.StudentList = payload.StudentList
                this.current = 1
                this.cuurentComponent = 'uploadImg'
            },
            nextStep3(Img) {
                this.Img = Img
                this.current = 2
                this.cuurentComponent = 'uploadQuestion'
            },
            nextStep4(body) {

                const payload = {}
                payload.title = this.title
                payload.paperRate = this.paperRate
                payload.Img = this.Img
                payload.StudentList = this.StudentList
                payload.questions = body.questions
                payload.paperID = tool.genID()
                payload.teacherID = this.userID
                payload.TotalTime = '2:00:00'
                console.log(payload)
                this.$api.postAddPaper(payload).then(res => {
                    if (res.data.status === '1') {
                        this.current = 3
                        this.cuurentComponent = 'success'
                    }
                })
            }
        },
        computed: {
            ...mapState({
                userID: state => state.user.userID
            })
        }
    }
</script>

<style scoped>
    .container {
        width: 60%;
        min-height: 100px;
        background: white;
        margin: 20px auto;
        border-radius: 8px;
        padding: 20px;
    }

    .step {
        margin-top: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid #d4d4d4;
        position: relative;
        left: 50%;
        transform: translateX(-50%)
    }
</style>