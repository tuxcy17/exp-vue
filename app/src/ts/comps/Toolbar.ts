import Vue from 'vue'

const bToolbar = Vue.component('v-p-toolbar', {
    methods: {
        test: function () {
            alert('test');
        }
    },
    template: `
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click=test></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    `
});

export {bToolbar}