<template>
<nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2">
    <router-link v-for="navigation in links" :key="navigation.to" :to="navigation.to" class="ml-2 pl-2">{{ navigation.title  }}</router-link>
</nav>
</template>

<script>
export default {
    name: 'AppHeader',

    data() {
        return {
            links: [
                {title: 'Home', to: '/'},
                {title: 'Calender', to: '/calender'},
                {title: 'Markdown', to: '/markdown'},
                {title: 'Slider', to: '/slider'}
            ]
        }
    },
 };
</script>