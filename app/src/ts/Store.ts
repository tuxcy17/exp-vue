import * as Vuex from 'vuex'

interface IHMPropertyI {
    // activeTool: any,
    leftMenu: any,
}

const store = new Vuex.Store({
    state: {
        ihm: (<IHMPropertyI>{
            leftMenu: false
        })
    },
    mutations: {

    },
    getters: {
        getIHM: () => {
            // return this.state.ihm;
        }
    }
});

export {store}