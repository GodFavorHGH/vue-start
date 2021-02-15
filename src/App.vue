<!--suppress ALL -->
<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <ul v-show="this.$route.path!='/'">
      <li v-for="(item,index) in this.menus" :key="index" @click="routerGo(item.menuId)">
        {{item.menuName}}
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  curRoute:'',
  data () {
    return {
      menus: [],
    }
  },
  mounted() {
    this.axios.post('http://localhost:9080/menu/menus',{}).then(res=>{
      console.log(res.data)
      if (res.data&&res.data.code==200){
        this.menus=res.data.data;
      }
    });
  },
  methods :{
    routerGo(menuId){
      if(menuId==this.curRoute){
        return
      }
      this.curRoute = menuId;
      //this.$router.push('/'+menuId)
      this.$router.push({name:menuId,params:{}})
    }
  }
}
//import AppHeader from './components/header.vue'
//import AppFooter from './components/footer.vue'
//export default {
  //name:'app',
  //components:{
    //AppHeader,
   // AppFooter
  //}
//}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
