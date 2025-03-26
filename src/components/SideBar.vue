<template>
    <div class="sideBarClass" :class="{ 'sidebar-collapsed': isCollapsed }">
        <div class="sidebar-header">
            <div class="d-flex align-center pa-8" style="width: 100%;">
                <i :class="['fas fa-plane-departure']" style="height: 32px; width: 32px;"></i>
                <span class="ml-2 logo">{{ title }}</span>
            </div>
        </div>
        <div class="sidebar-content">
            <ul class="nav-links">
                <li v-for="link in navLinks" :key="link.id">
                    <a :href="link.url">
                        <i :class="[link.icon]" style="height: 28px; width: 28px;"></i> 
                        <span class="ml-4">{{ link.text }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    data() {
        return {
            isCollapsed: false,
            title: 'FlIGHTMS',
            navLinks: [
                {
                    id: 1,
                    text: 'Dashboard',
                    url: `/dashboard`,
                    icon: 'fas fa-tachometer-alt'
                },
                {
                    id: 2,
                    text: 'Flights',
                    url: `/flights`,
                    icon: 'fas fa-plane-departure'
                },
                {
                    id: 3,
                    text: 'Bookings',
                    url: `/bookings`,
                    icon: 'fas fa-calendar-check'
                },
                {
                    id: 4,
                    text: 'Staff',
                    url: `/staff`,
                    icon: 'fas fa-user-tie'
                },
                {
                    id: 5,
                    text: 'Help Desk',
                    url: `/helpdesk`,
                    icon: 'fas fa-hands-helping'
                },
                {
                    id: 6,
                    text: 'Manage Aircrafts',
                    url: `/manageAircrafts`,
                    icon: 'fas fa-plane'
                },
                {
                    id: 7,
                    text: 'Reports & Analytics',
                    url: `/reportsAnalytics`,
                    icon: 'fas fa-chart-line'
                },
                {
                    id: 8,
                    text: 'Broadcast Notifications',
                    url: `/broadcast`,
                    icon: 'fas fa-bullhorn'
                },
                {
                    id: 9,
                    text: 'Payments & Refunds',
                    url: `/paymentsRefunds`,
                    icon: 'fas fa-money-bill-wave'
                }
            ]

        }
    }
}
</script>

<style scoped>
.sideBarClass {
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
    color: black;
    border-right: 1px solid #ffffff;
    transition: width 0.3s ease;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
}

.sidebar-collapsed {
    width: 60px;
}

.sidebar-header {
    display: flex;
    height: 80px;
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
	margin-left: 50px;
    font-family: 'Poppins', sans-serif;
	background: linear-gradient(to right, #3D0E74, #7149d1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 800;
}

.sidebar-content {
    display: flex;
    justify-content: center;
    flex-direction: column; 
    overflow-y: auto; /* Enables vertical scrolling */
    max-height: 90vh; /* Limits height to prevent overflow */
    scrollbar-width: thin; /* Firefox */
    scrollbar-color: #3D0E74 #f1f1f1; 
}
.sidebar-content::-webkit-scrollbar {
    width: 8px;
}

.sidebar-content::-webkit-scrollbar-thumb {
    background-color: #3D0E74; /* Color of the scroll thumb */
    border-radius: 10px;
}

.sidebar-content::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Background color of the scrollbar track */
}

.nav-links {
	list-style: none;
	padding: 0;
	margin: 0;
}

.nav-links li a {
	display: block;
	padding: 12px;
	text-decoration: none;
	display: flex;
	align-items: center;
	transition: background-color 0.2s ease;
    border-radius: 12px;
    font-weight: 600;
}

.nav-links li a:hover {
	background-color: #3D0E74;
	color: #ffffff;
}

.nav-links li a i {
	margin-right: 8px;
	width: 1em;
	text-align: center;
}
</style>