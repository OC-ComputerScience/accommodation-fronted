<script setup>
    import accomCatServices from "../services/accomCatServices";
    import { ref, onMounted } from 'vue';
    import accommodationServices from "../services/accommodationServices";
    import router from '../router';

    let catName = ref('');
   
    function save(){
        let catData = {
            name: catName.value,   
        };

        accomCatServices.create(catData);
        router.push({ name: 'adminCatManage'});
    }
    function cancel(){
        router.push({ name: 'adminCatManage'});
    }
</script>

<template>
    <div>
        <v-title class="text-h5" style="font-weight: bold;">Add Category</v-title>
    </div>

    <div class="pa-4">
        
        <v-card style="background-color:#D5DFE7" class="pa-4">
           
            <div>
                <p class="pl-5" style="font-weight: bold;">Category Name</p>
                <v-text-field class="pl-5 pr-5" label="enter new category name" v-model="catName"></v-text-field>
            </div>
            
        </v-card>

        <div class="ma-6">
            <v-btn class="ml-4" color="primary" style="float:right" @click="cancel()">cancel</v-btn>
            <v-btn class="mr-4" color="button_blue" style="float:right" @click="save()">save</v-btn>
        </div>
    </div>
</template>