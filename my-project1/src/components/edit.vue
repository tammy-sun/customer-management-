<template>
  <div class="edit container">

    <alert v-if="alert" :message="alert" ></alert>

    <h1 class="page-header">编辑用户</h1>
    <form v-on:submit="updateCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name">
        </div>
        <div class="form-group">
          <label>电话 </label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email">
        </div>
        <div class="form-group">
          <label>学历</label>
          <input type="text" class="form-control" placeholder="education" v-model="customer.education">
        </div>
        <div class="form-group">
          <label>毕业学校</label>
          <input type="text" class="form-control" placeholder="graduation" v-model="customer.graduation">
        </div>
        <div class="form-group">
          <label>职业</label>
          <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <textarea class="form-control" rows="10"  v-model="customer.profile"></textarea>
        </div>
        <router-link to="/customers"></router-link>
        <button type="submit" class="btn btn-primary">确认</button>

      </div>
    </form>
  </div>
</template>

<script>
  import alert from './alert'
  export default {
    name: "add",

    data() {
      return {
        customer: {},
        alert:''
      }
    },
    created(){
      this.fetchCustomer(this.$route.params.id)
    },
    methods:{
      fetchCustomer(id){
        const self = this
        this.$http.get('http://localhost:3000/users/'+id)
          .then(function (response) {
            self.customer = response.data
          })

      },


      updateCustomer(){
        if (!this.customer.name|| !this.customer.phone||!this.customer.email) {
          this.alert = '请添加对应信息'
        }
        else{
          let  updateCustomer = {
            name:this.customer.name,
            phone:this.customer.phone,
            email:this.customer.email,
            education:this.customer.education,
            graduation:this.customer.graduation,
            profession:this.customer.profession,
            profile:this.customer.profile,
          }
          this.$http.put('http://localhost:3000/users/'+this.$route.params.id,updateCustomer)
            .then(function (response) {
              this.$router.push({path:'/',query:{alert:'用户信息更新成功'}})
            })
          e.preventDefault();
        }
        e.preventDefault();
      }
    },
    components:{
      alert
    }
  }
</script>

<style scoped>

</style>
