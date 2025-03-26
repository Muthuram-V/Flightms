import { createRouter, createWebHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Dashboard from '../views/Dashboard.vue';
import Flights from '../views/Flights.vue';
import Bookings from '../views/Bookings.vue';
import Broadcast from '../views/Broadcast.vue';
import HelpDesk from '../views/HelpDesk.vue';
import ManageAircraft from '../views/ManageAircraft.vue';
import Payments from '../views/Payments.vue';
import ReportsAnalytics from '../views/ReportsAnalytics.vue';
import Staff from '../views/Staff.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      { path: '/dashboard', name: 'Dashboard', component: Dashboard },
      { path: '/flights', name: 'Flights', component: Flights },
      { path: '/bookings', name: 'Bookings', component: Bookings },
      { path: '/broadcast', name: 'Broadcast', component: Broadcast },
      { path: '/helpdesk', name: 'HelpDesk', component: HelpDesk },
      { path: '/manageAircrafts', name: 'ManageAircraft', component: ManageAircraft },
      { path: '/paymentsRefunds', name: 'Payments', component: Payments },
      { path: '/reportsAnalytics', name: 'ReportsAnalytics', component: ReportsAnalytics },
      { path: '/staff', name: 'Staff', component: Staff }
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
