<template>
  <div>
    <div class = 'post' v-if = 'posts.length > 0' v-for = 'post, i in posts' v-bind:key='post.id'>
        <h2>{{post.title}}</h2>
        <p>{{post.body}} made at {{post.created_at}}</p>
        <button class = 'btn btn-success' v-if = 'user_id == post.user_id'>
          <router-link :to = "'updatePost/' + post.id" >Update Post</router-link>
        </button>
        <button class = 'btn btn-danger' v-if = 'user_id == post.user_id' v-on:click = 'deleteBlog(post.id,i)'>Delete Post</button>
    </div>
  </div>
</template>

<script>



export default {
    data () {
        return {
            token: '',
            user_id: '',
        }
    },
    created()
    {
        this.token = this.Cookies.get('token');
        this.user_id = this.Cookies.get('user_id');
        this.$store.dispatch('blog/getAllBlog');
        // console.log(this.$store.dispatch('getAllBlog'));
    },
    computed:
    {
      posts()
      {
        return this.$store.state.blogs;
      }
    },
    methods:
    {
      deleteBlog:function(id,i)
      {
        const payload = {'id': id, 'i': i};
        return this.$store.dispatch('deleteBlog', payload);   
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

