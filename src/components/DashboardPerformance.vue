<template>
  <div class="d-flex flex-column justify-space-between pa-4" style="width: 60%;">
    <div class="performanceHeader">
        <span>Performance</span>
    </div>
    <div class="d-flex justify-space-between align-center pa-10" style="background-color: #ffffff; width: 100%;">
        <DoughnutChart :value="70" label="Occupancy" :backgroundColor="'#5A3E8C'" />
        <DoughnutChart :value="10" label="Delays" :backgroundColor="'#4CAF50'" />
        <DoughnutChart :value="20" label="Cancellations" :backgroundColor="'#2196F3'" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import DoughnutChart from './DoughnutChart.vue'
export default defineComponent({
    name: "DashboardPerformance",
    components: {
        DoughnutChart
    },
    data() {
        return {
            selectedTime: '',
            timeOptions: ["Today", "Last Week", "Last Month"]
        }
    }
})
</script>

<style scoped>
.performanceHeader {
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #ffffff;
    padding: 2%;
}
</style>