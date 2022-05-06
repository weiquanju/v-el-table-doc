<script lang="tsx" setup>
import { FormProps } from 'v-el-table/src/components/form';
import { TableColumn } from 'v-el-table/src/components/table';
import { TablePlusProps } from 'v-el-table/src/components/tablePlus';
import { reactive, SetupContext } from 'vue';
import { VElTablePlus } from 'v-el-table'

type DataType = { id: number; value: string }

// 函数式组件
const Layout = (props: never, { slots }: SetupContext) => (
    <>
        <div class="header">{slots.header && slots.header()}</div>
        <div class="title">{slots.title && slots.title()}</div>
        <div class="filter">{slots.filter && slots.filter()}</div>
        <div class="btn">{slots.btn && slots.btn()}</div>
        <div class="table">{slots.table && slots.table()}</div>
        <div class="pagination">{slots.pagination && slots.pagination()}</div>
        <div class="footer">{slots.footer && slots.footer()}</div>
    </>
)

const tablePlusConfig = reactive<TablePlusProps<DataType>>({
    title: '',
    query: (data: any) => {
        return Promise.resolve({
            data: [{ id: 1, value: 'Hello list item!' }],
            total: 40,
            page: data.currentPage,
        })
    },
    tableProps: {
    table: { data: [{ id: 1, value: 'Hello table!' } as DataType] },
    columns: [
        { prop: 'id', label: 'id' },
        { prop: 'value', label: '值' },
    ] as TableColumn<DataType>[],
},
    formProps: {
        form: {
            model: {}
        },
        fields: [
            {
                itemProps: { prop: 'id', label: 'ID' },
                inputComponent: 'el-input',
                inputProps: { type: 'text', placeholder: 'Please input ID' },
                inputEvents: {}
            }
        ]
    } as unknown as FormProps
})
</script>
<template>
    <VElTablePlus v-bind='tablePlusConfig' :layout="Layout" hidden-default-button></VElTablePlus>
</template>