import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getter';
var req = require.context("./modules", false, /\.js$/);
// req.keys().forEach(function(key){
//     req(key);

// });

const modules = req.keys().reduce((modules, modulePath) => {
    const moduleName = (modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')).replace(/-([a-z])/g, g => g[1].toUpperCase());
    const value = req(modulePath);
    modules[moduleName] = value.default; 
    return modules;
}, {}) 

const store = new Vuex.Store({
    modules,
    getters
})

export default store;
