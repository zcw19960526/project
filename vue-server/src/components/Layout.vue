<template>
  <div>
    <app-header></app-header>
    <app-nav></app-nav>
    <app-main></app-main>
  </div>
</template>

<script>
import AppHeader from './AppHeader'
import AppMain from './AppMain'
import AppNav from './AppNav'
export default {
  components: { AppHeader, AppMain, AppNav }
};
</script>

<style scoped>
.header {
  position: absolute;
  line-height: 50px;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #2d3a4b;
}
.navbar {
  position: absolute;
  width: 230px;
  top: 50px;
  left: 0px;
  bottom: 0px;
  background-color: #545c64;
}
.main {
  position: absolute;
  top: 60px;
  left: 230px;
  right: 0;
  bottom: 0;
  padding: 10px;
  overflow-y: auto;
  /* background-color: red; */
}
</style>