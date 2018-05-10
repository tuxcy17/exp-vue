import Vue from 'vue'
import {store} from "../Store";

const bContent = Vue.component('v-p-content', {
    store,
    methods: {

    },
    template: `
    <v-content>
        <v-container fluid fill-height>
            <v-p-versions-content v-if="$store.state.ihm.product && !$store.state.ihm.version" app>
            </v-p-versions-content>
            <v-p-default-content v-else app>
            </v-p-default-content>
        </v-container>
    </v-content>
    `,
});

export {bContent}