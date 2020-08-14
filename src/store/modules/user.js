import {getUserInfor} from '@/api/user';
import {updateInforUser} from '@/api/user';
import { removeData } from 'jquery';
import Cookies from 'js-cookie';
const state = {
    name: '',
    id: '',
    email: '',
    token: ''
}

const mutations = {
    SET_NAME: (state, name) => {
        state.name = name;
    },
    SET_EMAIL: (state, email) => {
        state.email = email;
    },   
    SET_ID: (state, id) => {
        state.id = id;
    },
    SET_TOKEN: (state,token) => {
        state.token = token;
    },
    UNSET_NAME: (state) => {
        state.name = '';
    },
    UNSET_EMAIL: (state) => {
        state.email = '';
    },   
    UNSET_ID: (state) => {
        state.id = '';
    },
    UNSET_TOKEN: (state) => {
        state.token = '';
    },
}

const actions = {
    getUserInfor({commit}){
        getUserInfor().then(data => {
            commit('SET_NAME', data.data.name);
            commit('SET_EMAIL', data.data.email);
            commit('SET_ID', data.data.id);
            commit('SET_TOKEN', Cookies.get('token'));
        })
    },

    updateInforUser({commit}, user){
        // console.log(1);
        commit('SET_NAME', user.name);
        commit('SET_EMAIL', user.email);
        updateInforUser(user.name, user.email, user.password);
    },

    removeData({commit})
    {
        commit('UNSET_NAME');
        commit('UNSET_EMAIL');
        commit('UNSET_ID');
        commit('UNSET_TOKEN');
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions    
}