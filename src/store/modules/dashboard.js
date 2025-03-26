const state = () => ({
  dashboard: {
    sales_overview: {
      sales: 4000000,
      scheduled_flights: 50,
      active_flights: 20,
      total_bookings: 450,
    },
    flights_information: {
      enroute: 3,
      taxi: 1,
      parked: 12,
    },
    current_flight_status: [
      {
        aircraft: "A350",
        departure: "KLAX",
        status: "Enroute",
        eta: "11:30Z",
        atd: "11:35Z",
        arrival: "KJFK",
      },
      {
        aircraft: "A380",
        departure: "KATL",
        status: "Taxi",
        eta: "11:30Z",
        atd: "11:35Z",
        arrival: "KPA",
      },
      {
        aircraft: "A380",
        departure: "KATL",
        status: "Parked",
        eta: "11:30Z",
        atd: "11:35Z",
        arrival: "-",
      },
      {
        aircraft: "B737",
        departure: "KBOS",
        status: "Parked",
        eta: "11:30Z",
        atd: "11:35Z",
        arrival: "-",
      },
    ],
    performance: {
      fleet_occupancy: 70,
      delays: 30,
      cancellations: 30,
    },
    alerts: [
      { message: "Connection loss", flight: "NH234", time_ago: "20 min ago" },
      {
        message: "Less than 25% data remaining",
        flight: "Jet Connect Ex BNDY42",
        time_ago: "1 hour ago",
      },
    ],
    sales_data: [
      { date: "June 01", sales: 90000 },
      { date: "June 02", sales: 40000 },
      { date: "June 03", sales: 80000 },
      { date: "June 04", sales: 20000 },
      { date: "June 05", sales: 70000 },
      { date: "June 06", sales: 90000 },
      { date: "Sept 16", sales: 60000 },
    ],
    popular_routes: [
      { route: "Kuala Lumpur(KUL) → Singapore(SIN)", flights_count: 120 },
      { route: "Hong Kong(HKG) → Taipei(TPE)", flights_count: 110 },
      { route: "Toronto(YYZ) → New York(LGA)", flights_count: 80 },
      { route: "Jakarta(CJK) → Kuala Lumpur(KUL)", flights_count: 60 },
    ],
  },
});

const getters = {
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