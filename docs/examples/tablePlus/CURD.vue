<script lang="tsx" setup>
import { FormProps } from 'v-el-table/src/components/form';
import { TableColumn } from 'v-el-table/src/components/table';
import { TablePlusProps } from 'v-el-table/src/components/tablePlus';
import { reactive, SetupContext } from 'vue';
import { VElTablePlus } from 'v-el-table'
import { ElButton } from 'element-plus'

type DataType = { id: number; goods: string }

const tableProps = reactive({
    table: { data: [{ id: 1, goods: 'Table' } as DataType], tableLayout: 'fixed' as 'fixed' | 'auto' },
    columns: [
        { prop: 'id', label: 'id' },
        { prop: 'goods', label: 'Goods' },
        {
            prop: 'end', label: 'operation',
            default: (scope: { row: DataType, column: TableColumn<DataType>, $index: number }) => {
                return <ElButton type="text" onClick={() => console.log('edit',scope)}>edit</ElButton>
            }
        }
    ] as TableColumn<DataType>[],
    events: {
        cellClick(...args: any[]) {
            console.log('cellClick', ...args)
        }
    }
})


const tablePlusConfig = reactive<TablePlusProps<DataType>>({
    title: '',
    query: (data: any) => {
        console.log('query', data)
        return Promise.resolve({
            data: [{ id: 1, goods: 'Foo' }],
            total: 40,
            page: data.currentPage,
        })
    },
    responsePath: 'data',
    buttons: [
        {
            key: 'add',
            name: 'add',
            icon: 'CirclePlus',
            events: { click: () => console.log('Add a new row.') },
        },
        {
            key: 'edit',
            name: 'edit',
            icon: 'Edit',
            events: { click: () => console.log('Edit some rows.') },
        },
        {
            key: 'remove',
            name: 'remove',
            icon: 'Delete',
            events: { click: () => console.log('Remove a row.') },
        }
    ],
    tableProps,
    formProps: {
        form: {
            model: {
                id: '',
                goods: ''
            }
        },
        fields: [
            {
                itemProps: { prop: 'id', label: 'ID' },
                inputComponent: 'el-input',
                inputProps: { type: 'text', placeholder: 'ID' },
                inputEvents: {}
            },
            {
                itemProps: { prop: 'goods', label: 'User' },
                inputComponent: 'el-input',
                inputProps: { type: 'text', placeholder: 'Goods name' },
                inputEvents: {}
            },
        ]
    } as unknown as FormProps
})
</script>
<template>
    <VElTablePlus v-bind='tablePlusConfig' hidden-default-button></VElTablePlus>
</template>