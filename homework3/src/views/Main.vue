<template>
<div class="Main">
<button v-on:click="IncreasePrice "> Increase price </button>
<button v-on:click="DecreasePrice"> Decrease price </button>
<MainPost> </MainPost>


</div>
</template>
<script>
import MainPost from "@/components/MainPost.vue";

/*export default {
name: "Main",
 components: { MainPost},
 props: ["productList"]}*/
export default {
name: "Main",
 components: { MainPost},
 props: ["productList"],
methods: {
IncreasePrice: function() {
 this.$store.state.productList.forEach(product => {
 product.price -= 1;
 });
 },
DecreasePrice() {
this.$store.state.productList.forEach(product => {
 product.price += 1;
 });
 }}}
</script>

