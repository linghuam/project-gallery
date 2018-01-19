<template>
  <div class="header">
    <div class="titleDiv">
      <h2 class="title"> {{ title }} </h2>
      <p class="subtitle"> {{ subtitle }} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
  data() {
    return {
      title: 'Welcome to my project gallery',
      subtitle: '专注于前端开发、WebGIS开发、数据可视化、移动端H5开发以及nodejs、python方向'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  width:100%;
  height:300px;
  background-color: #8ec1ca;
}
.header .titleDiv{
  position: absolute;
  left:0;
  right:0;
  top:95px;
  width: 100%;
  text-align: center;

}
.header .titleDiv h2{
  margin-top:0;
}
.header .titleDiv p{
  margin:0;
}
</style>
