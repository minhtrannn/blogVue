import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { getAllBlog } from '@/api/blog';
import { createBlog } from '@/api/blog';
import { updateBlog } from '@/api/blog';
import { deleteBlog } from '@/api/blog';

const state = {
    blogs: [],
}

const mutations = {
        SET_BLOGS: (state, blogs) => {
            state.blogs = blogs;
        }    
}

const actions = {
    getAllBlog({commit}){
        getAllBlog().then(data => {
            commit('SET_BLOGS', data.data)
        })
    },

    createBlog({commit}, post){
        createBlog(post.title, post.body);
    },

    updateBlog({commit}, post){
        updateBlog(post.title, post.body, post.id);
    },

    deleteBlog({state}, payload){
        if(deleteBlog(payload.id))
        {
            state.blogs.splice(payload.i,1);
        }
    }
}

export default {
    state,
    mutations,
    actions
}