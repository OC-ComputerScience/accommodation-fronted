<script setup>
    import AccomSemesterServices from "../services/accomSemesterServices";
    import semesterDialog from "../components/semesterDialog.vue";
    import { onMounted, ref } from 'vue';
    // import router from '../router';

    const semesters = ref([]);
    const isEditDialogOpen = ref(false); 

    async function getAllSemesters() {
        try {
            const response = await AccomSemesterServices.getAll();
            semesters.value = response.data.map(semester => ({
                ...semester,
                startDate: formatDate(semester.startDate), 
                endDate: formatDate(semester.endDate) 
            }));
        } catch (err) {
            console.error('Error fetching semesters:', err); 
        }
    };

    async function deleteSemester(id) {
        try {
            await AccomSemesterServices.delete(id);
            console.log("ID: ", id);
            await getAllSemesters();
        } catch (err) {
            console.error("Error deleting semester:", err);
        }
    };

    const addSemester = () => {

    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const headers = [
        { title: 'Semester', key: 'semester' },
        { title: 'Start Date', key: 'startDate'},
        { title: 'End Date', key: 'endDate'},
        { title: " ", key: "actions", align:"end", sortable: false }
    ];
    
    onMounted(async() => {
        getAllSemesters();
    });
</script>

<template>
    <div>
        <v-title class="text-h5" style="font-weight: bold;">Manage Semesters</v-title>
    </div>
        <br>
    <div>
        <v-btn class="mr-4" color="success" style="float:right" @click="addSemester()">Add Semester</v-btn>
    </div>
        <br>
    <div class="pa-4">
        <v-data-table
            :headers="headers"
            :items="semesters"
            sortable
            >
            <template v-slot:[`item.actions`]="{ item }">
                <v-btn class="ma-2" color="primary" style="float:right;" @click="deleteSemester(item.id)">Delete
                </v-btn>
                <v-btn class="ma-2" color="yellow" style="float:right;" @click="">Edit
                </v-btn>
                <!-- <semesterDialog :dialogVisible="isEditDialogOpen" /> --> <!--Not working good enough-->
            </template>
        </v-data-table>
    </div>
</template>