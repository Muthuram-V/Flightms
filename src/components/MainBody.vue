<template>
  <div>
    <TopBar class="topBar"></TopBar>
    <div class="mainBody">
      <div v-if="module=='dashboard'"><AnalyticsDashboard /></div>
      <div v-else-if="module=='flights'"><FlightsList /></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TopBar from '../components/TopBar.vue';
import FlightsList from '../components/FlightsList.vue';
import AnalyticsDashboard from '../components/AnalyticsDashboard.vue';
export default defineComponent({
    name: 'MainBody',
    components: {
      TopBar,
      FlightsList,
      AnalyticsDashboard
    },
    data() {
      return {
        module: ''
      }
    },
    mounted() {
      this.module = this.$route.path.split('/').pop();
    }
})
</script>

<style scoped>
.topBar {
  height: 80px;
}
.mainBody {
  display: flex;
  justify-content: center;
  flex-direction: column; 
  overflow-y: auto;
  height: 90vh;
  scrollbar-width: thin;
  scrollbar-color: #3D0E74 #f1f1f1; 
  background-color: #f1f1f1;
}
.mainBody-content::-webkit-scrollbar {
    width: 8px;
}

.mainBody-content::-webkit-scrollbar-thumb {
    background-color: #3D0E74;
    border-radius: 10px;
}

.mainBody-content::-webkit-scrollbar-track {
    background-color: #f1f1f1;
}

</style>