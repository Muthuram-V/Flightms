<template>
  <div class="home-layout">
    <SideBar class="sideBar" />
    <div class="content">
      <MainBody class="main-body-container"></MainBody>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import SideBar from '../components/SideBar.vue';
import MainBody from '../components/MainBody.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    SideBar,
    MainBody
  },
});
</script>

<style scoped>
.home-layout {
  display: flex;
  height: 100vh;
}

.sideBar {
  width:300px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0; 
}

.content {
  margin-left: 300px;
  width: calc(100% - 300px);
  height: 100vh;
  overflow: auto;
  display: flex;
}

.main-body-container {
  flex: 1;
  background-color: #fff;
}
</style>
