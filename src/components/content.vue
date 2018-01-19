<template>
  <div class="content">
    <div class="categories">
       <a :class="[{active: index === currentCategory}, 'categoryItem']" v-for = "(item, index) in categoriesData" :key="index" @click="onCategoryClick(index)">
         <!-- <i class="el-icon-edit"></i> -->
         <span> {{ item.name }} </span>
         <!-- <div class="activeline"></div> -->
       </a>
    </div>
    <div class="projects">
       <div class="projectItem" v-for = "item in projectsData" :key="item.name">
          <img class="projectItem-img" src="static/1.jpg" alt="tupian">
          <div class="projectItem-name"> {{ item.name }} </div>
          <div class="projectItem-description"> {{ item.description }} </div>
          <a class="projectItem-gotodetail" href="">查看项目详情</a>
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

/* 分类列表 */
.categories{
  position: relative;
  top: -50px;
  left:0;
  right:0;
  margin:0 20px;
  background-color:#5adab1;
  text-align: center;
}
.categories .categoryItem {
  cursor:pointer;
  display: inline-block;
  width:100px;
  height:80px;
  margin: 0 16px;
  text-align: center;
  transition: font-size .1s ease-in;
}
.categories .categoryItem.active{
  color:red;
}
.categories .categoryItem:hover{
  font-size:20px;
}
.categories .categoryItem span
{
  display: block;
  line-height: 80px;
}
 /* 项目列表 */
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
  margin:10px;
  background-color:#ffff00;
}
.projectItem .projectItem-img{
  width:100%;
  height:96px;
}
.projectItem .projectItem-name{}
.projectItem .projectItem-description{}
.projectItem .projectItem-name{}
.projectItem .projectItem-gotodetail{}
.projectItem .projectItem-url{}

</style>
