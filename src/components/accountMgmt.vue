<!--suppress ALL -->
<template>
  <div class="hello">
    <h2>jizhang</h2>
    <router-view></router-view>
    <form id="form">
      <ul>
        <li>
          <em>登陆用户：</em>
          <input v-model="formData.phone" type="text">
        </li><br>
        <li>
          <em>日期：</em>
          <input type="text" v-model="formData.date">
        </li><br>
        <li>
          <em>登陆密码：</em>
          <input v-model="formData.password" type="password">
        </li>
        <li>
          <input type="button" value="登陆" @click="login">
          <input type="button" value="注册" @click="register">
        </li>
      </ul>
    </form>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      formData:{
        //phone:'',
        //password:''
        phone:'18888888888',
        password:'admin',
        date:''
      }
    }
  },
  methods :{
    login(){
      this.axios.post('http://localhost:9080/user/login', this.formData).then(res=>{
          if (res.data&&res.data.code===200){
            console.log(res.data.data)
            this.$router.push({name:'home',params:res.data.data})
          } else {
            alert(res.data.message)
          }
        }).catch(function (error) {
        });
    },
    register(){
      this.$router.push('/register')
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
