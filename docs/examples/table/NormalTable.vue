<template>
    <VElTable :table="tableProps.table" :columns="tableProps.columns" :events="tableProps.events"></VElTable>
</template>
<script lang="tsx" setup>
import {reactive} from 'vue'
import { VElTable } from 'v-el-table'
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
</script>