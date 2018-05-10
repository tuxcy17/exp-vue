import Vue from 'vue'
import {store} from "../Store";

const bDefaultContent = Vue.component('v-p-default-content', {
    store,
    methods: {},
    template: `
            <v-layout
              justify-center
              align-center
            >
              <v-flex text-xs-center>
		        {{$store.state}}
              </v-flex>
            </v-layout>
    `,
});

export {bDefaultContent}