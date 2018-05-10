import Vue from 'vue'
import * as Vuetify from 'vuetify'
import * as Vuex from 'vuex'

Vue.use(<any>Vuetify);
Vue.use(<any>Vuex);

import {bToolbar} from './comps/Toolbar'
import {bNavigation} from './comps/Navigation'
import {app} from './comps/Hello'

if (!bToolbar && !bNavigation && !app) {
    console.error("unable to load components");
}