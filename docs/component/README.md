---
prev:
  text: 指南
  link: /guide
---

# 组件

本章节内容主要介绍组件的使用，并提供一些演示案例。

## VElForm

### 基础用法

:::demo
form/NormalForm
:::
### 使用TSX

:::demo
form/TsxForm
:::

### 引入自定义组件

支持element-plus表单组件外，也支持自定义表单组件。下面例子将自定义input组件`MyInputString`引入表单。

:::demo
form/CustomComponent
:::

### 表单验证

:::demo
form/Login
:::

### 参数

- **form**

  - 类型`ElFormProps`

  - 对应[ElementPlus Form参数](https://element-plus.org/zh-CN/component/form.html#form-%E5%B1%9E%E6%80%A7)

- **events**

  - 类型`EventsHandlers`

  - 支持监听[ElementPlus Form事件](https://element-plus.org/zh-CN/component/form.html#form-%E4%BA%8B%E4%BB%B6)

  - 支持HtmlElement事件监听

  例如click事件

- **fields**

  - 类型`FormItemProps[]`

  ```ts
  type FormItemProps = {
    itemProps?: ElFormItemProps & ElFormItemSlots
    inputProps?: Record<string, any>
    inputComponent: ComponentType
    inputEvents?: EventsHandlers
    inputChildren?: string | VNode[]
    visible?: boolean
    remoteHandler?: <Return = Promise<any>>(itemContext: FormItemProps) => Return
    remoteParams?: object
  } & Record<string, any>
  ```

  - `FormItemProps.itemProps` 
  
  此处特别说明，它对应 [ElFormItem 参数](https://element-plus.org/zh-CN/component/form.html#form-item-%E5%B1%9E%E6%80%A7)
,同时合并了[ElFormItem 插槽](https://element-plus.org/zh-CN/component/form.html#form-item-%E6%8F%92%E6%A7%BD)

  类型`ElFormItemProps & ElFormItemSlots`

  - `FormItemProps.remoteHandler`
  
  类型`object`

  此参数方便异步远程数据后初始化。`FormItemProps.remoteParams` 为此函数参数
  
  - `FormItemProps.inputComponent`

  类型`ComponentType`

  `type ComponentType = string | Component | DefineComponent | JSX.Element | ConcreteComponent | FunctionalComponent`

  为ElFormItem下的数据输入组件，字段因此命名。

  - `FormItemProps.inputProps`
  
  类型`Record<string, any>`
  
  为组件`FormItemProps.inputComponent`对应参数

  - `FormItemProps.inputEvents`
  
  类型`EventsHandlers`
  
  为组件`FormItemProps.inputComponent`对应事件参数

  - `FormItemProps.inputChildren`
  
  类型`string | VNode[]`.
  
  为组件`FormItemProps.inputComponent`的子节点


## VElTable

### 基础用法
:::demo
table/NormalTable
:::

### 参数

- **events**

  - 类型`EventsHandlers`

  - 支持监听[Elment Plus ElTable 事件](https://element-plus.org/zh-CN/component/table.html#table-%E4%BA%8B%E4%BB%B6)html#form-%E4%BA%8B%E4%BB%B6)

  - 支持HtmlElement事件监听

  例如click事件

- **columns**

  - 类型`TableColumn<T>[]`

  `type TableColumn<T = any> = Partial<TableColumnCtx<T>> & TableColumnSlots`

  - `TableColumnCtx` 为[Element Plus ElTableColumn 参数](https://element-plus.org/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7)

  - `TableColumnSlots`为[Element Plus ElTableColumn 插槽](https://element-plus.org/zh-CN/component/table.html#table-column-%E6%8F%92%E6%A7%BD)

- **table**

  - 类型`Partial<TableProps<T>>`

  - 次类型类型与[Element Plus ElTable 参数](https://element-plus.org/zh-CN/component/table.html#table-%E5%B1%9E%E6%80%A7)完全一致

## VElTablePlus

### Query

表格查询由3个参数构成，分别如下：

- **queryParams**

  - 类型 `any`
  
  - 查询方法参数

- **query**

  - 类型 `(formAndPage: any) => Promise<any>`

  - 数据查询异步方法
    
  参数是form.model, pageSize, currentPage, queryParams 合并后的一个object类型值。

  此参数方法是方便做接口请求，以及请求参数数据转换等情况使用。

- **responsePath**

  - 类型 `ResponsePathType`

  ```ts
  type ResponsePathType = {
    data?: string
    currentPage?: string
    total?: string
  }
  ```

  - 数据响应路径

  此参数是确定表格组件`query`参数异步返回的表格列表数组`ResponsePathType.data`、当前页数`ResponsePathType.currentPage`、总条数`ResponsePathType.total`，3条数据的取值路径。

  
  - 示例
  
  `ResponsePathType.data` 表格数据取值路径: `'payload.list'`

  示例展示请点击query按钮执行查询


:::demo
tablePlus/Query
:::

::: danger 注意
本示例Query.vue组件分页功能，在vue3框架下正常。由于vuepress运行时报错导致分页操作失败，需上游解决即可消除。
:::

### Filter

请在`ID`输入框中输入任意参数，结果将展示对应ID

:::demo
tablePlus/TableFilter
:::

### Button

#### 表格头部 button 通过两个参数控制

- **includeButtons**
  
  - 类型 `string[]`

  - 表示需要渲染显示的按钮

  - 内置button有查询、重置，它们的key是 `['query','reset']`
  
  - 内置按钮支持国际化

- **buttons**

  - 类型 `ButtonType[]`

    `type ButtonType = ButtonConfig | ButtonVNode`

  - `ButtonConfig`类型，快速实现简单按钮

  - `ButtonVNode`类型，实现高度定制按钮
    
    `ButtonVNode` 为Vue [h()函数](https://vuejs.org/api/render-function.html#h)的数组类型的参数

  - 默认内置查询、重置
  
    同includeButtons介绍的内置按钮

  - `ButtonType` 类型声明如下

```ts
import { ButtonProps } from 'element-plus'
import { Ref } from 'vue'
import * as Icons from '@element-plus/icons-vue'

export type ButtonKey = 'query' | 'reset' | string

export interface Button {
  key: ButtonKey
}

export interface ButtonConfig extends Button {
  name: string | Ref<string>
  buttonProps?: Partial<Writable<ButtonProps>>
  icon: keyof typeof Icons
  events?: any
}

export interface ButtonVNode extends Button {
  nodeParams: any[]
}

export type ButtonType = ButtonConfig | ButtonVNode

```

button 相关配置示例

:::demo
tablePlus/Button
:::

### CURD

:::demo
tablePlus/CURD
:::

### Layout

layout参数实现自定义布局组件的传入，满足不同业务场景不同的UI布局需求。

:::demo
tablePlus/CustomLayout
:::