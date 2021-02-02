<template>       
           <div>
                {{index}}
           </div>
</template>
<script>


export default {
    data(){
       return{
           index: this.$route.params.id,
        
       } 
    },
    
    
}
</script>