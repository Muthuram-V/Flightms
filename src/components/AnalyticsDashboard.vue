<template>
    <div v-if="isRendered" class="d-flex flex-column" style="width: 100%; height: 90vh;">
        <DashboarCard />
        <div class="d-flex">
            <DashboardPerformance />
            <AlertsDashboard />
        </div>
        <div class="d-flex">
            <SalesDashboard />
            <PopularRoutes />
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import DashboarCard from './DashboarCard';
import DashboardPerformance from './DashboardPerformance.vue';
import SalesDashboard from './SalesDashboard.vue';
import AlertsDashboard from './AlertsDashboard.vue';
import PopularRoutes from './PopularRoutes.vue';
export default defineComponent({
    name: 'AnalyticsDashboard',
    components: {
        DashboarCard,
        DashboardPerformance,
        SalesDashboard,
        AlertsDashboard,
        PopularRoutes
    },
    data() {
        return {
            isRendered: false
        }
    },
    mounted() {
        this.isRendered = true;
    }
})
</script>

<style>

</style>