<template>
  <div>
    <div>
        <div v-if = "message == 'success'" v-bind:class = "{success: !error}">
          <p>Delete Post Success!</p>
        </div>
        <div v-else-if = "message == 'fail'" v-bind:class = "{fail: error} ">
          <p>Delete Post Fail!</p>
        </div>
    </div>
    <div class = 'post' v-if = 'posts.length > 0' v-for = 'post, i in posts' v-bind:key='post.id'>
        <h2>{{post.title}}</h2>
        <p>{{post.body}} made at {{post.created_at}}</p>
        <button class = 'btn btn-success' v-if = 'userID == post.user_id'>
          <router-link :to = "'updatePost/' + post.id" >Update Post</router-link>
        </button>
        <button class = 'btn btn-danger' v-if = 'userID == post.user_id' v-on:click = 'deleteBlog(post.id,i)'>Delete Post</button>
    </div>
    <div v-else>
      <h1>Nothing to show!</h1>
    </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
    data () {
        return {
            token: '',
            error: '',
            message: '',
        }
    },
    created()
    {
        this.token = this.Cookies.get('token');
        this.$store.dispatch('blog/getAllBlog');
    },
    computed:
    {
      posts()
      {
        return this.$store.state.blog.blogs;
      },
      ...mapGetters([
            'userID'
      ]),
    },
    methods:
    {
      deleteBlog:function(id,i)
      {
        const payload = {'id': id, 'i': i};
        if(this.$store.dispatch('blog/deleteBlog', payload))
        {
          this.error = false;
          this.message = 'success';
          setTimeout(()=> this.error = '',3000);
          setTimeout(()=> this.message = '',3000);
        }
        else 
        {
          this.error = true;
          this.message = 'fail';
          setTimeout(()=> this.error = '',3000);
          setTimeout(()=> this.message = '',3000);
        } 
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post
{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
a
{
    text-decoration: none;
    color: #fff;
}
</style>

