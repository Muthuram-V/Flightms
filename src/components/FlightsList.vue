<template>
  <div v-if="isAddNewFlight" class="flightListBody">
    <v-container class="d-flex align-center" >
      <v-tabs color="#3D0E74" v-model="flightStatus">
          <v-tab value="Upcoming">Upcoming</v-tab>
          <v-tab value="Completed">Completed</v-tab>
          <v-tab value="real-time">Real-time Tracking</v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <v-btn color="#3D0E74" @click="addNewFlight()">Add New Flight</v-btn>
    </v-container>
    <DateSelector />
    <ul class="flighList-content">
      <li v-for="flight in filteredFlights" :key="flight.id">
        <div class="d-flex justify-space-between align-center">
          <div class="flightDetails">
          <span style="font-size: 16px; font-weight: 500;">{{ flight.aircraft }}</span>
          <v-chip v-if="flight.status === 'Upcoming'" 
              color="green" label
              class="text-white font-weight-bold ml-2"
            >{{ flight.status }}</v-chip>
          <v-chip v-else-if="flight.status === 'Completed'" 
              color="red" label
              class="text-white font-weight-bold ml-2"
            >{{ flight.status }}
          </v-chip>
          <v-chip v-else-if="flight.status === 'Real-time Tracking'" 
              color="orange" label
              class="text-white font-weight-bold ml-2"
            >{{ flight.status }}
          </v-chip>
          </div>
          <i class="fa fa-ellipsis-v mr-2"></i>
        </div>
        <div class="flightDetails d-flex justify-space-between align-center" style="background-color: #f1f1f1; border-radius: 12px;">
          <div class="d-flex flex-column align-start">
              <Span>{{ flight.departure.airport }}</Span>
              <Span style="font-size: 20px; font-weight: 600;">{{ flight.departure.time }}</Span>
              <Span>{{ flight.departure.date }}</Span>
          </div>
          <div class="d-flex">
            <i class="fas fa-plane-departure" style="font-size:20px"></i>
            ---------------{{flight.duration}}---------------
            <i class="fas fa-plane-arrival" style="font-size:20px"></i>    
          </div>
          <div class="d-flex flex-column align-end">
              <Span>{{ flight.arrival.airport }}</Span>
              <Span style="font-size: 20px; font-weight: 600;">{{ flight.arrival.time }}</Span>
              <Span>{{ flight.arrival.date }}</Span>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div v-else class="flightListBody">
    <AddNewFlight @closeDialog="closeRoute()"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import DateSelector from './DateSelector.vue';
import AddNewFlight from './AddNewFlight.vue';
import { mapGetters } from 'vuex';
export default defineComponent({
    name: 'FlightsList',
    components: {
      DateSelector,
      AddNewFlight
    },
    data() {
        return {
            flightStatus: 'Upcoming',
            isAddNewFlight: true
        }
    },
    computed: {
    ...mapGetters({
      upcomingFlights: "flights/getUpcomingFlights",
      completedFlights: "flights/getCompletedFlights",
      realTimeTracking: "flights/getRealTimeTracking",
    }),
    filteredFlights() {
      if (this.flightStatus === "Upcoming") return this.upcomingFlights;
      if (this.flightStatus === "Completed") return this.completedFlights;
      if (this.flightStatus === "real-time") return this.realTimeTracking;
      return [];
    },
    },
    mounted() {
    },
    methods: {
      addNewFlight() {
        this.isAddNewFlight = false; 
      },
      closeRoute() {
        this.isAddNewFlight = true;
      }
    }
})
</script>

<style>
.flightListBody {
  display: flex;
  flex-direction: column; 
  overflow-y: auto;
  height: 90vh;
  scrollbar-width: thin;
  scrollbar-color: #3D0E74 #f1f1f1; 
  background-color: #f1f1f1;
  padding: 0% 1%;
}
.flightListBody-content::-webkit-scrollbar {
  width: 8px;
}

.flightListBody-content::-webkit-scrollbar-thumb {
  background-color: #3D0E74;
  border-radius: 10px;
}

.flightListBody-content::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

.flighList-content {
	list-style: none;
	padding: 0% 1%;
	margin: 0;
  margin-top: 0.5%;
}

.flighList-content li {
	padding: 12px;
  width: 100%;
  background-color: #ffffff;
  margin-bottom: 1%;
  border-radius: 16px;;
}

.flightDetails {
  padding: 1%;
  width: 100%;
}
</style>