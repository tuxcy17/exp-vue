import Vue from 'vue'
import {store} from "../Store";


const example = `<v-app>
    <!--<v-p-navigation></v-p-navigation>-->
      <!--<router-view></router-view>-->
    <v-p-toolbar></v-p-toolbar app>
    <!--<v-toolbar color="indigo" dark fixed app>-->
      <!--<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
      <!--<v-toolbar-title>Application</v-toolbar-title>-->
    <!--</v-toolbar>-->
    <v-content>
        <v-container fluid fill-height>
            <v-layout
              justify-center
              align-center
            >
              <v-flex text-xs-center>
		        TEST
              </v-flex>
            </v-layout>
        </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
</v-app>
`;

let app = new Vue({
    el: "#app",
    store,
    template: '<v-app>' + example + '</v-app>',
    data: {
        name: "World"
    }
});

// déduction de type activée
export {app}
