import { createWebHistory, createRouter } from 'vue-router';
import Calender from './pages/Calender';
import Home from './pages/Home';
import Markdown from './pages/Markdown';
import Slider from './pages/Slider';

const routes = [
    { path: '/', component: Home },
    { path: '/calender', component: Calender },
    { path: '/markdown', component: Markdown },
    { path: '/slider', component: Slider },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;