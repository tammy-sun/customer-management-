//获取所有用户的信息
http://localhost:3000/users
 
 
 //获取id为1的用户信息
http://localhost:3000/users/1
  
//获取公司的所有信息
http://localhost:3000/companies

//获取单个公司的所有信息
http://localhost:3000/companies/1


//获取公司所有id为3的用户
http://localhost:3000/companies/3/users


//根据公司名字获取信息
http://localhost:3000/companies?name=Apple
//根据多个名字获取信息
http://localhost:3000/companies?name=Apple&name=Google

//获取一页中只有两条数据
http://localhost:3000/companies?_page=1&_limit=2

//升序排序
http://localhost:3000/companies?_sort=name&_order=asc

//降序排序
http://localhost:3000/companies?_sort=name&_order=desc

//获取年龄30及30以上的
http://localhost:3000/users/age_gte=30
//获取年龄在30到40之间的
http://localhost:3000/users/age_gte=30&age_lte=40

//搜索信息,q=h,即所有包含h的都会被提出来
http://localhost:3000/users?q=h

