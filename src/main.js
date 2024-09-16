// 1.Створіть проєкт за допомогою VUE CLI.
// 3.Створіть нові компоненти та зареєструйте іх локально і глобально (хоча б один компонент).

import { createApp } from 'vue'
import App from './App.vue'
import FakePosts from './components/Task6.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App)

app.use(vuetify).mount('#app')

app.component('Task4', FakePosts)
