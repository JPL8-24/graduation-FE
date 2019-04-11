<template>
    <div id='barChart' ref="barChart">

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
                    legend: {
                        y:'bottom'
                    },
                    tooltip: {},
                    dataset: {
                        source: [
                            ['product', '单选题', '多选题', '简答题', '全部'],
                        ]
                    },
                    xAxis: [{
                            type: 'category',
                            gridIndex: 0
                        }

                    ],
                    yAxis: [{
                        gridIndex: 0
                    }],
                    grid: [{
                            bottom: '25%'
                        },
                        {
                            top: '50%'
                        },
                    ],
                    series: [
                        // These series are in the first grid.
                        {
                            type: 'bar',
                            seriesLayoutBy: 'row'
                        },
                        {
                            type: 'bar',
                            seriesLayoutBy: 'row'
                        },
                        {
                            type: 'bar',
                            seriesLayoutBy: 'row'
                        },
                    ]
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
            let rRate = 0
            let rRateTotal = 0
            let rRateAverage = 0
            let cRate = 0
            let cRateTotal = 0
            let cRateAverage = 0
            let sRate = 0
            let sRateTotal = 0
            let sRateAverage = 0
            let tRate = 0
            let tRateTotal = 0
            let tRateAverage = 0
            this.analyzeQuestion.forEach(item => {
                if (item.type === '1') {
                    rRateTotal += 3
                    tRateTotal += 3
                    if (item.isRight) {
                        rRate += 3
                        tRate += 3
                    }
                } else if (item.type === '2') {
                    cRateTotal += 5
                    tRateTotal += 5
                    if (item.isRight) {
                        cRate += 5
                        tRate += 5
                    }
                } else if (item.type === '3') {
                    sRateTotal += 10
                    tRateTotal += 10
                    if (item.checkRate) {
                        sRate += item.checkRate
                        tRate += item.checkRate
                    }
                }
            });
            rRateAverage = (rRate / rRateTotal).toFixed(3) * 100
            cRateAverage = (cRate / cRateTotal).toFixed(3) * 100
            sRateAverage = (sRate / sRateTotal).toFixed(3) * 100
            tRateAverage = (tRate / tRateTotal).toFixed(3) * 100
            console.log(sRateAverage, tRateAverage)
            let Rate = ['学生得分', rRate, cRate, sRate, tRate]
            let totalRate = ['总分', rRateTotal, cRateTotal, sRateTotal, tRateTotal]
            let RateAverage = ['得分率', rRateAverage, cRateAverage, sRateAverage, tRateAverage]
            this.option.dataset.source.push(Rate, totalRate, RateAverage)
            let mychart = this.$echarts.init(this.$refs.barChart)
            mychart.setOption(this.option)
        }

    }
</script>

<style scoped>
#barChart{
    width: 600px;
    height: 500px;
    margin:20px auto;
}
</style>