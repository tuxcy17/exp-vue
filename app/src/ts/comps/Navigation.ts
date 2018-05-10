import Vue from 'vue';

function test(title: any) {
    alert(title)
}

// Define a new component called button-counter
const vNavigation = Vue.component('v-p-navigation', {
    data: function () {
        return {
            items: [
                { title: 'Home', icon: 'dashboard', action: test },
                { title: 'About', icon: 'question_answer', action: test }
            ],
            right: null
        }
    },
    methods: {

    },
    template: `
  <v-navigation-drawer permanent fill-height>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Application
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list dense class="pt-0">
      <v-list-tile v-for="item in items" :key="item.title" @click=item.action(item.title)>
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>`
});

export {vNavigation}