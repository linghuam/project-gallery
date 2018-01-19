<template>
  <div class="header">
    <h2 class="title"> {{ title }} </h2>
    <h3 class="subtitle"> {{ subtitle }} </h3>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
  data() {
    return {
      title: 'Welcome to my project gallery',
      subtitle: '前端开发、WebGIS开发、数据可视化方向从业者'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
