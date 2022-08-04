import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
console.log(import.meta.env.VITE_APP_BASE_URL)
createApp(App).use(Antd).mount('#app')
