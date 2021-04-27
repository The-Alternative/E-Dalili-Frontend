<template>
    <div class="ProductDetalis" style="background-color:#e9ecf2">
        <div class="row">
            <div class="col-6"> 
            <img  class="rounded-circle" src="../../../public/img/w.jpg" style="width: 150px;height: 140px"/>
            </div>
            <div class="col-6"> 
            <select class="form-control" v-model="sortType" v-on:change="sortItem()">
                <option value="1" disabled>ترتيب</option>
                <option>من الأرخص الى الأغلى</option>
                <option value="space">من الأقرب الى الأبعد</option>
            </select>
            </div>

        </div>
            <div class="show-prod">
                                    <div
                                        class="store"
                                        v-for="store in stores.slice(7, 10)"
                                        v-bind:store="store"
                                        :key="store.id"
                                        :address="store.address"
                                    >
                                        <div class="row" style="direction: rtl;">
                                              <div class="col-1"><img
                                                class="rounded-circle"
                                                src="../../../public/img/market-logo.png"
                                                height="60"
                                            /></div>
                                    <div class="col-4">
                                            <h2>
                                                {{ store.title }}
                                            </h2>
                                            <span>{{ store.space }}m</span>
                                            </div>
                                              <div class="col-1">
                                            <img 
                                                class="img-open"
                                                style="margin-right:10px"
                                                src="../../../public/img/open.png"
                                                height="40"
                                            />
                                            </div>
                                    
                                                  <div class="col-2">ar</div>
                                                    <div class="col-2">ar ar</div>
                                             <div class="col-2">80.00 S.P</div>
                                        </div>
                                    </div>
             </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            details: {
                id: this.id,
                name: this.name,
                short_des:this.short_des,
                long_des: this.long_des,
                price: this.price,
            },
             sortType: '1',
                stores: this.$store.state.stores
        };
    },
    components: {
        
    },
    
    props: ['id', 'name', 'short_des','long_des', 'price'],
    computed: {
        
        product() {
            return this.$store.state.stores[0].products;
        },
        
    },methods:{
        sortItem() {
                if (this.sortType == 'space') {
                    this.stores = this.stores.sort((prev, curr) => prev.space - curr.space);
                }
    }}
 
};
</script>
<style lang="scss" scoped></style>
<style scoped>
.row {
    justify-content: center;
    margin: 0;
}
.form-control{
    width: 70%;
    margin-top: 25px;
    text-align: center;
}
.form-control{
    width: 70%;
    margin-top: 25px;
}
.store{
    margin: 20px 0;
}
.store .row .col-7,.col-2,.col-1{
    margin: auto;
}
.show-prod h2 {
    display: inline-block;
    margin: 0 20px 0 100px;
}


/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .show-prod h2 {
        display: inline-block;
        margin: 22px;
        font-size: 20px;
        font-weight: bold;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .show-prod h2 {
        font-size: 18px;
        margin: 10px;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .show-prod h2 {
        font-size: 20px;
        margin: 22px;
    }
}
</style>