<template>
    <div id='pieChart' ref="pieChart">

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
                        text: '试卷题目组成',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        x: 'center',
                        y: 'bottom',
                        data: ['单选题', '多选题', '简答题']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: {
                                show: true
                            },
                            dataView: {
                                show: true,
                                readOnly: false
                            },
                            magicType: {
                                show: true,
                                type: ['pie', 'funnel']
                            },
                            restore: {
                                show: true
                            },
                            saveAsImage: {
                                show: true
                            }
                        }
                    },
                    calculable: true,
                    series: [{
                        name: '题目',
                        type: 'pie',
                        radius: [20, 110],
                        center: ['50%', '50%'],
                        roseType: 'radius',
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        lableLine: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data: [

                        ]
                    }]
                }
            }
        },
        components: {},
        mounted() {
            const statistics = {
                '单选题': 0,
                '多选题': 0,
                '简答题': 0
            }
            this.analyzeQuestion.forEach((item) => {
                if (item.type === '1') {
                    statistics['单选题'] += 1
                } else if (item.type === '2') {
                    statistics['多选题'] += 1
                } else if (item.type === '3') {
                    statistics['简答题'] += 1
                }
            })
            let data = []
            Object.keys(statistics).forEach((key) => {
                data.push({
                    value: statistics[key],
                    name: key
                })
            })
            this.option.series[0].data = data
            let mychart = this.$echarts.init(this.$refs.pieChart)
            mychart.setOption(this.option)
        },
        computed: {
            ...mapState({
                analyzeQuestion: state => state.analyze.analyzeQuestion
            })
        }
    }
</script>

<style scoped>
    #pieChart {
        width: 500px;
        height: 500px;
        margin: 20px auto;
    }
</style>