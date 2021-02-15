<template>
  <div class="hello">
    <router-view></router-view>
    <form id="form">
      <ul>
      </ul>webpack.base.conf.js
    </form>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      userInfo: this.$route.params,
      menus: this.$route.params.menus,
    }
  },
  methods :{
    routerGo(menuId){
      this.$router.push({name:'/'+menuId,params:this.$route.params})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
