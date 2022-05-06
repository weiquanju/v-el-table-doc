<template>
  <VElTablePlus v-bind="tablePlusConfig"></VElTablePlus>
</template>
<script lang="tsx" setup>
import { reactive } from 'vue'
import { VElTablePlus } from 'v-el-table'

const tablePlusConfig = reactive({
  query: (data: any) => {
    console.log('query', data)
    return Promise.resolve({
      data: [{ id: 1, value: 'Hello list item!' }],
      total: 40,
      page: data.currentPage,
    })
  },
  tableProps: {
    table: { data: [{ id: 1, value: 'Hello table!' }] },
    columns: [
      { prop: 'id', label: 'id' },
      { prop: 'value', label: '值' },

    ],
  },
  formProps: {
    form: {
      model: {
        id: '1',
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
  }
})
</script>