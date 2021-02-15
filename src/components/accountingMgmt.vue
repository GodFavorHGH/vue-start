<!--suppress ALL -->
<template>
  <div class="hello">
    <router-view></router-view>
    <form id="form">
      <ul>
        <li>
          <em>标题：</em>
          <input v-model="formData.title" type="text">
        </li>
        <li>
          <em>日期范围：</em>
          <input v-model="formData.beginDate" type="date">&nbsp;至&nbsp;
          <input v-model="formData.endDate" type="date">
        </li>
        <li>
          <em>排序类型：</em>
          <select v-model="formData.orderType">
            <option v-for="item in orderTypes" :value="item.value" :key="item.value">
              {{item.text}}
            </option>
          </select>
        </li>
        <li>
          <em>类型：</em>
          <select v-model="formData.type">
            <option v-for="item in types" :value="item.value" :key="item.value">
              {{item.text}}
            </option>
          </select>
        </li><br>

        <br>
        <li>
          <input type="button" value="查询" @click="query">
          <input type="button" value="重置" @click="reset">
        </li>
      </ul>
      <table class="bills">
        <thead>
          <tr>
            <th>记录日期</th>
            <th>标题</th>
            <th>收支方式</th>
            <th>支付类型</th>
            <th>金额</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in this.bills">
            <td>{{item.recordDate}}</td>
            <td>{{item.title}}</td>
            <td>{{item.ioType}}</td>
            <td>{{item.payType}}</td>
            <td>{{item.amount}}</td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      types:[
        {value:'1',text:'收入'},
        {value:'0',text:'支出'},
      ],
      orderTypes:[
        {value:'d1',text:'按日期倒序'},
        {value:'d2',text:'按日期正序'},
        {value:'a1',text:'按金额倒序'},
        {value:'a1',text:'按金额正序'},
      ],
      formData:{
        title:'',
        type:'',
        orderType:'',
        beginDate:'',
        endDate:''
      },
      bills:[
        {recordDate:'2021-02-09',title:'tiiiit',ioType:'1',payType:'1',amount:'11'}
      ],
    }
  },
  methods :{
    query(){
      this.axios.post('http://localhost:9080/bill/bills', this.formData).then(res=>{
          if (res.data&&res.data.code===200){
            this.bills = res.data.data;
          } else {
            alert(res.data.message)
          }
        }).catch(function (error) {
        });
    },
    reset(){
      for (const key in this.formData) {
        this.formData[key] = ''
      }
    },
  },
  mounted() {
    //this.axios.post('', this.formData).then(res=>{

    //});
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

.bills{
  width:100%;
}
.bills th{
  padding: 5px;
}
.bills td{
  padding: 5px;
}
</style>
