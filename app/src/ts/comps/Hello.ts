import Vue from 'vue'
import {store} from "../Store";


let app = new Vue({
    el: "#app",
    store,
    template: `<v-app light>
    <v-p-navigation></v-p-navigation>
    <v-p-toolbar app></v-p-toolbar>
    <v-p-content app></v-p-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
</v-app>`
});

export {app}
