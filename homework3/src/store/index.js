import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
      
    productList1:[
    {id: 1, time: "Nov 8 2021 14.04", postPic: "", postText: "4.1/5", price: 20, pic: null},
    {id: 2, time: "Oct 10 2021 11.04", postPic: "", postText: "4.3/5", price: 22, pic: null},
    {id: 3, time: "Sep 1 2021 20.56", postPic: " ", postText: "4/5", price: 13, pic: null},
    {id: 4, time: "Oct 22 2021 08.04" , postPic: "", postText: "4.2/5", price:18, pic: null},
    {id: 5, time: "Sep 4 2021 10.30" , postPic: "", postText: "4.2/5", price: 18, pic: null},
    {id: 6, time: "Oct 1 2021 13.04" , postPic: "", postText: "4.2/5", price: 18, pic: null},
    {id: 7, time: "Nov 27 2021 22.10" , postPic: "", postText: "4.2/5", price: 18, pic: null},
    {id: 8, time: "Oct 16 2021 21.08" , postPic: "", postText: "4.2/5", price: 18, pic: null},
    {id: 9, time: "Nov 9 2021 19.02" , postPic: "", postText: "4.2/5", price: 18, pic: null},
    {id: 10, time: "Nov 2 2021 18.04" , postPic: "", postText: "4.2/5", price: 18, pic: "https://steamuserimages-a.akamaihd.net/ugc/576705883574026928/0A4520123FFFF61AB858E68F06EE707A175E1522/?imw=512&imh=384&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"}
   ]},
   getters: {
    productListsale(){
        var productListsale = this.$store.state.productList.map(product => {
        return{ author: "** "+ product.author+ " **",
        price: product.price/2,
        book: product.book,
        goodreads: product.goodreads
        }
        }
        );
       return productListsale
       },
   }
});
