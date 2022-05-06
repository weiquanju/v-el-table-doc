<template>
    <VElForm ref="form" v-bind="config" />
</template>
<script lang="tsx" setup>
import { VElForm } from 'v-el-table'
import { reactive, ref } from 'vue';

const form = ref<any>(null)

const model = ref({ username: 'Han Meimei', password: '', remember: true })
const config = reactive({
    form: {
        model: model,
        style: { width: '300px', margin: '0 auto' },
        size: 'small',
    },
    fields: [
        {
            itemProps: { prop: 'username', label: '账号', rules: [{ required: true, message: '请输入账号' }] },
            inputComponent: 'ElInput',
            inputProps: { type: 'text', placeholder: '请输入账号' },
            inputEvents: {
                change: (...args: any) => console.log(...args)
            }
        },
        {
            itemProps: { prop: 'password', label: '密码', rules: [{ required: true, message: '请输入密码' }] },
            inputComponent: 'ElInput',
            inputProps: { type: 'password', placeholder: '请输入密码', showPassword: true },
            inputEvents: {
                change: (...args: any) => console.log(...args)
            }
        },
        {
            itemProps: { prop: 'remember', label: '记住密码' },
            inputComponent: 'ElSwitch',
            inputProps: { type: 'password', placeholder: '请输入密码' },
            inputEvents: {
                change: (...args: any) => console.log(...args)
            }
        },
        {
            itemProps: { prop: 'submit', label: '' },
            inputComponent: 'ElButton',
            inputProps: { type: 'success', style: { width: '100%' }, size: 'small' },
            inputEvents: {
                click: () => {
                    form.value.__vueParentComponent.exposed.validate((status: boolean) => {
                        console.log(`登录验证结果${status}`, config.form.model)
                    })
                }
            },
            children: ['登录']
        }
    ]
})
</script>