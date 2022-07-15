import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import BalmUI from 'balm-ui';
import 'balm-ui-css';

createApp(App)
  .use(BalmUI)
  .use(router)
  .component('Datepicker', Datepicker)
  .mount('#app')

