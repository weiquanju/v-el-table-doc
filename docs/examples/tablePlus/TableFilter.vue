<script lang="tsx" setup>
import { FormProps } from 'v-el-table/src/components/form';
import { TableColumn } from 'v-el-table/src/components/table';
import { TablePlusProps } from 'v-el-table/src/components/tablePlus';
import { reactive, SetupContext } from 'vue';
import { VElTablePlus } from 'v-el-table'

type DataType = { id: number|string; value: string }

const tablePlusConfig = reactive<TablePlusProps<DataType>>({
    title: '',
    query: (data: any) => {
        console.log('query', data)
        return Promise.resolve({
            data: [{ id: data.id || 1, value: `this data id is '${data.id||1}'` }],
            total: 20,
            page: data.currentPage,
        })
    },
    responsePath: {
        data: 'data',
        currentPage: 'page',
        total: 'total',
    },
    tableProps: {
        table: { data: [{ id: 1, value: 'Hello table!' } as DataType], tableLayout: 'fixed' as 'fixed' | 'auto' },
        columns: [
            { prop: 'id', label: 'id' },
            { prop: 'value', label: '值' },
        ] as TableColumn<DataType>[],
    },
    formProps: {
        form: {
            model: {
                id: '',
                value: ''
            }
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
    <VElTablePlus v-bind='tablePlusConfig' hidden-default-button></VElTablePlus>
</template>