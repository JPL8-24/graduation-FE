<template>
    <div class="">
        <NavHeader></NavHeader>
        <div class="container">
            <div class="step">
                <Steps :current="current">
                    <Step title="确认旧密码" content="请输入你的旧密码"></Step>
                    <Step title="输入新密码" content="请输入你想修改的新密码"></Step>
                    <Step title="修改成功" content="密码修改成功"></Step>
                </Steps>
            </div>
            <component :is="stepComponent" @nextStep="nextStep('/step2')" :userID="userID"  @nextStep3="nextStep('/step3')" ></component>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
    import NavHeader from '../../components/NavHeader'
    import Step1 from './Step1.vue'
    import Step2 from './Step2.vue'
    import Step3 from './Step3.vue'
    import {
        Step,
        Steps
    } from 'iview'
    import {mapState} from 'vuex'
    export default {
        name: '',
        data() {
            return {
                current:0,
                stepComponent:'Step1'

            }
        },
        components: {
            NavHeader,
            Step,
            Steps,
            Step1,
            Step2,
            Step3
        },
        mounted() {
            document.body.style.backgroundColor = '#eee'
        },
        methods: {
            nextStep(name) {
                if(name==='/step2') {
                    this.current=1
                    this.stepComponent='Step2'
                } else if (name==='/step3') {
                    this.current=2
                    this.stepComponent='Step3'
                }
            }
        },
        computed: {
            ...mapState({
                userID:state=>state.user.userID
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
        padding:20px;
    }

    .step {
        margin-top:20px;
        padding-bottom:10px;
        border-bottom:1px solid #d4d4d4;;
        position: relative;
        left: 50%;
        transform: translateX(-50%)
    }
</style>