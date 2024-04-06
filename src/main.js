import { createApp } from 'vue';
import App from './App'
import TheButton from './components/UI/TheButton.vue'

const app = createApp(App)

app.component('the-button', TheButton)

app.mount('#app')