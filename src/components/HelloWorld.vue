<template>
  <div class="hello" style="background: red;">
    <router-view></router-view>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
          <button @click="hello">hello</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods :{
    hello(){
      const postData = {
        startIndex:0,
        pageSize:10
      }
      this.axios.post('http://localhost:9080/account/paginationQuery', postData).then(function (response) {
          console.log(response.data);
        }).catch(function (error) {
          console.log(error.data);
        });
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
