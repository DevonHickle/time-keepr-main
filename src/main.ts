import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import BalmUI from 'balm-ui';
import BalmUIPlus from 'balm-ui-plus';
import 'balm-ui-css';

loadFonts()

createApp(App)
  .use(BalmUI)
  .use(BalmUIPlus)
  .use(router)
  .use(vuetify)
  .component('Datepicker', Datepicker)
  .mount('#app')

