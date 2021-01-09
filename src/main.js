import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import store from './store'
const GamePopUp = defineAsyncComponent(()=> import('@/components/UI/GamePopUp'));
const app = createApp(App);
app.use(store);
app.component('game-popup', GamePopUp);
app.mount('#app')
