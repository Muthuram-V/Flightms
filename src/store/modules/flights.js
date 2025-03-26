const state = () => ({
    flights: [
      {
        id: 1,
        aircraft: "Airbus A350",
        departure: {
          airport: "YYZ",
          time: "12:15",
          date: "2024-06-04",
        },
        arrival: {
          airport: "DEL",
          time: "11:25",
          date: "2024-06-06",
        },
        duration: "13h 40min",
        status: "Upcoming",
        occupancy: {
          economy: {
            booked: 60,
            total: 280,
          },
          business: {
            booked: 2,
            total: 14,
          },
        },
      },
      {
        id: 2,
        aircraft: "Airbus A350",
        departure: {
          airport: "YYZ",
          time: "12:15",
          date: "2024-06-04",
        },
        arrival: {
          airport: "DEL",
          time: "11:25",
          date: "2024-06-06",
        },
        duration: "13h 40min",
        status: "Upcoming",
        occupancy: {
          economy: {
            booked: 0,
            total: 280,
          },
          business: {
            booked: 0,
            total: 14,
          },
        },
      },
      {
        id: 3,
        aircraft: "Boeing 787",
        departure: {
          airport: "LHR",
          time: "08:30",
          date: "2024-05-20",
        },
        arrival: {
          airport: "JFK",
          time: "11:00",
          date: "2024-05-20",
        },
        duration: "7h 30min",
        status: "Completed",
        occupancy: {
          economy: {
            booked: 200,
            total: 250,
          },
          business: {
            booked: 20,
            total: 30,
          },
        },
      },
      {
        id: 4,
        aircraft: "Boeing 747",
        departure: {
          airport: "DXB",
          time: "15:45",
          date: "2024-06-04",
        },
        arrival: {
          airport: "SIN",
          time: "08:30",
          date: "2024-06-05",
        },
        duration: "7h 45min",
        status: "Real-time Tracking",
        live_position: {
          latitude: 35.6895,
          longitude: 139.6917,
        },
      },
      {
        id: 5,
        aircraft: "Boeing 747",
        departure: {
            airport: "SIN",
            time: "08:30",
            date: "2024-06-05",
        },
        arrival: {
          airport: "DXB",
          time: "15:45",
          date: "2024-06-06",
        },
        duration: "7h 45min",
        status: "Real-time Tracking",
        live_position: {
          latitude: 35.6895,
          longitude: 139.6917,
        },
    },
    {
        id: 7,
        aircraft: "Airbus A350",
        departure: {
            airport: "DEL",
            time: "12:10",
            date: "2024-06-06",
        },
        arrival: {
          airport: "YYZ",
          time: "11:00",
          date: "2024-06-04",
        },
        duration: "13h 40min",
        status: "Cancelled",
        occupancy: {
          economy: {
            booked: 0,
            total: 280,
          },
          business: {
            booked: 0,
            total: 14,
          },
        },
    },
    ]
});

const getters = {
  getUpcomingFlights: (state) => state.flights.filter(flight => flight.status === 'Upcoming'),
  getCompletedFlights: (state) => state.flights.filter(flight => flight.status === 'Completed'),
  getRealTimeTracking: (state) => state.flights.filter(flight => flight.status === 'Real-time Tracking'),
};

const actions = {};

const mutations = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};