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

.success
{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #28a745;
    background: #28a745;
    color: #fff;
    border-radius: 8px;
    opacity: 70%;
    transition:  all 0.2s ease-in-out;
}

.success p 
{
    margin: auto;
    padding: 5px;
    width: 158px;
}

.fail 
{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #b21f2d;
    background: #b21f2d;
    color: #fff;
    border-radius: 8px;
    opacity: 70%;
    text-align: center;
    transition:  all 0.2s ease-in-out;
}

.fail p 
{
    margin: auto;
    padding: 5px;
    width: 158px;
}
</style>
