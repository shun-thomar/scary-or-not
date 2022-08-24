/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* Vue router
    https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/
 */
import router from './router'

/* Font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { faFaceGrinSquint, faFaceDizzy } from '@fortawesome/free-solid-svg-icons'
library.add(faFaceGrinSquint, faFaceDizzy)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
