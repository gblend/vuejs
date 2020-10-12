<template>
<div>
  <AppHeader/>
<div class="w-full flex text-center font-extrabold">
  <Calender />
</div>
</div>
</template>

<script>
import AppHeader from './components/AppHeader';
import Calender from './components/Calender';
export default {
  components: {
AppHeader,
Calender,
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

