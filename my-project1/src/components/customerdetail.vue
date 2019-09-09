<template>
  <div class="customerdetail container">
    <span><router-link to="/" class="btn btn-default back">返回</router-link></span>
    <h1 class="page-header">{{customer.name}}
    <span class="pull-right">
        <router-link class="btn btn-primary" :to="'/edit/'+customer.id">编辑</router-link>
        <button class="btn btn-danger" @click="deletecustomer(customer.id)">删除</button>

    </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-asterisk">{{customer.phone}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-asterisk">{{customer.email}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-asterisk">{{customer.education}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-asterisk">{{customer.graduation}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-asterisk">{{customer.profession}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-asterisk">{{customer.profile}}</span></li>

    </ul>
  </div>
</template>

<script>
    export default {
        name: "customerdetail",
      data () {
        return {
          customer: ''
        }
      },
      created(){
        this.fetchData(this.$route.params.id)
      },
      methods:{
        // fetchData (id) {
        //   var self = this
        //   return axios.get('http://localhost:3000/users/'+id)
        //     .then(function (response) {
        //       console.log(response);
        //       self.customer = response.data
        //     })
        //     .catch(function (error) {
        //       self.fetchError = error
        //     })
        // }

        fetchData(id){
          const self = this
          this.$http.get('http://localhost:3000/users/'+id)
            .then(function (response) {
              self.customer = response.data
            })
        },
        deletecustomer(id){
          this.$http.delete('http://localhost:3000/users/'+id)
            .then(function (response) {
              this.$router.push({path:'/',query:{alert:'用户删除成功'}});
            })
        }

      }
    }
</script>

<style scoped>
.list-group{
  text-align: left;
}
  .back{
    margin-left: -1090px;
  }
</style>
