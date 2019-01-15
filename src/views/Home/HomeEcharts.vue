<template>
    <div id='HomeChart' ref='chart'>


    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: '',
        data() {
            return {
                data: []
            }
        },
        components: {},
        methods: {
            drawChart() {
                let mychart = this.$echarts.init(this.$refs.chart)
                mychart.setOption({
                    polar: {
                        center: ['50%', '54%']
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    angleAxis: {
                        type: 'value',
                        startAngle: 0
                    },
                    radiusAxis: {
                        min: 0
                    },
                    series: [{
                        coordinateSystem: 'polar',
                        name: 'line',
                        type: 'line',
                        showSymbol: false,
                        data: this.data
                    }],
                    animationDuration: 2000
                })

            }
        },
        mounted() {
            for (var i = 0; i <= 360; i++) {
                var t = i / 180 * Math.PI;
                var r = Math.sin(2 * t) * Math.cos(2 * t);
                this.data.push([r, i]);
            }
            this.drawChart()

        }
    }
</script>

<style scoped>
#HomeChart{
    width: 100%;
    height: 100%;
}
</style>