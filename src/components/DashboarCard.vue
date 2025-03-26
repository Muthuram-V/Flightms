<template>
    <div class="d-flex justify-space-between pa-4" style="width: 100%;">
        <div v-for="card of dataItems" :key="card.title">
            <div class="cardProperty pa-4" :style="{ 'background': generateGradient(card.color) , 'color': 'white'}">
                <div class="d-flex justify-end" style="width: 100%;">
                    <v-chip
                        :color="card.color" label
                        class="text-white font-weight-bold ml-2"
                        >
                        {{ card.percentage }}
                    </v-chip>    
                </div>
                <div class="cardContent">
                    <div class="title">{{ card.title }}</div>
                    <div class="value">{{ card.value }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: "DashboarCard",
    data() {
        return {
            dataItems: [
                { title: "Sales", value: "$40,00,000", percentage: "20%", color: "#9B6CD2" },
                { title: "Scheduled Flights", value: "50",percentage: "20%", color: "#4CBF91" },
                { title: "Active Flights", value: "20",percentage: "20%", color: "#4A90E2" },
                { title: "Total Bookings", value: "450", percentage: "20%",color: "#E4B02C" }
            ]
        }
    },
    methods: {
        generateGradient(color) {
            return `linear-gradient(to right, ${this.darkenColor(color, 0.3)}, ${color}),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)`;
        },
        darkenColor(color, percent) {
            let num = parseInt(color.slice(1), 16);
            let amt = Math.round(255 * percent);
            let r = Math.max((num >> 16) - amt, 50);
            let g = Math.max(((num >> 8) & 0x00ff) - amt, 50);
            let b = Math.max((num & 0x0000ff) - amt, 50);
            return `rgb(${r}, ${g}, ${b})`;
        }
    }
})
</script>

<style scoped>
.cardProperty {
    width: 20vw;
    min-height: 16%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.cardContent {
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-align: left;
}

.title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 4px;
    text-align: left;
}

.value {
    font-size: 20px;
    font-weight: bold;
    text-align: left;
}
</style>