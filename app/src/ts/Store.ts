import * as Vuex from 'vuex'

const mockProducts = [
    {
        id: "",
        name: "",
        logo: "",
        _artifact_id: ""
    }, {
        id: "",
        name: "",
        logo: "",
        _artifact_id: ""
    }, {
        id: "",
        name: "",
        logo: "",
        _artifact_id: ""
    }
];

const mockVersions = [
    {
        id: "",
        name: "",
        description: "",
        versionProduct: "",
        versionGeo: "",
        _artifact_id: ""
    }, {
        id: "",
        name: "",
        description: "",
        versionProduct: "",
        versionGeo: "",
        _artifact_id: ""
    }, {
        id: "",
        name: "",
        description: "",
        versionProduct: "",
        versionGeo: "",
        _artifact_id: ""
    }
];

const mockVersion = {
    id: "",
    name: "",
    description: "",
    versionProduct: "",
    versionGeo: "",
    _artifact_id: ""
};

interface IHMPropertyI {
    // activeTool: any,
    drawer: any,
}

const store = new Vuex.Store({
    state: {
        products: mockProducts,
        versions: mockVersions,
        ihm: (<IHMPropertyI>{
            drawer: false
        })
    },
    mutations: {
        toggleDrawer (state) {
            state.ihm.drawer = !state.ihm.drawer;
        }
    },
    getters: {
        getIHM: () => {
            debugger;
            return "test"
            // return this.state.ihm;
        },
        getProducts: () => {
            debugger;
            // return this.state.products;
        }
    }
});

export {store}