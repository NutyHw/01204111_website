import Vue from "vue";
import VueRouter from "vue-router";
import VueCookies from 'vue-cookies';

Vue.use(VueRouter);
Vue.use(VueCookies);

const routes = [
  {
    path: "/",
    name: "PreHome",
    component: () => import('../views/PreHome.vue'),
    meta: {
      title: "CPE34 - PreHome",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/Login.vue'),
    meta: {
      title: "CPE34 - Login",
    },
  },
  {
    path : "/register",
    name : "Register",
    component: () => import('../views/Register.vue'),
    meta : {
      title : "CPE34 - Register"
    }
  },
  {
    path : "/pretest",
    name : "Pretest",
    component : () => import('../views/Pretest.vue'),
    meta : {
      title : "CPE34 - Pretest",
    }
  },
  {
    path: "/test/:testId",
    name: "test",
    component: () => import('../views/Test.vue'),
    meta: {
      title: "CPE34 - Test",
      Auth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach( (to, from, next) => {
  if ( to.name === "Pretest" && from.name !== "Login" ){
    next({ name : "Login" });
  }
  else if ( to.name === "test" && from.name !== "Pretest" ){
    next({ name : "Login" });
  } else {
    next();
  }
})

export default router;
