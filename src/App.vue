<template>
  <div class = 'app'>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>

import header from './components/layoutComponent/header';
export default {
    components:
    {
        'app-header': header
    },
}
</script>

<style>
* 
{ 
  margin: 0; 
  padding: 0;
  border:none
}
</style>
