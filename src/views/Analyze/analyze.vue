<template>
    <div class="main">
        <NavHeader></NavHeader>
        <div class="container">
            <div class="switch">
                <div class="switchItem" @click='switchComponent("analyzeInfo")'
                    :class="{current:currentComponent=='analyzeInfo'}">试卷结果</div>
                <div class="switchItem" @click='switchComponent("analyzeResult")'
                    :class="{current:currentComponent=='analyzeResult'}">试卷分析</div>
            </div>
            <keep-alive>
                <component :is="currentComponent" :userID='userID' :paperID='paperID'></component>
            </keep-alive>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import NavHeader from '../../components/NavHeader'
    import analyzeInfo from './analyzeInfo/analyzeInfo'
    import analyzeResult from './analyzeResult/analyzeResult'
    import {
        mapState,
        mapMutations
    } from 'vuex'
    export default {
        name: '',
        data() {
            return {
                currentComponent: 'analyzeInfo',
                paperID: '',
                userID: ''
            }
        },
        components: {
            NavHeader,
            analyzeInfo,
            analyzeResult
        },
        methods: {
            ...mapMutations([
                'setAnalyzeInfo',
                'setAnalyzeQuestion'
            ]),
            switchComponent(component) {
                this.currentComponent = component
            }
        },
        created() {
            document.body.style.backgroundColor = '#eee',
                this.userID = this.$route.query.userID
            this.paperID = this.$route.query.paperID

        }
    }
</script>

<style scoped>
    .main {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .container {
        width: 60%;
        min-height: 300px;
        margin: 10px auto;
        background: white;
        border-radius: 10px;

    }

    .switch {
        width: 100%;
        display: flex;
        font-size: 18px;
        align-items: center;
        height: 40px;
        font-weight: bold;
        border-bottom: .5px solid #2d8cf0;
    }

    .switchItem {
        height: 40px;
        margin-right: 6px;
        cursor: pointer;
        width: 140px;
        padding: 10px;
        text-align: center;
    }

    .current {
        background: #2d8cf0;
        color: white;
    }
</style>