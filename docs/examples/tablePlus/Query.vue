<script lang="tsx" setup>
import { FormProps } from 'v-el-table/src/components/form';
import { TableColumn } from 'v-el-table/src/components/table';
import { TablePlusProps } from 'v-el-table/src/components/tablePlus';
import { reactive, SetupContext } from 'vue';
import { VElTablePlus } from 'v-el-table'

type DataType = { id: number; value: string }

const tablePlusConfig = reactive<TablePlusProps<DataType>>({
    title: '',
    query: (data: any) => {
        console.log('query', data)
        return Promise.resolve({
            payload: {
                data: Array.from(Array(10)).map((i, index) => {
                    const n = (data.currentPage -1) * 10   + index + 1
                    return { id: n, value: `line ${n}` }
                }),
                total: 20,
                page: data.currentPage,
            }, status: 'success', code: 0
        })
    },
    responsePath: {
        data: 'payload.data',
        currentPage: 'payload.page',
        total: 'payload.total',
    },
    queryParams: { key: "value" },
    tableProps: {
        table: { data: [{ id: 1, value: 'Hello table!' } as DataType], tableLayout: 'fixed' as 'fixed' | 'auto' },
        columns: [
            { prop: 'id', label: 'id' },
            { prop: 'value', label: '值' },
        ] as TableColumn<DataType>[]
    },
    formProps: {
        form: {
            model: {}
        },
        fields: []
    } as FormProps
})
</script>
<template>
    <VElTablePlus v-bind='tablePlusConfig' hidden-default-button></VElTablePlus>
</template>