import { createRouter, createWebHistory } from "vue-router";

// Import views
import Login from "./views/Login.vue";
//import RequestForm from "./views/RequestForm.vue";

import AdminHome from "./views/AdminHome.vue";
import StudentHome from "./views/StudentHome.vue";
import AdminAdd from "./views/AdminAdd.vue"
import AdminAccomManage from "./views/AdminAccomManage.vue"
import AdminCatManage from "./views/AdminCatManage.vue"
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
    
  
    {
      path: "/StudentHome/:studentId",
      name: "StudentHome",
      component: StudentHome,
      props: true,
    },
  ],
});

export default router;
