<template>
  <div class="content">
    <div class="categories">
       <a :class="[{active: index === currentCategory}, 'categoryItem']" v-for = "(item, index) in categoriesData" :key="index" @click="onCategoryClick(index)">
         <span> {{ item.name }} </span>
       </a>
    </div>
    <div class="projects">
       <div class="projectItem" v-for = "item in projectsData" :key="item.name">
          <img src="" alt="tupian">
          <div class="projectItem-name"> {{ item.name }} </div>
          <div class="projectItem-description"> {{ item.description }} </div>
          <a class="projectItem-detail" href="">查看项目详情</a>
          <div class="projectItem-url">
            <a :href="item.demoUrl" target="_blank">在线演示</a>
            <a :href="item.githubUrl" target="_blank">Github</a>
          </div>
       </div>
    </div>
  </div>
</template>

<script>
import {Categories, Projets} from '../assets/js/data'

export default {
  name: 'myContent',

  data() {
    return {
      categoriesData: [],
      currentCategory: 0
    };
  },

  mounted(){
    this.categoriesData = Categories;
    this.currentCategory = 0;
  },

  computed:{
    projectsData(){
      let category = Categories[this.currentCategory];
      return this.getProjectsByCategory(category.name);
    }
  },

  methods:{
     onCategoryClick(index){
       this.currentCategory  = index;
     },

     getProjectsByCategory(categoryName){
       let temp = [];
       for (let i = 0, len = Projets.length; i < len; i++){
         if (categoryName === "All" || categoryName === Projets[i].category){
           temp.push(Projets[i]);
         }
       }
       return temp;
     }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  position: relative;
  left:0;
  right:0;
}
.categories{
  position: relative;
  top: -50px;
  left:0;
  right:0;
  height:100px;
  margin:0 20px;
  padding: 28px 24px 0;
  background-color:#5adab1;
  text-align: center;
}
.categories .categoryItem {
  cursor:pointer;
}
.categories .categoryItem.active{
  color:red;
}
.projects{
  position: relative;
  left:0;
  right:0;
  margin:0 14px;
  text-align: center;
}
.projectItem{
  width:280px;
  height:330px;
  overflow: hidden;
  display: inline-block;
  /* margin-right: 10px;
  margin-bottom: 10px; */
  margin:10px;
  background-color:#ffff00;
}
</style>
