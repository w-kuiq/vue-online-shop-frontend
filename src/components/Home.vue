<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
    <product-list></product-list>
  </div>

</template>

<script>
import ProductList from '@/components/products/Productlist.vue';
import axios from 'axios' // 引入axios
export default {
    name:'home',
    data(){
        return{
            msg:'Welcome to your vue.js'
        }
    },
    components: {
      'product-list': ProductList
    },
    mounted() {
        axios.get('/mock/news').then(res => { // url即在mock.js中定义的
          console.log(res.data) // 打印一下响应数据
        })
    }

}
</script>