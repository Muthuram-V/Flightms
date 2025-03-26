<template>
    <div class="d-flex flex-column">
      <!-- Month and Year Selector -->
      <div class="d-flex align-center date-selector">
        <button @click="prevMonth" class="icon-btn">
          <i class="fas fa-chevron-left"></i>
        </button>
        <span class="text-gray-700 font-semibold" style="background-color: #ffffff; padding: 10px;">{{ formattedMonthYear }}</span>
        <button @click="nextMonth" class="icon-btn">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
  
      <!-- Date Selection -->
      <div class="d-flex" style="width: 100%;">
        <div
          v-for="date in weekDates"
          :key="date.day"
          class="date-card"
          :class="{ 'selected': selectedDate === date.day }"
          @click="selectDate(date.day)"
        >
          <span class="date-number">{{ date.day }}</span>
          <span class="date-week">{{ date.weekday }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import dayjs from 'dayjs';
  
  export default defineComponent({
    name: "DateSelector",
    data() {
      return {
        currentDate: dayjs(),
        selectedDate: dayjs().date()
      };
    },
    computed: {
      formattedMonthYear() {
        return this.currentDate.format('MMMM YYYY');
      },
      weekDates() {
        const startOfWeek = this.currentDate.startOf('week');
        return Array.from({ length: 7 }, (_, i) => {
          const date = startOfWeek.add(i, 'day');
          return {
            day: date.date(),
            weekday: date.format('ddd').toUpperCase(),
          };
        });
      },
    },
    methods: {
      prevMonth() {
        this.currentDate = this.currentDate.subtract(1, 'month');
      },
      nextMonth() {
        this.currentDate = this.currentDate.add(1, 'month');
      },
      selectDate(day) {
        this.selectedDate = day;
      }
    }
  })
  </script>
  
  <style scoped>
  .date-selector {
    border-radius: 10px;
    padding: 1%;
  }
  
  .icon-btn {
    background-color: #ffffff;
    border: none;
    cursor: pointer;
    color: #777;
    padding: 10px;
  }
  
  .date-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 10vh;
    background: white;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    margin: 1%;
    transition: all 0.3s;
  }
  
  .date-card.selected {
    background: #6b46c1;
    color: #ffffff;
  }
  
  .date-number {
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  .date-week {
    font-size: 0.8rem;
  }
  </style>
  