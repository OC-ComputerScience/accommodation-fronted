<script setup>
    import AccomSemesterServices from "../services/accomSemesterServices";
    import EditSemesterDialog from "../components/editSemesterDialog.vue";
    import { onMounted, ref } from 'vue';
    import router from '../router';

    const semesters = ref([]);
    const isEditDialogOpen = ref(false); 

    async function getAllSemesters() {
        try {
            const response = await AccomSemesterServices.getAll();
            semesters.value = response.data;
        } catch (err) {
            console.error('Error fetching semesters:', err); 
        }
    }

    async function deleteSemester(semesterId) {
        try {
            await AccomSemesterServices.delete(semesterId);
            await getAllSemesters();
        } catch (err) {
            console.error("Error deleting semester:", err);
        }
    };
    
    const editSemester = () => {
        isEditDialogOpen.value = true;
    };

    const addSemester = () => {
        router.push({name: ''});
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
    
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
        <v-table>
                <thead>
                    <tr>
                        <th class="text-left">
                            Semester
                        </th>
                        <th class="text-left">
                            Start Date
                        </th>
                    </tr>
                </thead>

            <tr v-for="semester in semesters" style="background-color: #D5DFE7;">
                <td class="pa-4">{{ semester.semester }}</td>
                <td class="pa-4">{{ formatDate(semester.startDate) }}</td>
                <td class="pa-4">
                    <v-btn class="mr-4" color="error" style="float:right" @click="deleteSemester(semester.semesterId)">delete</v-btn>
                    <!-- <EditSemesterDialog :dialogVisible="isEditDialogOpen()" /> -->
                    <!-- <EditSemesterDialog :dialogVisible="editSemester" :semesterId="semester.semesterId" /> -->
                </td>
            </tr>
        </v-table>
    </div>
    <EditSemesterDialog :dialogVisible="isEditDialogOpen" /> <!--Remove when testing is done-->
</template>