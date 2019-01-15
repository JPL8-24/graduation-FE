<template>
    <div>
        <nav-header activename='1'></nav-header>
        <div class="HomeBody">
            <div class="BodyContainer">
                <div class="title">简单易用的在线考试系统
                    <Icon type="md-browsers" size="38" />
                </div>
                <div class="button">
                    <Button type="warning" size="large">进入考试</Button>
                </div>
                <div class="img">
                    <home-echarts></home-echarts>
                </div>
            </div>
        </div>
        <test-paper-list></test-paper-list>
    </div>
</template>

<script type="text/ecmascript-6">
    import NavHeader from '../../components/NavHeader'
    import TestPaperList from './TestPaperList.vue'
    import HomeEcharts from './HomeEcharts.vue'
    import {
        Button,
        Icon
    } from 'iview'
    export default {
        name: '',
        data() {
            return {

            }
        },
        components: {
            NavHeader,
            Button,
            Icon,
            TestPaperList,
            HomeEcharts

        }
    }
</script>

<style scoped>
    .HomeBody {
        width: 100%;
        background-repeat: no-repeat;
        background-image: url(https://cdn.oss.kaoshixing.com/ksxing_static/website-4.0/images/home/home-bg-1.png);
        background-size: 100% 100%;
        height: 600px;
    }

    .BodyContainer {
        height: 500px;
        width: 1200px;
        margin: 0 auto;
        position: relative;
        top: 30px;

    }

    .title {
        font-size: 38px;
        color: white;
        font-weight: bold;
        height: 38px;
        line-height: 38px;
    }

    .button {
        margin-top:30px;
    }

    .img {
        position: absolute;
        left: 550px;
        top: 0;
        height: 502px;
        width: 750px;
    }

    .img>img {
        width: 100%;
        height: 100%;
    }
</style>