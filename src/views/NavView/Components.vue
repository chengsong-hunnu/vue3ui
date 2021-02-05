<template>
  <div class="home">
    <navbar></navbar>
    <sidebar></sidebar>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";
import sidebar from "@/components/Sidebar";
import { GithubOutlined } from "@ant-design/icons-vue";
import { reactive, ref, toRefs } from "vue";
//首先的从vue-router中导入useRouter
import { useRouter } from "vue-router";
export default {
  name: "Components",
  components: {
    Navbar,
    GithubOutlined,
    sidebar,
  },
  setup(props) {
    const nav = reactive(["指南", "组件", "关于", "更多"]);
    const router = useRouter();
    
    return {
      nav,
    };
  },
};
</script>

<style lang="less" scoped>
.home {
  background-color: #fff;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
