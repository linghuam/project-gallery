<template>
  <div id="app">
    <myHeader/>
    <router-view/>
    <myFooter/>
  </div>
</template>

<script>
import myHeader from '@/components/header';
import myFooter from '@/components/footer';

export default {
  name: 'App',
  components: {
    myHeader,
    myFooter
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
body{
  margin:0;
  padding:0;
  font-family: 微软雅黑;
  font-size: 16px;
}
#app{
  position: absolute;
  top:0;
  left:0;
  right:0;
  width:100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #fff;
}
</style>
