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
      title: '欢迎来到我的项目展示空间',
      subtitle: '专注于前端开发、WebGIS开发、数据可视化、移动端H5开发以及nodejs、python方向'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  width:100%;
  height:280px;
  background-color: #5699de;
}
.header .titleDiv{
  position: absolute;
  left:0;
  right:0;
  top:74px;
  width: 100%;
  text-align: center;

}
.header .titleDiv h2{
  color:#fff;
  text-shadow: 0 4px 8px rgba(7,17,27,.4);
  font-size:36px;
  line-height: 36px;
  letter-spacing: 10px;
  font-weight: 400;
  margin-top:0;
}
.header .titleDiv p{
  color:#fff;
  font-size:14px;
  font-weight: 200;
  text-shadow: 0 4px 8px rgba(7,17,27,.4);
  margin:0;
}
</style>
