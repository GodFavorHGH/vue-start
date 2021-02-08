<!--suppress ALL -->
<template>
  <div id="register">
<!--    <router-view></router-view>-->
    <h2>注册页面</h2>
    <form id="form">
      <ul>
        <li>
          <em>用户名：</em>
          <input v-model="formData.name" type="text" placeholder="">
        </li><br>
        <li>
          <em>登陆密码：</em>
          <input v-model="formData.password" type="password" placeholder="">
        </li><br>
        <li>
          <em>手机号：</em>
          <input v-model="formData.phoneNo" type="text" placeholder="">
        </li><br>
        <li>
          <em>证件号：</em>
          <input v-model="formData.idNo" type="text" placeholder="">
        </li><br>
        <li>
          <em>证件类型：</em>
          <select v-model="formData.idType">
            <option v-for="item in idTypes" :value="item.value" :key="item.value">
              {{item.text}}
            </option>
          </select>
        </li><br>
        <li>
          <input type="button" value="提交" @click="register">
          <input type="button" value="返回" @click="back">
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  name: "register",
  msg:'',
  data(){
    return {
      idTypes:[
        {text:'身份证',value:'P00'},
        {text:'港澳通行证',value:'P09'},
      ],
      formData:{
        name:'',
        password:'',
        phoneNo:'',
        idNo:'',
        idType:''
      }
    }
  },
  methods:{
    back(){
      this.$router.push('/')
    },
    register(){
      if (!this.$validate.isPhoneNo(this.formData.phoneNo)){
        alert('手机号格式不符合要求，请重新输入！');
        return;
      }
      this.axios.post('http://localhost:9080/user/register', this.formData).then(res=>{
        if (res.data.code===200){
          if(window.confirm('用户注册成功，是否现在前往登陆？')){
            this.$router.push('/');
          }
        }
      });
    }
  }
}
</script>

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
