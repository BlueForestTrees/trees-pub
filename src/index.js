import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './vue/App'
import "./style.css"

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
    el: '#app',
    components: {App},
    template: '<App/>'
});


