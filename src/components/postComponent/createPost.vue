<template>
  <div class = 'create-post'>
      <div>
          <div v-if = "message == 'success'" v-bind:class = "{success: !error}">
            <p>Created Success!</p>
          </div>
          <div v-else-if = "message == 'fail'" v-bind:class = "{fail: error} ">
            <p>Created Fail!</p>
          </div>
      </div>
      <p>Title</p>
      <input v-model.lazy = 'post.title' type = "text" name = "title" placeholder = "Title">

      <p>Body</p>
      <textarea v-model.lazy = 'post.body' name="body" cols="30" rows="15"></textarea>

      <button v-on:click.prevent = 'createPost'>Create</button>
      <div>
        <p class = 'text-danger' v-if = "created === 'Please enter your title !'">
          {{created}}
        </p>
        <p class = 'text-danger' v-else-if = "created === 'Please enter your body !'">
          {{created}}
        </p>
        <p class = 'text-success' v-else-if = "created === 'Successfully Created !' ">
          {{created}}
        </p>
        <p class = 'text-danger' v-else-if = "created === 'Please enter all fields !'">
          {{created}}
        </p>
      </div>
  </div>
</template>

<script>

export default {
    data () {
        return {
          token: '',
          user_id: '',
          created: '',
          post: 
          {
             title: '',
             body: ''
          },
          error: '',
          message: '',
        }
    },
    created()
    {
      this.token = this.Cookies.get('token');
      this.user_id = this.Cookies.get('user_id');
      // console.log(this);
    },
    methods :
    {
      createPost:function()
      {
        if(this.post.title === '')
        {
          this.created = 'Please enter your title !';
          return 1; 
        }
        else if(this.post.body === '')
        {
          this.created = 'Please enter your body !';
          return 1; 
        }
        else if(this.post.title === '' || this.post.body === '')
        {
            this.created = 'Please enter all fields !';
            return 1; 
        }
        if(this.$store.dispatch('blog/createBlog', this.post))
        {
          this.error = false;
          this.message = 'success';
          setTimeout(()=> this.error = '',1000);
          setTimeout(()=> this.message = '',1000);
          setTimeout(()=> this.$router.push({name: 'showPost'}), 2000 )
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
