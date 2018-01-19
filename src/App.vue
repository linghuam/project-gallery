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

</style>
