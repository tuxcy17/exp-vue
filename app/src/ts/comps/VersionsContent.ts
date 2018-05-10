import Vue from 'vue'
import {store} from "../Store";

const bVersionsContent = Vue.component('v-p-versions-content', {
    store,
    methods: {},
    template: `
            <v-layout
              justify-center
              align-center
            >
              <v-flex text-xs-center>
		        {{$store.state.ihm.product}}
		        <br/>
		        {{$store.state.ihm.versions}}
              </v-flex>
            </v-layout>
    `,
});

export {bVersionsContent}