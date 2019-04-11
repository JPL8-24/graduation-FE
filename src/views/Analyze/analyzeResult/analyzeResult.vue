<template>
   <div class="ChartContainer">
      <RadarChart></RadarChart>
      <PieChart></PieChart>
      <BarChart></BarChart>
   </div>
</template>

<script type="text/ecmascript-6">
import PieChart from './PieChart'
import BarChart from './BarChart'
import RadarChart from './RadarChart'
export default {
   name: '',
   data() {
       return {}
   },
  components: {
     PieChart,
     BarChart,
     RadarChart
  }
}
</script>

<style scoped>
.ChartContainer{
   display:flex;
   flex-direction: column;
   min-height: 220px;
}
</style>
