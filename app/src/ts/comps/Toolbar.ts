import Vue from 'vue'
import {store} from '../Store'

const bToolbar = Vue.component('v-p-toolbar', {
    store,
    methods: {
        test: () => {
            store.commit('toggleDrawer');
        }
    },
    template: `
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="test"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    `
});

export {bToolbar}