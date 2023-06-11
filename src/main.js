import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from './bootstrap'

//bootstrap css framework
// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';
createApp(App).use(bootstrap);
//variavelGlobal
createApp(App).mixin({
    data(){
        return{
            menuLateral:false
        }
    }
});
createApp(App).use(router).mount('#app')
