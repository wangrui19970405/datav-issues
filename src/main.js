import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import DataVVue3 from '@kjgl77/datav-vue3'
import App from '@/App.vue'


const app = createApp(App)
app.use(DataVVue3).use(ElementPlus, { locale: zhCn }).mount('#app')
export default app

