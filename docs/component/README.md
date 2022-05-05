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
### 使用Form组件

- 支持表单验证

- 支持自定义组件

- 支持表单所有子组件

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
| children | 输入组件潜入的子节点，子组件 | string |        | undefined |
| visible | 是否可见 | boolean |        | true |
| remoteHandler | 初始化时，远程请求方法 | PromiseFunction |        | undefined |
| remoteParams | 初始化时，远程请求参数 | object |        | undefined |

## VElTable

### 基础用法
:::demo
table/NormalTable
:::

## VElTablePlus

### 基础用法
:::demo
tablePlus/NormalTablePlus
:::