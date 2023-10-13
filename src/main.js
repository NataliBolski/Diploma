import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-dark-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCFwwsALj08_UDDsgMc2qnyjoGd1AIeeME',
  authDomain: 'diploma-e0dfb.firebaseapp.com',
  projectId: 'diploma-e0dfb',
  storageBucket: 'diploma-e0dfb.appspot.com',
  messagingSenderId: '443769989082',
  appId: '1:443769989082:web:f20bcfcfc66902154c42e3',
  measurementId: 'G-HNX32SXVZN'
}

initializeApp(firebaseConfig)
const app = createApp(App)

// app.use(router)
app.use(PrimeVue)

app.mount('#app')
