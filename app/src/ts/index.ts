import Vue from 'vue'
import * as Vuetify from 'vuetify'
import * as Vuex from 'vuex'

Vue.use(<any>Vuetify);
Vue.use(<any>Vuex);

import {bToolbar} from './comps/Toolbar'
import {vNavigation} from './comps/Navigation'
import {app} from './comps/Hello'

if (!vNavigation && !bToolbar && !app) {
    console.error("unable to load components");
}