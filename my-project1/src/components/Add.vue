<template>
  <div class="add container">

    <alert v-if="alert" :message="alert" ></alert>

    <h1 class="page-header">添加用户</h1>
    <form v-on:submit="addCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name">
        </div>
        <div class="form-group">
          <label>电话</label>
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
        <button type="submit" class="btn btn-primary">添加</button>

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
      methods:{
        addCustomer(){
          if (!this.customer.name|| !this.customer.phone||!this.customer.email) {
             this.alert = '请添加对应的信息'
          }
          else{
            let  newCustomer = {
              name:this.customer.name,
              phone:this.customer.phone,
              email:this.customer.email,
              education:this.customer.education,
              graduation:this.customer.graduation,
              profession:this.customer.profession,
              profile:this.customer.profile,
            }
              this.$http.post('http://localhost:3000/users',newCustomer)
                .then(function (response) {
                  this.$router.push({path:'/',query:{alert:'用户信息添加成功'}})
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
.form-group{
  text-align: left;
}
</style>
