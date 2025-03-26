<template>
    <div class="d-flex flex-column justify-space-between pa-4" style="width: 40%;">
        <div class="routeHeader">
            <span>Popular routes</span>
        </div>
        <div style="background-color: #ffffff; width: 100%; padding-bottom: 17%;">
            <v-list>
                <v-list-item v-for="item in popularRoutes" :key="item.id">
                    <v-list-item-content>
                    <v-list-item-title class="font-weight-bold">{{ item.route }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.count }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "PopularRoutes",
  data() {
    return {
      popularRoutes: [
        { id: 1, route: "Kuala Lumpur(KUL) to Singapore(SIN)", count: 120 },
        { id: 2, route: "Hong Kong(HKG) to Taipei(TPE)", count: 110 },
        { id: 3, route: "Toronto(YYZ) to New York(LGA)", count: 80 },
        { id: 4, route: "Jakarta(CGK) to Kuala Lumpur(KUL)", count: 60 }
      ]
    };
  }
});
</script>

<style scoped>
.routeHeader {
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    background-color: #ffffff;
    padding: 2%;
}
</style>