<script setup>
    import AccomSemesterServices from "../services/accomSemesterServices";
    import { onMounted, ref } from 'vue';
    import router from '../router';

    const semesters = ref([]);
    const semester = ref("");
    const message = ref("");

    async function getAllSemesters() {
        try {
            const response = await AccomSemesterServices.getAll();
            semesters.value = response.data;
            console.log('Semesters:', semesters.value);
        } catch (err) {
            console.error('Error fetching semesters:', err); 
        }
    }
    
    const deleteSemester = (semesterToDelete) => {
        AccomSemesterServices.delete(semesterToDelete.id)
        .then((response) => {
            semesters.value = response.data;
            console.log("Delete Successful");
            getAllSemesters();
        })
        .catch((e) => {
            if (e.response) {
                message.value = e.response.data.message;
                console.log("Delete NOT Successful:", e.response.data.message);
            } else {
                console.error("Delete NOT Successful: Unknown error occurred");
            }
        });
    };

    
    const editSemester = (semester) => {
        AccomSemesterServices.update(semester.id)
        .then((response) => {
            semesters.value = response.data;
        })
        .catch((e) => {
            message.value = e.response.data.message;
        })
    };

    const addSemester = () => {
        router.push({name: ''});
        // AccomSemesterServices.addSemester(data) 
        //     .then((response) => {
        //         semesters.value = response.data;
        //         console.log(response.data);
        //     })
        //     .catch((e) => {
        //         message.value = e.response.data.message;
        //     })
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
                        <!-- <th class="text-left">
                            Year
                        </th> -->
                    </tr>
                </thead>

            <!-- <tr v-for="(semester, index) in semesters" style="background-color: #D5DFE7;"> -->
            <tr v-for="semester in semesters" style="background-color: #D5DFE7;">
                <td class="pa-4">{{ semester.semester }}</td>
                <!-- <td>{{ semester.year }} </td> -->

                <td class="pa-4">
                    <v-btn class="mr-4" color="error" style="float:right" @click="deleteSemester(semester)">delete</v-btn>
                    <v-btn class="mr-4" color="#F9C634" style="float:right" @click="editSemester(semester)">edit</v-btn>
                </td>
            </tr>
        </v-table>
    </div>
</template>