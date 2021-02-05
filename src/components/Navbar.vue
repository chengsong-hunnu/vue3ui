<template>
  <div>
    <header class="head">
      <div class="mylogo">
        <img src="@/assets/img/logo.png" class="logo" />
        <span class="title">myui</span>
      </div>
      <ul class="nav">
        <li
          v-for="(item, index) in nav"
          :key="item.name"
          class="nav-item"
          @click="goto(index)"
          :class="{ active: item.isActive }"
        >
          <a>{{ item.name }}</a>
        </li>

        <li class="nav-item">
          <a href="http://www.github.com" style="github">
            <img src="@/assets/img/github-fill.png" />
          </a>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
import { GithubOutlined } from "@ant-design/icons-vue";
import { reactive, ref, toRefs, onMounted } from "vue";
//首先的从vue-router中导入useRouter
import { useRouter } from "vue-router";
export default {
  name: "Navbar",
  components: {},
  setup(props) {
    const nav = reactive([
      {
        name: "指南",
        path: "/guide",
        isActive: false
      },
      {
        name: "组件",
        path: "/components",
        isActive: false
      },
      {
        name: "关于",
        path: "/about",
        isActive: false
      },
      {
        name: "更多",
        path: "/more",
        isActive: false
      }
    ]);
    // let isActive = ref(false)
    const router = useRouter();

    onMounted(() => {
      let path = router.currentRoute.value.path;
      for (let index in nav) {
        if (path.includes(nav[index].path)) {
          nav[index].isActive = true;
        }
      }
    });

    function goto(i) {
      let path = nav[i].path;
      console.log();
      router.push({
        path: path
      });
    }
    return {
      nav,
      goto
      // isActive
    };
  }
};
</script>

<style lang="less" scoped>
.head {
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 10%;
  text-align: center;
  box-shadow: 0px 0px 15px 0px #8888;
  margin-bottom: 3rem;

  @media screen and (min-width: 660px) {
    .logo {
      width: 2rem;
      height: 2rem;
      margin-left: 3rem;
    }

    .title {
      margin-left: 1.8rem;
      font-size: 1.1rem;
      font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
      font-weight: 600;
    }

    .nav {
      // height: 100%;
      line-height: 3rem;
      background: transparent;
      padding: 0;
      margin-bottom: 5px;
      margin-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      .active {
        border-bottom: 2px solid skyblue;
      }

      .nav-item {
        margin: 0 1rem 0 4rem;
        list-style: none;
        cursor: pointer;
        color: skyblue;
        font-size: 1.1rem;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }
    }
  }

  @media screen and (max-width: 659px) {
    .mylogo {
      margin: 0.7rem 0;

      .logo {
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 1rem;
      }
    }
    .title {
      margin-left: 1.8rem;
      font-size: 1.1rem;
      font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
      font-weight: 600;
    }
    .nav {
      // height: 100%;
      line-height: 1rem;
      background: transparent;
      padding: 0;
      margin-bottom: 5px;
      margin-right: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .active {
        border-bottom: 2px solid skyblue;
      }

      .nav-item {
        margin: 0 1rem 0 1rem;
        list-style: none;
        cursor: pointer;
        color: skyblue;
        font-size: 1.1rem;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }
    }
  }
}
</style>
