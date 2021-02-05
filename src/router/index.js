import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import err from "@/views/404.vue";

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
    },
    {
        path: "/guide",
        name: "Guide",
        component: () => import("@/views/NavView/Guide.vue"),
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/NavView/About.vue"),
    },
    {
        path: "/components",
        name: "Components",
        component: () => import("@/views/NavView/Components.vue"),
        redirect: "/components/button",
        children: [
            {
                path: "button",
                name: "Button",
                component: () => import("@/views/Button.vue"),
            },
            {
                path: "icon",
                name: "Icon",
                component: () => import("@/views/Icon.vue"),
            },
        ],
    },
    {
        path: "/more",
        name: "More",
        component: () => import("@/views/NavView/More.vue"),
    },
    {
        path: "/404",
        name: "404",
        component: err,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    // console.log('to',to);
    // console.log('from',from);
    let len = to.matched.length;
    if (to.matched[0]) {
        console.log("path", to.matched[len - 1].path);
        next();
    } else {
        console.log("error");
        next({ path: "/404" });
    }
    // if (to.meta.auth) {
    //     // 用户点击博客，该用户需要登陆
    //     if (localStorage.getItem('user')) {
    //         // 如果localStorage不为空，表示用户登陆完成
    //         // 直接放行
    //         next();
    //     } else {
    //         next({
    //             path: "/login"
    //         })
    //     }

    // } else {
    //     // 直接放行
    //     next(); //如果不调用页面会卡住
    // }
});
export default router;
