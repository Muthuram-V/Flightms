<template>
  <div class="d-flex flex-column justify-space-between pa-4" style="width: 60%;">
    <div class="salesHeader">
        <span>Sales</span>
    </div>
    <div class="d-flex justify-space-between align-center pa-16" style="background-color: #ffffff; width: 100%;">    
        <canvas ref="chartCanvas"></canvas>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);
export default defineComponent({
    name: "SalesDashboard",
    data() {
        return {
            chartCanvas: null,
            chartInstance: null,
            selectedTime: "Last Week",
            timeOptions: ["Today", "Last Week", "Last Month"],
            salesData: {
            "Today": [50, 60, 45, 70, 90, 85],
            "Last Week": [80, 90, 30, 70, 95, 100],
            "Last Month": [30, 45, 60, 75, 80, 90]
            },
            labels: ["June 02", "June 03", "June 04", "June 06", "June 08", "Sept 16"]
        }
    },
    mounted() {
        this.createChart();
    },
    methods: {
        createChart() {
            if (this.chartInstance) {
                this.chartInstance.destroy();
            }

            this.chartInstance = new Chart(this.$refs.chartCanvas, {
                type: "bar",
                data: {
                labels: this.labels,
                datasets: [
                    {
                    label: "Sales",
                    backgroundColor: "#5A3E8C",
                    borderRadius: 8,
                    data: this.salesData[this.selectedTime]
                    },
                ],
                },
                options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { display: false } },
                    y: { grid: { color: "#E0E0E0" } },
                },
                },
            });
        }
    }
})
</script>

<style scoped>
.salesHeader {
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