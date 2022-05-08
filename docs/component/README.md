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

| 属性   | 说明                                             | 类型            | 可选值 | 默认值 |
| :----- | :----------------------------------------------- | :-------------- | :----- | :----- |
| class  | 样式类名称                                       | string/object   | —      | ""     |
| style  | 样式                                             | string/object   | —      | ""     |
| form   | ElForm组件参数                                   | ElFormProps     | —      |        |
| events | 表单事件，key为事件名称，value为事件对应处理方法 | object          | —      | {}     |
| fields | 表单字段                                         | FormItemProps[] | —      |        |

#### FormItemProps 参数

| 属性   | 说明   | 类型            | 可选值 | 默认值 |
| :----- | :---- | :-------------- | :----- | :----- |
| itemProps | ElFormItem组件参数及FormItem插槽 | ElFormItemProps & ElFormItemSlots | — | {} |
| inputComponent | 输入组件，可以是字符串或具体组件 | string \| Element\| Component\| FunctionalComponent | — |        |
| inputProps | 输入组件参数 | object | — | {} |
| inputEvents | 输入组件事件，key为事件名称，value为事件对应处理方法 | object | — | {} |
| children | 输入组件潜入的子节点，子组件 | string \| any[] |        | undefined |
| visible | 是否可见 | boolean |        | true |
| remoteHandler | 初始化时，远程请求方法 | PromiseFunction |        | undefined |
| remoteParams | 初始化时，远程请求参数 | object |        | undefined |

## VElTable

### 基础用法
:::demo
table/NormalTable
:::

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