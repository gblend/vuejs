<template>
<div>
  <AppHeader/>
<div class="w-full flex text-center font-extrabold">
  <router-view></router-view>
</div>
</div>
</template>

<script>
import AppHeader from './components/AppHeader';
export default {
  components: {
AppHeader,
  },
  name: 'App',
 
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

