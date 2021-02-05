<template>
    <div class="about">
        <navbar></navbar>
        <h1>这是一个关于我自己的介绍页面</h1>
        name: {{ name }} qq:{{ qq }} phone:{{ phone }}
        <br />
        <hr />
        ajax:{{ ajaxa }}
    </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import axios from "axios"
import { reactive, ref, toRefs } from "vue"
import { getInfo } from "@/api/about"
import { onBeforeMount } from "vue"
export default {
    name: "about",
    components: {
        Navbar
    },

    setup() {
        const myInfo = reactive({
            name: "蒋晟松",
            age: "20",
            qq: "1659289050",
            phone: "13206078281",
            email: "1659289050@qq.com",
            school: "hunnu"
        })

        let ajaxa = reactive({
            data: ""
        })

        onBeforeMount(async () => {
            // await axios
            //     .get("/api/post", {
            //         params: {
            //             id: 2
            //         }
            //     })
            //     .then((res) => {
            //         console.log("数据是:", res)
            //         ajaxa.data = res.data
            //     })
            //     .catch((e) => {
            //         console.log("获取数据失败")
            //     })
            getInfo({ id: 1 }).then((res) => {
                ajaxa.data = res.data
            })
        })
        return {
            ...toRefs(myInfo),
            ajaxa
        }
    }
}
</script>

<style scoped lang="less"></style>
