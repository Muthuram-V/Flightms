import { createStore } from 'vuex';
import flights from './modules/flights';

const store = createStore({
  modules: {
    flights
  }
});

export default store;
