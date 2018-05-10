import Vue from 'vue'
import * as Vuetify from 'vuetify'
import * as Vuex from 'vuex'

Vue.use(<any>Vuetify);
Vue.use(<any>Vuex);

import {bVersionsContent} from './comps/VersionsContent'
import {bContent} from './comps/Content'
import {bToolbar} from './comps/Toolbar'
import {bDefaultContent} from './comps/DefaultContent'
import {bNavigation} from './comps/Navigation'
import {app} from './comps/Hello'

if (!bToolbar && !bDefaultContent && !bContent && !bNavigation && !bVersionsContent && !app) {
    console.error("unable to load components");
}