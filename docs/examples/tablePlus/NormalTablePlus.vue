<template>
    <VElTablePlus v-bind="tablePlusConfig"></VElTablePlus>
</template>
<script lang="tsx" setup>
import {reactive} from 'vue'
import { VElTablePlus } from 'v-el-table'
type DataType = { id: number; value: string }
const tableProps = reactive({
  table: { data: [{ id: 1, value: 'Hello table!' } as DataType], tableLayout: 'fixed' as 'fixed' | 'auto' },
  columns: [
    { prop: 'id', label: 'id' },
    { prop: 'value', label: '值' },
    {
      prop: 'end', label: '操作', default: (scope: { row: DataType, column: any, $index: number }) => {
        return `delete id ${scope.row.id} `
      }, header() {
        return 'hello'
      }
    }
  ],
  events: {
    cellClick(...args: any[]) {
      console.log('cellClick', ...args)
    }
  }
})
const tablePlusConfig = reactive({
  title: '',
  query: (data: any) => {
    console.log('query', data)
    return Promise.resolve({
      data: [{ id: 1, value: 'Hello list item!' }],
      total: 40,
      page: data.currentPage,
    })
  },
  includeButtons: ['query'],
  responsePath: 'data',
  buttons: [
    {
      key: 'add',
      name: '新增',
      icon: 'CircleClose',
      events: { click: () => console.log('Hello world!') },
    },
    { key: 'remove', nodeParams: ['button', { class: 'el-button' }, 'remove'] }
  ],
  tableProps,
  formProps: {
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
  } 
})
</script>