<script setup>
    import AccommodationServices from "../services/accommodationServices.js";
    import accomCatServices from "../services/accomCatServices";
    import { ref, onMounted } from 'vue';
    import router from '../router';

    const accoms = ref([]);
    const cats = ref([]);
    const select = ref([]);

    async function getAccommodations(){
        try {
            const response = await AccommodationServices.getAll();
            accoms.value = response.data;
            console.log(response)
        } catch (err) {
            console.log(err);
        }
    }
    async function getAccomCats(){
        try {
            const response = await accomCatServices.getAll();
            cats.value = response.data;
            setCategories();
            setDefaultCatValues();
            console.log('cats:', response.data[1].name)
        } catch (err) {
            console.log(err)
        }
    }
    function setCategories(){
        const uniqueCategories = new Set(cats.value.map(item => item.name));
        cats.value = Array.from(uniqueCategories).map(name => ({ name, accomCatId }));
    }
    function setDefaultCatValues() {
        select.value = accoms.value.map((accom) => accom.categoryName);
    }
    onMounted(async() =>{
        await getAccommodations();
        await getAccomCats();
        setDefaultCatValues();
    })

    function deleteCat(accomCatId){
    accomCatServices.delete(accomCatId)
        .then(() => {
            console.log('Category deleted successfully.');
            router.go();
        })
        .catch(error => {
            console.error('Error deleting category:', error);
            if (error.response) {
                console.log('Server responded with:', error.response.data);
            }
        });
}

    function editCat(accomCatId){
       
        router.push({ name: 'adminCatEdit', params: { accomCatId: accomCatId }});
    }
    function addCat(){
        router.push({ name: 'adminCatAdd'});
    }
</script>

<template>
    <div>
        <v-title class="text-h5" style="font-weight: bold;">Manage Categories</v-title>
    </div>
    <div>
        <v-btn class="mr-4" color="success" style="float:right" @click="addCat()">New Category</v-btn>
    </div>
    <div class="pa-4">
        <v-table>
            <thead>
                <tr>
                    <th class="text-left">
                        Title
                    </th>
                    <th class="text-left">
                        Email
                    </th>
                </tr>
            </thead>
        
            <tr v-for="(a, index) in cats" style="background-color: #D5DFE7;">
                <td class="pa-4">{{ a.name }}</td>
                <td class="pa-4">{{ a.email }}</td>
                <td>
               

                    <v-btn class="mr-4" color="error" style="float:right" @click="deleteCat(a.accomCatId)">delete</v-btn>
                    <v-btn class="mr-4" color="#F9C634" style="float:right" @click="editCat(a.accomCatId)">edit</v-btn>
                     </td>
            </tr>
        </v-table>
       
    </div>
</template>