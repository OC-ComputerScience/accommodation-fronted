<script setup>
    import AccomSemesterServices from "../services/accomSemesterServices";
    import { onMounted, ref } from 'vue';
    import router from '../router';

    const semesters = ref([]);
    const semester = ref("");

    async function getAllSemesters() {
        try {
            const response = await AccomSemesterServices.getAll();
            semesters.value = response.data;
            console.log('Semesters:', semesters.value);
        } catch (err) {
            console.error('Error fetching semesters:', err); 
        }
    }

    async function deleteSemester(semester) {
        // AccomSemesterServices.delete(semester);
        try {
            const response = await AccomSemesterServices.delete(semester);
            semesters.value = response.data;
            console.log(semesters.value);
        } catch (err) {
            console.log("Error: ", err);
        }
    }
    
    const editSemester = () => {
        router.push({name: ''});
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
                    <v-btn class="mr-4" color="#F9C634" style="float:right" @click="editSemester(semester.semesterId)">edit</v-btn>
                </td>
            </tr>
        </v-table>
    </div>
</template>