<template>
    <VElForm v-bind="config" />
</template>
<script lang="tsx" setup>
import { ElInput, FormProps } from 'element-plus'
import { VElForm } from 'v-el-table'
import { reactive, ref } from 'vue';

const model = ref({ name: 'User Name', num: 1 })

const config = reactive({
    form: {
        model: model
    },
    fields: [
        {
            itemProps: { prop: 'name', label: '姓名' },
            inputComponent: 'ElInput',
            inputProps: { type: 'text', placeholder: 'Please input' },
            inputEvents: {
                change: (...args: any) => console.log(...args)
            }
        }
    ]
} as unknown as FormProps)
</script>