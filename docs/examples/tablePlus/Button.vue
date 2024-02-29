<script lang="tsx" setup>
import { type VElFormProps, type TableColumn, type VElTablePlusProps, type VElTablePlus } from 'v-el-table';
import { reactive } from 'vue';
import { ElButton, ElIcon } from 'element-plus'
import { Delete } from '@element-plus/icons-vue'

type DataType = { id: number; value: string }

const tableProps = reactive({
    table: { data: [{ id: 1, value: 'Hello table!' } as DataType], tableLayout: 'fixed' as 'fixed' | 'auto' },
    columns: [
        { prop: 'id', label: 'id' },
        { prop: 'value', label: '值' },
        {
            prop: 'end', label: '操作', default: (scope: { row: DataType, column: TableColumn<DataType>, $index: number }) => {
                return <ElButton type="text" onClick={() => console.log(scope)}>edit</ElButton>
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
        return Promise.resolve({
            data: [{ id: 1, value: 'Hello list item!' }],
            total: 40,
            page: data.currentPage,
        })
    },
    responsePath: 'data',
    buttons: [
        {
            key: 'add',
            name: '新增',
            icon: 'CirclePlus',
            events: { click: () => console.log('Hello world!') },
        },
        { key: 'remove', nodeParams: [ElButton, { onClick: () => console.log('remove click.') }, [(<ElIcon style="margin-right:0.3em;"><Delete /></ElIcon>), 'remove']] }
    ],
    tableProps,
    VElFormProps: {
        form: {
            model: {
                id: '1',
                value: ''
            }
        },
        fields: [
            {
                itemProps: { prop: 'id', label: 'ID' },
                inputComponent: 'el-input',
                inputProps: { type: 'text', placeholder: 'Please input ID' },
                inputEvents: {}
            },
            {
                itemProps: { prop: 'value', label: '值' },
                inputComponent: 'el-input',
                inputEvents: {}
            },
        ]
    } as VElFormProps
})
</script>
<template>
    <VElTablePlus v-bind='tablePlusConfig' hidden-default-button></VElTablePlus>
</template>