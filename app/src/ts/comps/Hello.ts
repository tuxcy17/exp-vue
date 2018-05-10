import Vue from 'vue'
import {store} from "../Store";


let app = new Vue({
    el: "#app",
    store,
    template: `<v-app>
    <v-p-navigation></v-p-navigation>
    <v-p-toolbar></v-p-toolbar app>
    <v-content>
        <v-container fluid fill-height>
            <v-layout
              justify-center
              align-center
            >
              <v-flex text-xs-center>
		        {{$store.state}}
              </v-flex>
            </v-layout>
        </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
</v-app>`
});

export {app}
