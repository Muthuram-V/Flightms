<template>
    <div class="d-flex flex-column justify-space-between pa-4" style="width: 40%;">
        <div class="alertHeader">
            <span>Alerts</span>
        </div>
        <div class="d-flex justify-space-between align-center pa-9" style="background-color: #ffffff; width: 100%;">
            <v-list>
                <v-list-item v-for="alert in alerts" :key="alert.id">
                    <v-list-item-icon>
                    <v-icon :color="alert.color">{{ alert.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title class="font-weight-bold">{{ alert.message }}</v-list-item-title>
                    <v-list-item-subtitle>{{ alert.details }}</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                    <span class="text-caption">{{ alert.time }}</span>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: "AlertsDashboard",
    data() {
        return {
            alerts: [
                {
                id: 1,
                message: "Connection loss",
                details: "H12434",
                time: "20 min ago",
                icon: "mdi-alert-circle",
                color: "red"
                },
                {
                id: 2,
                message: "Less than 25% data remaining",
                details: "Jet Connect for BN0972",
                time: "1 hour ago",
                icon: "mdi-wifi-strength-alert-outline",
                color: "orange"
                }
            ] 
        }
    }

})
</script>

<style scoped>
.alertHeader {
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