<template>
<div id='login'>
    <div class="form">
        <h2 class="title">晟松</h2>
        <a-form layout="vertical" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
            <a-form-item class="item">
                <a-input v-model:value="username" placeholder="Username">
                    <template #prefix>
                        <UserOutlined style="color:rgba(0,0,0,.25)" />
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item class="item">
                <a-input v-model:value="password" type="password" placeholder="Password">
                    <template #prefix>
                        <LockOutlined style="color:rgba(0,0,0,.25)" />
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item class="item-button">
                <a-button type="primary" html-type="submit" class="btn">
                    登录
                </a-button>
                <a-button type="primary" class="btn">
                    注册
                </a-button>
            </a-form-item>
            {{username}}|{{password}}
        </a-form>

    </div>

</div>
</template>

<script>
import {
    Button
} from 'ant-design-vue';
import {
    UserOutlined,
    LockOutlined
} from '@ant-design/icons-vue';
import {
    reactive,
    ref,
    toRefs,
} from 'vue'
//首先的从vue-router中导入useRouter
import {
    useRouter
} from "vue-router";
export default {
    name: 'Login',
    components: {
        UserOutlined,
        LockOutlined,
    },
    data() {
        return {
            formInline: {
                user: '',
                pass: '',
            }
        }
    },
    setup(props, ctx) {
        let state = reactive({
            username: '',
            password: '',
        })
        let formInline = reactive({
            user: '',
            pass: '',
        })
        const router = useRouter();

        function handleSubmit(e) {
            console.log(e);
            console.log('ce', state.username, state.password)
            if (state.username == 'admin' && state.password == 'admin123') {
                router.push({
                    name: 'Components'
                })
            }
        }

        return {
            ...toRefs(state),
            handleSubmit
        }
    }
}
</script>

<style lang="less" scoped>
#login {
    background-image: url('../assets/img/bg.jpg');
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-size: cover;

    .form {
        width: 25rem;
        height: 23rem;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.6);

        .title {
            margin: 30px auto 30px auto;
            text-align: center;
            color: #707070;
        }

        .ant-form {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .item {
            width: 80%;
            height: 15%;
        }

        .item-button {
            width: 80%;
            height: 15%;

            .btn {
                width: 43%;
                margin: 0px 10px 0px 10px;
            }
        }

        .ant-form-item-children {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
}
</style>
