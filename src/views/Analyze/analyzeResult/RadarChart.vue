<template>
    <div id="radarChart" ref='radarChart'>

    </div>
</template>

<script type="text/ecmascript-6">
    import {
        mapState
    } from 'vuex'
    export default {
        name: '',
        data() {
            return {
                option: {
                    title: {
                        text: '试卷知识点',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {

                    },
                    lineStyle: {
                        color: '#2d8cf0'
                    },
                    radar: [{
                        indicator: [],
                        radius: 120,
                        center: ['50%', '50%'],
                    }],
                    series: [{
                        type: 'radar',
                        data: [{
                            value: []
                        }],
                        tooltip: {
                            trigger: 'item'
                        }
                    }]
                }
            }
        },
        components: {},
        computed: {
            ...mapState({
                analyzeQuestion: state => state.analyze.analyzeQuestion
            })
        },
        mounted() {
            let obj = {
                '数据结构': 0,
                '计算机网络': 0,
                '操作系统': 0,
                '专业知识': 0,
                '算法': 0
            }
            this.analyzeQuestion.forEach(item => {
                switch (item.skill) {
                    case '数据结构':
                        obj['数据结构'] += 1
                        break;
                    case '计算机网络':
                        obj['计算机网络'] += 1
                        break
                    case '操作系统':
                        obj['操作系统'] += 1
                        break
                    case '专业知识':
                        obj['专业知识'] += 1
                        break
                    case '算法':
                        obj['算法'] += 1
                        break
                }
            });
            let max = this.analyzeQuestion.length
            const indicator = []
            const value = []
            Object.keys(obj).forEach(key => {
                value.push(obj[key])
                indicator.push({
                    text: key,
                    max: max
                })
            })
            console.log(indicator, value)
            this.option.series[0].data[0].value = value
            this.option.radar[0].indicator = indicator
            let mychart = this.$echarts.init(this.$refs.radarChart)
            mychart.setOption(this.option)
        }
    }
</script>

<style scoped>
    #radarChart {
        width: 500px;
        height: 500px;
        margin: 20px auto;
    }
</style>