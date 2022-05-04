<template>
    <VElForm ref="form" v-bind="config" />
</template>
<script lang="tsx" setup>
import { ElOption } from 'element-plus';
import { VElForm } from 'v-el-table'
import { reactive, ref, h, SetupContext } from 'vue';

function MyInputString(props: { modelValue: string; type: string; placeholder: string }, ctx: SetupContext) {
    const { type, placeholder } = props
    return h('input', { type, placeholder, value: props.modelValue, onInput: (e: any) => ctx.emit('update:modelValue', e.target.value) })
}
const name = ref()

const form = ref<any>(null)

const model = ref({ username: 'Han Meimei', num: 1, app: [], remember: true, anonymousName: '' })
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
            itemProps: { prop: 'app', label: '应用', rules: [{ required: true, message: '请选择应用' }] },
            inputComponent: 'el-select',
            inputProps: { type: 'password', placeholder: '请选择应用' },
            inputEvents: {
                change: (...args: any) => console.log(...args)
            },
            // select options
            children: [{ name: '游戏APP', id: 1 }, { name: '学习APP', id: 2 },].map(({ name, id }) => {
                return <ElOption label={name} value={id} />
            })
        },
        {
            itemProps: { prop: 'anonymousName', label: '马甲', rules: [{ required: true, message: '请输入马甲' }] },
            inputComponent: MyInputString,
            inputProps: { type: 'text', placeholder: '请输入马甲' },
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