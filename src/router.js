import { createRouter, createWebHistory } from "vue-router";

// Import views
import Login from "./views/Login.vue";
//import RequestForm from "./views/RequestForm.vue";

import AdminHome from "./views/AdminHome.vue";
import StudentHome from "./views/StudentHome.vue";
import AdminAdd from "./views/AdminAdd.vue"
import AdminAccomManage from "./views/AdminAccomManage.vue"
import AdminCatManage from "./views/AdminCatManage.vue"
import AdminCatEdit from "./views/AdminCatEdit.vue"
import AdminCatAdd from "./views/AdminCatAdd.vue"
import AdminUserManage from "./views/AdminUserManage.vue"
import AdminViewAccom from "./views/AdminViewAccom.vue"
import AdminStudentAccom from "./views/AdminStudentAccom.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/student",
      name: 'studentHome',
      component: StudentHome,
    },
    {
      path: "/admin",
      name: "adminHome",
      component: AdminHome,
    },
    {
      // :id is the id of the request which is being added to 
      path: '/admin/adminAdd/:id',
      name: 'adminAdd',
      component: AdminAdd,
      // props: {route} => {{ request: route.request.requestId}}
    },
    {
      path: '/admin/adminAccomManage/',
      name: 'adminAccomManage',
      component: AdminAccomManage,
    },
    {
      path: '/admin/adminCatManage/',
      name: 'adminCatManage',
      component: AdminCatManage,
    },
    {
      path: '/adminCatEdit/:accomCatId',
      name: 'adminCatEdit',
      component: AdminCatEdit,
      props: true,
    },
    {
      path: '/adminCatAdd/',
      name: 'adminCatAdd',
      component: AdminCatAdd,
    },
    {
      path: '/admin/adminUserManage/',
      name: 'adminUserManage',
      component: AdminUserManage,
    },
    {
      path: '/admin/adminViewAccom/',
      name: 'adminViewAccom',
      component: AdminViewAccom,
    },
    {
      path: '/admin/adminStudentAccom/',
      name: 'adminStudentAccom',
      component: AdminStudentAccom,
    },
    
    // Leaving these routes for now as an example
    /*{
      path: "/edit/:id",
      name: "edit",
      component: EditTutorial,
      props: true,
    },
    {
      path: "/add",
      name: "add",
      component: AddTutorial,
    },
    {
      path: "/view/:id",
      name: "view",
      component: ViewTutorial,
      props: true,
    },
    {
      path: "/addLesson/:tutorialId",
      name: "addLesson",
      component: AddLesson,
      props: true,
    },
    {
      path: "/editLesson/:tutorialId/:lessonId",
      name: "editLesson",
      component: EditLesson,
      props: true,
    },*/
    {
      path: "/StudentHome/:studentId",
      name: "StudentHome",
      component: StudentHome,
      props: true,
    },
  ],
});

export default router;
