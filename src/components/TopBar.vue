<template>
  <div class="topBar d-flex align-center pa-4 justify-space-between">
    <span class="topBarHeader">{{ routeName }}</span>
    <div class="d-flex align-center">
        <i class="fa fa-bell mr-4" style="height: 28px; width: 28px;"></i> 
        <div class="d-flex">
            <div class="d-flex flex-column">
                <span style="font-size: 20; font-weight: 500;">{{ user.name }}</span>
                <span style="font-size: 16;">{{ user.role }}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'TopBar',
    data() {
        return {
            routeName: '',
            user: {
                name: 'Muthuram',
                role: 'Admin'
            }
        }
    },
    mounted() {
        let lastSegment = this.$route.path.split('/').pop();
        this.routeName = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
    }
})
</script>

<style scoped>
.topBar {
    background-color: #ffffff;
}
.topBarHeader {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #3D0E74;
}
</style>