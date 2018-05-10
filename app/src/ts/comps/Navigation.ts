import Vue from 'vue'
import {store} from "../Store";

const bNavigation = Vue.component('v-p-navigation', {
    store,
    methods: {
        toggleProduct: (id: any) => {
            store.commit('toggleProduct', id);
        }
    },
    template: `
        <v-navigation-drawer
      v-model="$store.state.ihm.drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile v-for="(product, idx) in $store.state.products" @click="toggleProduct(product.id)">
          <v-list-tile-action>
            <v-icon>{{product.logo}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{product.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    `,
});

export {bNavigation}