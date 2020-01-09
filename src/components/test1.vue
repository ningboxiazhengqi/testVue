<template>
    <div class="hello">
        <div class="hello_t1 s-flex-center">
            <img src="~assets/img/hxjxq.jpg" alt="">
            {{msg}}
        </div>
    </div>
    
  </template>
  
  <script>
    export default {
      name: 'test1',
      data() {
        return {
          msg: 'Welcome to Your Vue.js 1'
        }
      }
    }
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
     @import  '~@/assets/css/hello.scss';
    .hello {
      h1 {
        font-size: 0.5rem;
      }
    }
  
    .div1 {
      color: $primary;
    }
  
    .div2 {
      @include success;
    }
  
  </style>
  