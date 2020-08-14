<template>
  <div class = "table-infor">
      <h3>Update Information</h3>
      <div>
          <div v-if = "message == 'success'" v-bind:class = "{success:true}">
            <p>Created Success!</p>
          </div>
          <div v-else-if = "message == 'fail'" v-bind:class = "{fail:true}">
            <p>Created Fail!</p>
          </div>
      </div>
      <div>
        <span class = "title">Name: </span>
        <span class = "detail">{{name}}</span>
        <input type="text" v-model.lazy = 'user.name'>
      </div>
      <div>
        <span class = "title">Email: </span>
        <span class = "detail">{{email}}</span>
        <input type="text" v-model.lazy = 'user.email'>
      </div>
      <div>
        <span class = "title">Password: </span>
        <span class = "detail">*********</span>
        <input type="password" v-model.lazy = 'user.password'>
      </div>
      <div>
        <button v-on:click = "updateInforUser">Update</button>
      </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
    data () {
        return {
            user:{
              name: '',
              email: '',
              password: '',
            },
            message: '',
        }
    },
    computed: {
      ...mapGetters([
            'name',
            'email'
      ])
    },
    methods :
    {
      updateInforUser:function()
      {
        if(this.$store.dispatch('user/updateInforUser',this.user))
        {
          this.message = 'success';
          setTimeout(()=> this.message = '',1000);
          this.Cookies.remove('token');
          this.$store.dispatch('user/removeData');
          this.$router.push('/');
          // setTimeout(()=> this.$router.push({name: 'register'}), 2000 );
        }
        else 
        {
          this.message = 'fail';
          setTimeout(()=> this.message = '',1000);
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title 
{
  display: inline-block;
  width: 150px;
}

.detail
{
    display: inline-block;
    width: 210px;
}

.table-infor
{
    position: relative;
    height: 300px;
    width: 650px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
}

input 
{
    /* width: 100%; */
    border: 1px solid #444;
    height: 30px;
    padding: 0px 10px;
}

button 
{
    background-color: #444;
    color: #fff;
    height: 32px;
    width: 95px;
    border-radius: 5px;
    margin-top: 15px;
}

input 
{
    margin-top: 15px;
}

</style>
