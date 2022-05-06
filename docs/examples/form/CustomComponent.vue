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

const model = ref({ remember: true, anonymousName: '' })

const config = reactive({
    form: {
        model: model,
        style: { width: '300px', margin: '0 auto' },
    },
    fields: [
        {
            itemProps: { prop: 'anonymousName', label: '马甲', rules: [{ required: true, message: '请输入马甲' }] },
            inputComponent: MyInputString,
            inputProps: { type: 'text', placeholder: '请输入马甲' },
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
    ]
})
</script>