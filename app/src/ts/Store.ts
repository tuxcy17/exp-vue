import * as Vuex from 'vuex'
import * as _ from 'underscore'

const mockProducts = [
    {
        id: "1",
        name: "GEO ANC",
        logo: "home",
        _artifact_id: ""
    }, {
        id: "2",
        name: "GEO AC",
        logo: "grade",
        _artifact_id: ""
    }, {
        id: "3",
        name: "GEO EP",
        logo: "help",
        _artifact_id: ""
    }
];

const mockVersions = [
    {
        id: "1",
        productId: "1",
        name: "GEO-ANC 1.0.9",
        description: "V1",
        versionProduct: "",
        versionGeo: "1.0.9",
        links: [],
        _artifact_id: ""
    }, {
        id: "2",
        productId: "1",
        name: "",
        description: "V2",
        versionProduct: "",
        versionGeo: "1.0.10",
        links: [],
        _artifact_id: ""
    }, {
        id: "3",
        productId: "1",
        name: "",
        description: "V2",
        versionProduct: "",
        versionGeo: "1.0.11",
        links: [],
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
    drawer: any,
    product: any,
    version: any,
    versions: any[]
}

interface VersionPropertyI {

}

const store = new Vuex.Store({
    state: {
        products: mockProducts,
        versions: mockVersions,
        ihm: (<IHMPropertyI>{
            drawer: false,
            product: null,
            versions: [],
            version: null
        })
    },
    mutations: {
        toggleDrawer (state) {
            state.ihm.drawer = !state.ihm.drawer;
        },
        toggleProduct (state, id) {
            let prodDict = (<any>_).indexBy(state.products, 'id');
            let versionsDict = (<any>_).groupBy(state.versions, 'productId');

            state.ihm.product = prodDict[id];
            state.ihm.versions = versionsDict[id] || [];
        },
        toggleProductVersion (state, id) {
            debugger;
            state.ihm.version = id;
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