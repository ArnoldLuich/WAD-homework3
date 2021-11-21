<template>
 <div id= "comp-list-two">
 <h1> Book list two</h1>
 <p class="item" v-for="product in productList1" :key="product.id">

<span v-if!=null class="user">  <img alt="User" src="https://cdn-icons-png.flaticon.com/512/149/149071.png"> </span>
 <span class="time"> {{product.time}}</span><br>

 <!--<span class="book"> <b>Book:</b> {{product.book}} </span> <br>  IMAGE -->

 <span class="goodreads"> <b>Goodreads:</b> {{product.goodreads}} </span>

 <span class="price"> Price: € {{product.price}} </span> 
 <!--<span v-if!=null class="test">  <img alt="Post" src="''+{{product.pic}}"> </span>-->
 <button v-on:click="IncreasePrice "> Increase price </button>
<button v-on:click="DecreasePrice"> Decrease price </button>
 </p>
</div>

</template>

<script>
export default {
name: "product_compo_2",
data: function() {
return {
}},
computed: {

productList1(){return this.$store.state.productList1}},

productListsale(){return this.$store.getters.productListsale}
}
</script>

<style scoped>
.item{
 background: rgb(253, 253, 253);
 margin-left: 30%;
 margin-right: 30%;
 margin-bottom: 5px;
 padding: 3px 5px;}
#comp-list-two{
 background: #1862c9;
 box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
 margin-bottom: 30px;
 padding: 10px 20px;
}
#comp-list-two ul{
 padding: 0;
 list-style-type: none;
}
#comp-list-two li{
 margin-right: 10px;
 margin-top: 10px;
 padding: 20px;
 background: rgba(255,255,255,0.7);
}
.price{
 font-weight: bold;
 color: #860CE8;
 display: block;
}
.time{
    font-weight: 100;
    font-size: 70%;
}
#user{
width:50%;
height:50%;
}
</style>