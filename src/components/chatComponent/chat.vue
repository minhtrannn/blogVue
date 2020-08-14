<template>
  <div>
    <div class = 'chat-container'>
      <div class = 'left-chat-container'>
          <div class = 'left-chat'>
            <div class = 'search-box'>
              <input type="text"> 
              <button class = 'button-search'>
                <svg style = "color:#fff;width: 15px;height: 15px;" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>
              </button>
            </div>
            <div class = 'list-chat'>
              <h5>Name</h5>
              <div class = 'status'>
                <svg height="25" width="25">
                  <circle cx="12.5" cy="12.5" r="5" stroke="black" stroke-width="3" fill="red" />
                </svg>
                <p>offline</p>
              </div>
            </div>
          </div>
      </div>
      <div class = 'right-chat-container'>
        <div class = 'right-chat'>
          <h3 class = 'chat-title'>Chat list</h3>
          <div class = 'chat-box'>
              <!-- <div class = 'sender'>
                
              </div> -->
          </div>
          <div class = 'send-message'>
            <form class = 'message-form'>
              <input class = 'message' type = "text">
              <button type = 'submit'>
                <svg style = "width:15px;height:15px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"/></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import io from 'socket.io-client';
import axios from 'axios';

$(function(){
  var socket = io('http://localhost:3000');
  $('.message-form').submit(function(e){
    e.preventDefault();
    // var object = {
    //   name: this.$store.state.user.name,
    //   message: $('.message').val(),
    // }
    console.log(axios.$store);
    socket.emit('chat message', $('.message').val());
    // $('.message').val();
    return false;
  })
  socket.on('chat message', function(msg){
      $('.chat-box').append($("<div style = 'sender'>").text(msg));
    });
})

export default {
    data () {
        return {

        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chat-container 
{
    height: 515px;
    padding: 65px 35px;
    display: flex;
}

.left-chat-container
{
  width: 35%;
  background: #444;
}

.left-chat 
{
  padding: 15px;
  height: 100%;
}

.right-chat 
{
  padding: 15px;
  height: 100%;
}


.right-chat-container
{
  width: 65%;
  border: 1px solid #212529;
}

.search-box input 
{
  background: #6c757d;
  height: 35px;
  border: 1px solid #6c757d;
}

.button-search
{
  background: #6c757d;
  width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #6c757d;
}

.search-box 
{
  display: flex
}

.list-chat 
{
  padding-top: 10px;
}

.status
{
  display: flex;
}

.chat-title
{
  height: 10%;
}

.chat-box
{
  height: 80%;
  overflow: scroll;
}

.send-message
{
  height: 10%;
  border: 1px solid #6c757d;
}

.send-message form 
{
  height: 100%;
  width: 97%;
  display: flex;
  align-items: center;
}

.send-message input 
{
  height: 100%;
  width: 98%;
}

.sender
{
    height: 30px;
    width: 50%;
    margin-left: 50%;
    border: 1px solid #212529;
    border-radius: 15px;
}
</style>
