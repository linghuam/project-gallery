<template>
  <div class="footer">
    footer
  </div>
</template>

<script>
export default {
  name: 'myFooter',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  display: none;
  position: relative;
  left:0;
  right:0;
  margin:0 10px;
  text-align: center;
}
</style>
