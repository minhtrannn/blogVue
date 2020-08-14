<template>
  <div>
      <nav>
        <p><router-link to = '/'>Blog</router-link></p>
        <ul class = "nav-menu">
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
            <div class="btn-group">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{name}}
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                    <button class="dropdown-item" type="button">
                        <a class="dropdown-item" href="http://localhost:8080/#" v-on:click = "logout">
                            Logout
                        </a>
                    </button>
                    <button class="dropdown-item" type="button">
                        <a class="dropdown-item" href="http://localhost:8080/#">
                            <router-link to = '/updateInfor' exact>Update Information</router-link>
                        </a>
                    </button>
                </div>
            </div>
        </div>
      </nav>
  </div>
</template>

<script>
// import Cookies from 'js.cookie.mjs'
// import Cookies from 'js-cookie'

import {mapGetters} from 'vuex';
export default {
  data () {
    return {
        account: 
        {
            email: '',
            password: '',
        }
    }
  },
  created()
  {
  },
  methods:
  {
      login:function()
      {
        this.$axios.post('http://systemjwt.beta/api/login' , {
            email: this.account.email,
            password: this.account.password
        }).then(data => {
            this.Cookies.set('token', data.data.access_token, {expires: 1});
            this.$router.push('/home');
        })
      },
      logout:function()
      {
          this.Cookies.remove('token');
          this.$store.dispatch('user/removeData');
          this.$router.push('/');
      },
  },
  computed: 
  {
      ...mapGetters([
            'name',
            'token'
      ]),
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

.nav-menu a 
{
    color: #fff;
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
    color: #212529;
}

.btn
{
    width: 105px;
    height: 25px;
        display: flex;
    align-items: center;
}

.dropdown-item 
{
    padding: 0;
}

button.dropdown-item 
{
    width: 100%;
    text-align: end;
    padding: 0px 12px;
    margin: 3px 0px;
}
</style>
