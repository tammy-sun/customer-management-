<template>
  <div class="customers container">
    <alert v-if="alert" :message="alert"></alert>
      <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">

      <table class="table table-striped">
        <thead class="tou">
           <tr>
             <th>姓名</th>
             <th>电话</th>
             <th>邮箱</th>
             <th></th>
           </tr>
        </thead>
        <tbody>
<!--          <tr v-for="customer in customers">-->
          <tr v-for="customer in filterBy(customers,filterInput)">
            <td>{{customer.name}}</td>
            <td>{{customer.phone}}</td>
            <td>{{customer.email}}</td>
            <td><router-link class="btn btn-default" v-bind:to="'/customer/'+customer.id">详情</router-link></td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
  import alert from './alert'
  export default {
    name: 'customers',
    data () {
      return {
        customers:[],
        alert:'',
        filterInput:''
      }
    },
    created(){
      if(this.$route.query.alert){
        this.alert = this.$route.query.alert
      }
      this.fetchData();
    },
    updated(){
      this.fetchData();
    },
    methods:{
      // fetchData () {
      //   var self = this
      //   return axios.get('http://localhost:3000/users')
      //     .then(function (response) {
      //       self.customers = response.data
      //     })
      //     .catch(function (error) {
      //       self.fetchError = error
      //     })
      // }
      fetchData(){
        const  self=this
        this.$http.get('http://localhost:3000/users/')
          .then(function (response) {
            self.customers = response.data
          })
      },
      filterBy(customers,value){
        return customers.filter(function (customer) {
          return customer.name.match(value)
          
        })
      }
    },
    components:{
      alert
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-header{
    margin-top: 0px;
  }
  th,td{
    text-align: left;
  }
  #app{
    margin-top: 0px;
  }

</style>
