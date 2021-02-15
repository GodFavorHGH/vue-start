<!--suppress ALL -->
<template>
  <div class="hello">
    <h1>modify</h1>
    <router-view />
    <form id="form">
      <ul>
        <li>
          <em>登陆用户：</em>
          <input v-model="formData.phone" type="text">
        </li><br>
        <li>
          <em>登陆密码：</em>
          <input v-model="formData.password" type="password">
        </li><br>
        <li>
          <input type="button" value="提交" @click="submit">
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  name: 'personalCenter',
  data () {
    return {
      formData:{
        //phone:'',
        //password:''
        id:19,
        phone:'',
        password:'',
        name:'sss'
      },
    }
  },
  methods :{
    submit(){
      const dataSuffix = 'id='+this.formData.id+'&'+'password='+this.formData.password+'&'+'name='+this.formData.name;
      this.axios.post('http://localhost:9080/user/update2?'+dataSuffix).then(res=>{
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
