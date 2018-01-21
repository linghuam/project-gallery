<template>
  <div class="content">
    <div class="categories">
       <a :class="[{active: index === currentCategory}, 'categoryItem']" v-for = "(item, index) in categoriesData" :key="index" @click="onCategoryClick(index)">
         <span> {{ item.name }} </span>
       </a>
    </div>
    <div class="projects">
       <div class="projectItem" v-for = "item in projectsData" :key="item.name">
          <div class="projectItem-img"><img src="static/1.jpg" alt="tupian"></div>
          <div class="projectItem-name"> {{ item.name }} </div>
          <div class="projectItem-description">
            {{ item.description }}
            <a class="projectItem-gotodetail" :href="item.details">详情...</a>
          </div>
          <div class="projectItem-url">
            <a v-if="item.demoUrl" :href="item.demoUrl" target="_blank">在线演示</a>
            <a v-if="item.githubUrl" :href="item.githubUrl" target="_blank">Github</a>
          </div>
       </div>
    </div>
  </div>
</template>

<script>
import { Categories, Projets } from '../assets/js/data';

export default {
  name: 'myContent',

  data() {
    return {
      categoriesData: [],
      currentCategory: 0
    };
  },

  mounted() {
    this.categoriesData = Categories;
    this.currentCategory = 0;
  },

  computed: {
    projectsData() {
      const category = Categories[this.currentCategory];
      return this.getProjectsByCategory(category.name);
    }
  },

  methods: {
     onCategoryClick(index) {
       this.currentCategory = index;
     },

     getProjectsByCategory(categoryName) {
       const temp = [];
       for (let i = 0, len = Projets.length; i < len; i++) {
         if (categoryName === 'All' || categoryName === Projets[i].category) {
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
  background-color:#7cb4ec;
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
  color:#ffffff;
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
  position: relative;
  width:280px;
  height:330px;
  overflow: hidden;
  display: inline-block;
  margin:10px;
  background-color:#ffffff;
  border: 1px solid silver;
  border-radius: 6px;
  box-shadow: 5px 5px silver;
}
.projectItem:hover .projectItem-img img{
  transform: scale(1.2);
}
.projectItem .projectItem-img{
  width:100%;
  height:96px;
  overflow: hidden;
}
.projectItem .projectItem-img img{
  width:100%;
  height:96px;
}
.projectItem .projectItem-img img{
  transition: all .3s linear;
}
.projectItem .projectItem-name{
  text-align:left;
  font-size:16px;
  padding:20px 10px;
}
.projectItem .projectItem-description{
  text-align: left;
  font-size: 14px;
  padding: 10px;
  padding-top:0;
  font-weight: 100;
}
.projectItem .projectItem-description a{
  text-decoration: none;
  color:#3b38ff;
}
.projectItem .projectItem-url{
  position: absolute;
  bottom:24px;
  left:20px;
  right:20px;
}
.projectItem .projectItem-url a{
  text-decoration: none;
  font-size:14px;
  font-weight: 200;
  color:#3b38ff;
  line-height: 24px;
}
.projectItem .projectItem-url a:first-child{
  float: left;
}
.projectItem .projectItem-url a:last-child{
  float: right;
}
</style>
