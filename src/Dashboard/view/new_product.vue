<template>
    <div class="parent">
        <div class="option_dash">
            <select v-model="selected">
                <option value="catlog" disabled>catlog</option>
                <option value="Product">Product</option>
                <option value="Catogeries">Catogeries</option>
                <option value="Brands">Brands</option>  
                <option value="Custom field">Custom field</option>  
            </select>
        </div>
        <div class="contain">
       new product
           
        </div>
        </div>
</template>

<script>


export default {
     name: 'new_product',
         components:{
      
    },
    data () {
        return {
             
        };
    },
    computed: {
        
    }
};
</script>
<style>
.parent{
    width: 100%;
    height: auto;
    display: grid;
    grid-template-areas:"option selected selected new_product new_product . . . . ."
    "option contain contain contain contain contain contain contain contain contain";
}
.option_dash{
    grid-area: option;
    background-color: #ccc;
}


.selected{
    grid-area: selected;
    margin: 10px;
    padding: 10px;

}
.contain{
    width: 100%;
    grid-area: contain;
}
</style>
