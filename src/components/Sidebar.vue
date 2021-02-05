<template>
  <div class="sidebar">
    <a-layout id="components-layout-demo-top-side-2">
      <a-layout>
        <a-layout-sider width="10rem" style="background: #fff" >
          <a-menu
            mode="inline"
            :style="{ height: '100%', borderRight: 0 }"
            v-model:selectedKeys="selectedKeys"
            v-model:openKeys="openKeys"
          >
            <a-sub-menu :key="item.meta" v-for="item in state">
              <template #title>
                <span> <user-outlined />{{ item.main }} </span>
              </template>
              <!-- 注意下面的key -->
              <a-menu-item
                :key="item.main + i"
                v-for="(child, i) in item.children"
                @click="jump(child, i)"
              >
                {{ child + " " }}{{ item.trans[i] }}
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout style="padding: 0 0px 0 2px">
          <!-- <a-breadcrumb style="margin: 5px 0"> </a-breadcrumb> -->
          <a-layout-content
            :style="{
              background: '#fff',
              padding: '2px',
              margin: 0,
              minHeight: '280px',
            }"
          >
            <!--<myui-main></myui-main>-->
            <keep-alive>
              <router-view />
            </keep-alive>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons-vue";
import MyuiMain from "../views/Patch";
import { reactive, ref, toRefs } from "vue";
//首先的从vue-router中导入useRouter
import { useRouter } from "vue-router";
export default {
  name: "Sidebar",
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    MyuiMain,
  },
  setup(props) {
    const router = useRouter();
    const state = reactive([
      {
        main: "General",
        meta: "nav1",
        children: ["button", "icon"],
        trans: ["按钮", "图标"],
      },
      {
        main: "Layout",
        meta: "nav2",
        children: ["Grid", "Layout", "Space"],
        trans: ["栅格", "布局", "间距"],
      },
      {
        main: "Navigation",
        meta: "nav3",
        children: ["Menu", "PageHeader", "Pagination"],
        trans: ["导航菜单", "页头", "分页"],
      },
    ]);
    const ant = reactive({
      selectedKeys: ["General0"],
      collapsed: false,
      openKeys: ["nav1"],
    });

    function jump(to, index) {
      // router.push({
      //     path: `/components/${to}`
      // })
      // 注意这里没有使用path:'/'+to，而是直接使用to，因为加了`/`代表的是从根路径开始，如localhost/button，无法简单配合嵌套路由使用
      // 直接使用就是简化了嵌套路由的使用方式，直接替换最后面的一个路径，
      // 如当前为localhost:8080/components/button，变为localhost:8080/components/icon
      router.push({
        path: to,
      });
    }
    return {
      ...toRefs(ant),
      state,
      jump,
    };
  },
};
</script>

<style lang="less" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  margin: 0;
  padding: 0;
}
</style>
