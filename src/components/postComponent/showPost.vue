<template>
  <div>
    <div class = 'post' v-if = 'posts.length > 0' v-for = 'post, i in posts' v-bind:key='post.id'>
        <h2>{{post.title}}</h2>
        <p>{{post.body}} made at {{post.created_at}}</p>
        <button class = 'btn btn-success' v-if = 'user_id == post.user_id'>
          <router-link to = '/updatePost'>Update Post</router-link>
        </button>
        <button class = 'btn btn-danger' v-if = 'user_id == post.user_id' v-on:click = 'deletePost(post.id,i)'>Delete Post</button>
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
        // this.$axios.get('http://systemjwt.beta/api/post', 
        // {
        //   headers: {
        //     'Authorization': 'Bearer ' + this.token
        //   }
        // }).then(data => {
        //     this.posts = data.data;
        //     console.log(data);
        // })
        this.$store.commit('getAllBlog');
    },
    computed:
    {
      posts()
      {
        console.log(this.$store.state.blogs);
        return this.$store.dispatch('getAllBlog');
      }
    },
    methods:
    {
      deletePost:function(id,i)
      {
        this.$axios.get('http://systemjwt.beta/api/deletePost/'+ id, 
        {
          headers: {
            'Authorization': 'Bearer ' + this.token
          }
        }).then(() => {
          this.posts.splice(i,1);
        })
        
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

