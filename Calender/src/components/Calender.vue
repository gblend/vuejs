<template>
  <div class="px-2 m-auto">
      <h1 class="text-2xl my-8">Vue Calender</h1>
      <section class="mx-2 px-8 flex justify-between">
          <h2 class="font-bold text-3xl">{{ currentMonthName() }}</h2>
          <h2 class="font-bold text-3xl">{{ currentYear }}</h2>
      </section>
      <section class="flex flex-wrap py-2 mt-10">
          <p style="width: 14.28%" class=" text-center font-bold" v-for="day in days" :key="day">{{ day }}</p>
      </section>
      <section class="flex flex-wrap my-2">
          <p style="width: 14.28%" class="text-center p-2 text-gray-600" v-for="num in startDay()" :key="num"></p>
          <p style="width: 14.28%" class="text-center p-2 font-medium" v-for="num in daysInMonth()" :key="num">{{ num }}</p>
      </section>
      <section class="flex justify-between my-4 px-8">
          <button class="px-2 border outline-none rounded bg-gradient-to-t from-blue-200 to-blue-500" @click="previousMonth">Prev</button>
          <button class="px-2 border outline-none rounded bg-gradient-to-b from-blue-400 to-blue-700" @click="nextMonth">Next</button>
      </section>
  </div>
</template>

<script>
export default {
data() {
    return {
        currentMonth: new Date().getMonth(),
        currentYear: new Date().getFullYear(),
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
    }
},
methods: {
    daysInMonth() {
        return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDay(){
        return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    previousMonth() {
        if(this.currentMonth === 0){
            this.currentMonth = 11;
            this.currentYear--;
        } else {
            this.currentMonth--;
        }
    },
    nextMonth() {
        if(this.currentMonth === 11){
            this.currentMonth = 0;
            this.currentYear++;
        } else {
            this.currentMonth++;
        }
    },
    currentMonthName() {
       return new Date(this.currentYear, this.currentMonth).toLocaleString('default', {month: 'long'});
    },
},
}
</script>