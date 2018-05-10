import Vue from 'vue'
import {store} from '../Store'

const bToolbar = Vue.component('v-p-toolbar', {
    store,
    methods: {
        toggle: () => {
            store.commit('toggleDrawer');
        }
    },
    template: `
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="toggle"></v-toolbar-side-icon>
      <v-toolbar-title>GEO SOLUTIONS</v-toolbar-title>
    </v-toolbar>
    `
});

export {bToolbar}