import Vue from 'vue'
import App from './App'
import { RackItem, RackItemIcon, RackItemDetails } from '.'

Vue.component('rack-item', RackItem)
Vue.component('rack-item-details', RackItemDetails)
Vue.component('rack-item-icon', RackItemIcon)

new Vue({
  render: h => h(App)
}).$mount('#app')
