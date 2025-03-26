<template>
  <div class="chart-container">
    <canvas ref="chartCanvas"></canvas>
    <div class="center-label">{{ value }}%</div>
    <div class="label-text">{{ label }}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);
export default defineComponent({
    name: "DoughnutChart",
    props: ["value", "label", "backgroundColor"],
    data() {
        return {
        chartCanvas: null,
        };
    },
    mounted() {
        this.chartCanvas = this.$refs.chartCanvas;
        new Chart(this.chartCanvas, {
        type: "doughnut",
        data: {
            datasets: [
              {
                  data: [this.value, 100 - this.value],
                  backgroundColor: [this.$props.backgroundColor, "#E0E0E0"],
                  borderWidth: 0,
              },
            ],
        },
        options: {
            cutout: "75%",
            plugins: { legend: { display: false } },
        },
        });
    },
})
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 180px;
  height: 180px;
}
.center-label {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: bold;
}
.label-text {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
}
</style>