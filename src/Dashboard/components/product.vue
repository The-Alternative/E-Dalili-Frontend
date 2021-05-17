<template>

    <div class="product">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
        <div><input style="margin: 0px 10px" type="checkbox">{{id}}</div>
        <img  v-lazy="`${image}`">
        <div>{{name}}</div>
        <div>
            <i v-if="is_appear == 'Appear' " class="fa fa-check"></i>
            <i v-else class="fa fa-times"></i>
        </div>
        <div class="icon">
          <i class="fa fa-pencil-square"></i>

            <i class="fa fa-trash"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'product',
    props:['id','name','image','is_appear','quantity'],
      computed: {
        maxPrice(){
            let maxPrice = 0 ;
            let len = this.$store.state.Product[0].store.length;
               var priceArray = [];
            for(var i=0; i < len; i++){
                priceArray.push(this.$store.state.Product[0].store[i].pivot.price);
            }
            maxPrice = Math.max(...priceArray);
            console.log(maxPrice);
            return maxPrice;
        },
       minPrice(){
            let minPrice = 0 ;
            let len = this.$store.state.Product[0].store.length;
            var priceArray = [];
            for(var i=0; i < len; i++){
               priceArray.push(this.$store.state.Product[0].store[i].pivot.price); 
            }
            minPrice = Math.min(...priceArray);
            console.log(minPrice);
          
            return minPrice;
        },
        }
}

</script>
<style>
.product{
    display: contents;
    
}
.product div{
    margin: auto;
}
.product img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 20px 0;
}
div i{
    cursor: pointer;
    margin: 0 5px;
}
.icon i:hover{
    color: red;
    font-size: 20px;
}

</style>