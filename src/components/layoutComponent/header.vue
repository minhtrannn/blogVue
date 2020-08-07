<template>
  <div>
      <nav>
        <p><router-link to = '/'>Blog</router-link></p>
        <ul>
            <li><router-link to = '/createPost' exact>Create Post</router-link></li>
            <li><router-link to = '/showPost' exact>Show Post</router-link></li>
        </ul>
        <form v-if = "token === '' || typeof token == 'undefined'">
            <label for = "username"></label>
            <input type = "email" v-model.lazy = 'account.email' name = "email" placeholder = "Email">
            <label for = "password"></label>
            <input type = "password"  v-model.lazy = 'account.password' name = "password" placeholder = "Password">
            <button  v-on:click.prevent = "login">Login</button>
        </form>
        <div v-else>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{person.name}}</button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="http://localhost:8080/#" v-on:click = "logout">Logout</a>
                </div>
            </div>
        </div>
      </nav>
  </div>
</template>

<script>
// import Cookies from 'js.cookie.mjs'
// import Cookies from 'js-cookie'
export default {
  data () {
    return {
        token: '',
        user_id: '',
        person: 
        {
            name: '',
        },
        account: 
        {
            email: '',
            password: '',
        }
    }
  },
  created()
  {
      this.token = this.Cookies.get('token');
      this.person.name = this.Cookies.get('name');
      this.user_id = this.Cookies.get('user_id');
  },
  methods:
  {
      checkAuthen:function()
      {
          console.log(1);
      },
      login:function()
      {
        this.$axios.post('http://systemjwt.beta/api/login' , {
            email: this.account.email,
            password: this.account.password
        }).then(data => {
            this.Cookies.set('token', data.data.access_token, {expires: 7});
            this.Cookies.set('name', data.data.name, {expires: 7});
            this.Cookies.set('user_id', data.data.user_id, {expires: 7});
            this.person.name = data.data.name;
            this.token = data.data.access_token;
            this.user_id = data.data.user_id;
        })
      },
      logout:function()
      {
          this.Cookies.remove('token');
          this.Cookies.remove('name');
          this.token = '';
          this.name = '';
          this.user_id = '';
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav
{
    background: #444;
    padding: 14px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav form 
{
    display: flex-end;
}

input
{
    height: 22px;   
    margin: 0px 5px;
}

p
{
    color: #fff;
    font-size: 25px;
    font-weight: bold;
    margin: 0;
}

button 
{
    height: 22px;
    border: none;
    border-radius: 3px;
    width: 55px;
}

.dropdown button 
{
    width: 118px;
    padding: 0;
}

.router-link-active
{
    text-decoration: none;
    color: #fff;
}

ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}

li{
    display: inline-block;
    margin: 0 10px;
    color: #fff;
}

a 
{
    text-decoration: none;
    color: #fff;
}
</style>
