<script setup>
    import AccommodationServices from "../services/accommodationServices.js";
    import { ref, onMounted } from 'vue';
    import router from '../router';

    const props = defineProps({
        accomID: {
            required: true,
        }
    });

    const accom = ref([]);
    const editedAccom = ref([]);

    console.log('props',props.accomID);

AccommodationServices.getOne(props.accomID)
    .then((response) => {
        console.log(props.accomID);
    });

    async function getAccom(){
        try {
            const response = await AccommodationServices.getOne(props.accomID);
            accom.value = response.data;
        } catch (err) {
            console.log(err);
        }
    }

    onMounted(async() =>{
        await getAccom();
    })

    /*
 await StudentAccomServices.getAllForStudent(searchValue.value)
                .then((response) => {
                    studentAccom.value = response.data;
                })
                .catch((err) => {
                    if(err.response && err.response.status === 404)
                        noDataMsg.value = `No data found for student with ID ${searchValue.value}`;
                });
        }
    */

    //Go and read the DB for the Accom


</script>

<template>
    <div>
        <v-title class="text-h5" style="font-weight: bold;">Edit Accommodation</v-title>
    </div>

    <div class="pa-4">
        
        <v-card style="background-color:#D5DFE7" class="pa-4">
            <div>
                <p class="pl-5" style="font-weight: bold;">Accommodation Title</p>
                <v-text-field class="pl-5 pr-5" v-bind="editedAccom" :placeholder="accom.title" ></v-text-field>
            </div>
            <div>
                <p class="pl-5" style="font-weight: bold;">Accommodation Description</p>
                <v-text-field class="pl-5 pr-5" v-bind="editedAccom" :placeholder="accom.description" ></v-text-field>
            </div>
            <div>
                <p class="pl-5" style="font-weight: bold;">Accommodation Category</p>
                <v-text-field class="pl-5 pr-5" v-bind="editedAccom" :placeholder="accom.categoryName" ></v-text-field>
            </div>
        </v-card>

        <div class="ma-6">
            <v-btn class="ml-4" style="float:right" @click="cancel()">cancel</v-btn>
            <v-btn class="mr-4" color="#F9C634" style="float:right" @click="save()">save</v-btn>
        </div>
    </div>
    
</template>