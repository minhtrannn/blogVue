import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        blogs: [],
    },
    mutations: {
        getAllBlog(data)
        {
            this.blogs = data;
        }
    },
    actions: {
        getAllBlog()
        {
            this.$axios.get('http://systemjwt.beta/api/post', 
            {
                headers: {
                    'Authorization': 'Bearer ' + this.Cookies.get('token')
                }
            }).then(data => {
                context.commit('getAllBlog', data)
            })
        }
    }
})