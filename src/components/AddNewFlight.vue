<template>
  <div style="height: 100%; width: 100%;">
    <div class="pa-2">
        <vbtn @click="backRoute()"><i class='fas fa-arrow-left' style='font-size:24px;'></i></vbtn>
        <span style="font-size: 24px; font-weight: 500; margin-left: 2%;">Add New Fight</span>
    </div>
    <v-container>
        <div class="pa-4">
            <v-row align="center" justify="space-between" class="stepper-container">
                <template v-for="(step, index) in steps" :key="index">
                <div
                    class="step-box"
                    :class="{ active: index + 1 === currentStep }"
                    @click="goToStep(index + 1)"
                >
                    {{ index + 1 }}
                </div>
                
                <span class="step-label" :class="{ active: index + 1 === currentStep }">
                    {{ step.label }}
                </span>

                <v-icon v-if="index < steps.length - 1" class="divider">fas fa-angle-double-right</v-icon>
                </template>
            </v-row>
        </div>
    </v-container>
    <div class="addNewContent">
        <v-row v-if="currentStep == 1" dense>
            <v-col cols="6">
            <v-text-field
                v-model="flight.number"
                label="Flight Number*"
                outlined
                dense
            ></v-text-field>
            </v-col>

            <v-col cols="6">
            <v-select
                v-model="flight.type"
                :items="flightTypeList"
                label="Flight Type*"
                outlined
                dense
            ></v-select>
            </v-col>

            <v-col cols="6">
            <v-select
                v-model="flight.departure"
                :items="departureList"
                label="Departure Airport*"
                outlined
                dense
            ></v-select>
            </v-col>

            <v-col cols="6">
            <v-select
                v-model="flight.destination"
                :items="destinationList"
                label="Destination Airport*"
                outlined
                dense
            ></v-select>
            </v-col>

            <v-col cols="6">
            <v-select
                v-model="flight.route"
                :items="routeList"
                label="Flight Route*"
                outlined
                dense
            ></v-select>
            </v-col>

            <v-col cols="6">
            <v-select
                v-model="flight.duration"
                :items="durationList"
                label="Flight Duration*"
                outlined
                dense
            ></v-select>
            </v-col>
        </v-row>
        <v-col v-else-if="currentStep == 2">
            <v-row dense class="justify-space-between">
                <v-col cols="12" md="3">
                    <v-text-field label="Departure Date*" v-model="departureDate" type="date"></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                    <v-text-field label="Departure Time*" v-model="departureTime" type="time"></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                    <v-select label="Timezone*" v-model="departureTimezone" :items="timezones"></v-select>
                </v-col>
            </v-row>
            <v-row dense class="justify-space-between">
                <v-col cols="12" md="3">
                    <v-text-field label="Arrival Date*" v-model="arrivalDate" type="date"></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                    <v-text-field label="Arrival Time*" v-model="arrivalTime" type="time"></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                    <v-select label="Timezone*" v-model="arrivalTimezone" :items="timezones"></v-select>
                </v-col>
            </v-row>
            <v-col>
                <h3 class="mb-2">Recurrence</h3>
                <v-row dense>
                    <v-col cols="12" md="3">
                    <v-select v-model="repeatEveryValue" :items="repeatOptions" label="Repeat Every"></v-select>
                    </v-col>
                    <v-col cols="12" md="3">
                    <v-select v-model="repeatUnit" :items="['Day', 'Week', 'Month']"></v-select>
                    </v-col>
                </v-row>

                <h4 class="mt-3">Repeat On</h4>
                <v-row dense>
                    <v-btn
                    v-for="(day, index) in daysOfWeek"
                    :key="index"
                    :class="{ active: selectedDays.includes(day) }"
                    class="week-button ma-1"
                    @click="toggleDay(day)"
                    >
                    {{ day }}
                    </v-btn>
                </v-row>

                <v-row dense class="mt-4">
                    <v-col cols="12" md="3">
                    <v-select v-model="endsOn" :items="['Never', 'After 10 Occurrences', 'On Specific Date']" label="Ends On"></v-select>
                    </v-col>
                </v-row>
            </v-col>
        </v-col>
        <v-col v-else-if="currentStep == 3">
            <v-row dense class="justify-center">Not configured Yet</v-row>
        </v-col>
        <v-col v-else-if="currentStep == 4">
            <v-row dense class="justify-center">Not configured Yet</v-row>
        </v-col>
        <v-col v-else-if="currentStep == 5">
            <v-row dense class="justify-center">Not configured Yet</v-row>
        </v-col>
    </div>
    <v-row class="pa-4 mt-2">
        <v-btn color="#3D0E74" @click="nextStep"> Save & Continue</v-btn>
        <v-btn outlined @click="backRoute()" class="ml-4">Save & Close</v-btn>
    </v-row>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: "AddNewFlight",
    emits: ["closeDialog"],
    data() {
        return {
            currentStep: 1,
            steps: [
                { label: "Flight details" },
                { label: "Schedule" },
                { label: "Aircraft Info" },
                { label: "Pricing" },
                { label: "Review" }
            ],
            // for stepper 1
            flight: {
                number: '',
                type: '',
                depature: '',
                destination: '',
                route: '',
                duration: ''
            },
            flightTypeList: ["Domestic", "International"],
            departureList: ["JFK", "LAX", "ORD", "DFW", "SFO"],
            destinationList: ["LHR", "CDG", "DXB", "SIN", "HKG"],
            routeList: ["Direct", "One Stop", "Two Stops"],
            durationList: ["1-2 hours", "2-4 hours", "4-6 hours", "6+ hours"],

            // for stepper 2
            departureDate: "",
            departureTime: "",
            departureTimezone: null,
            arrivalDate: "",
            arrivalTime: "",
            arrivalTimezone: null,
            timezones: ["UTC", "GMT", "PST", "EST", "IST"],

            repeatEveryValue: "1",
            repeatOptions: ["1", "2", "3", "4"],
            repeatUnit: "Week",
            selectedDays: ["Sun"],
            daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            endsOn: "Never",
        }
    },
    methods: {
        backRoute() {
            this.$emit('closeDialog', true);
        },
        nextStep() {
            if (this.currentStep < this.steps.length) {
                this.currentStep++;
            }
        },
        goToStep(step) {
           this.currentStep = step;
        },
        toggleDay(day) {
            if (this.selectedDays.includes(day)) {
                this.selectedDays = this.selectedDays.filter((d) => d !== day);
            } else {
                this.selectedDays.push(day);
            }
        },
    }

})
</script>

<style scoped>
.stepper-container {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
}

.step-box {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  /* border-radius: 50%; */
  background: #e0e0e0;
  color: #888;
}

.step-box.active {
  background: #5a3e8c;
  color: #fff;
}

.step-label {
  font-size: 14px;
  color: #888;
  font-weight: 500;
  margin: 0 8px;
}

.step-label.active {
  color: #000;
}

.divider {
  color: #ccc;
}

.addNewContent {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
}

.week-button {
  min-width: 40px;
  border: 1px solid #ccc;
  color: #757575;
}

.week-button.active {
  background-color: #5a3e8c;
  color: white;
}
</style>