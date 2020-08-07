<template>
  <div class = 'create-post'>
      <div v-if = 'user_id == post.user_id'>
        <p>Title</p>
        <input v-model.lazy = 'post.title' type = "text" name = "title" placeholder = "Title">

        <p>Body</p>
        <textarea v-model.lazy = 'post.body' name="body" cols="30" rows="15"></textarea>

        <button v-on:click.prevent = 'updatePost'>Update</button>
        <div>
            <p class = 'text-danger' v-if = "updated === 'Please enter your title !'">
            {{updated}}
            </p>
            <p class = 'text-danger' v-else-if = "updated === 'Please enter your body !'">
            {{updated}}
            </p>
            <p class = 'text-success' v-else-if = "updated === 'Successfully Updated !' ">
            {{updated}}
            </p>
            <p class = 'text-danger' v-else-if = "updated === 'Please enter all fields !'">
            {{updated}}
            </p>
        </div>
      </div>
      <div v-else>
          <h3>This page doesn't exist</h3>
      </div>
      <div>

      </div>
  </div>
</template>

<script>

export default {
    data () {
        return {
          token: '',
          updated: '',
          id: this.$route.params.id,
          post: 
          {
             title: '',
             body: '',
             user_id: '',
          }
        }
    },
    created()
    {
      this.token = this.Cookies.get('token');
      this.user_id = this.Cookies.get('user_id');
      this.$axios.get('http://systemjwt.beta/api/post/' + this.id, {
        headers: {
            'Authorization': 'Bearer ' + this.token
        }
      }).then(data => {
          console.log(data);
          this.post.title = data.data.title;
          this.post.body = data.data.body;
          this.post.user_id = data.data.user_id;
      })
      
    },
    methods :
    {
      updatePost:function()
      {
        if(this.post.title === '')
        {
          this.updated = 'Please enter your title !';
          return 1; 
        }
        else if(this.post.body === '')
        {
          this.updated = 'Please enter your body !';
          return 1; 
        }
        else if(this.post.title === '' || this.post.body === '')
        {
            this.updated = 'Please enter all fields !';
            return 1; 
        }
        this.$axios.post('http://systemjwt.beta/api/updatePost/' + this.id , 
        {
            title: this.post.title,
            body: this.post.body
        }, 
        {
          headers: {
            'Authorization': 'Bearer ' + this.token
          }
        }).then(data => {
          if(data.status === 200)
          {
            this.updated = 'Successfully Updated !';
          }
        });
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.create-post
{
  padding: 20px 50px;
}

.create-post input 
{
    width: 100%;
    border: 1px solid #444;
    height: 35px;
    padding: 0px 10px;
}

.create-post textarea
{
    width: 100%;
    border: 1px solid #444;
}

p
{
    margin-top: 5px;
    margin-bottom: 3px;
}

button 
{
    background-color: #444;
    color: #fff;
    height: 32px;
    width: 95px;
    border-radius: 5px;
    margin-top: 7px;
}

</style>
