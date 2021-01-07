import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import GamePopUp from "@/components/UI/GamePopUp";

const app = createApp(App);
app.use(store);
app.component('game-popup', GamePopUp);
app.mount('#app')
