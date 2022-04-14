---
prev:
  text: 返回 首页
  link: /index.html
next:
  text: 组件
  link: /component
---
# 指南

## 介绍

项目目标是，快速构造页面的表单和表格，为前端开发者输出生产力！

项目仅支持Vue 3，是基于Element-Plus开发的一个组件库。

### 组件

包含组件有以下3个：

VELForm，VELTable，VElTablePlus

### 特性

- 兼容Element-Plus

项目组件均是基于Element-Plus组件的接口进行继承、扩展，因此实现兼容。

- 组件支持国际化

组件的`locale`会自动根据element-plus国际化的locale配置同步。

- 组件可配置

项目组件均写对应配置，即可快速实现需求。


## 快速上手

### 安装

:::: code-group
::: code-group-item pnpm
```shell

# element-plus 
# @element-plus/icons-vue 已经安装，则可以忽略

pnpm install element-plus

pnpm install @element-plus/icons-vue

pnpm install v-el-table

```
:::
::: code-group-item npm
```shell

# element-plus 
# @element-plus/icons-vue 已经安装，则可以忽略

npm install element-plus

npm install @element-plus/icons-vue

npm install v-el-table

```
:::
::: code-group-item yarn
```shell

# element-plus 
# @element-plus/icons-vue 已经安装，则可以忽略

yarn add element-plus

yarn add @element-plus/icons-vue

yarn add v-el-table

```
:::
::::


### 开始使用

```ts
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import VElTable from 'v-el-table'
import App from './App.vue'

import 'element-plus/dist/index.css'

//不需要默认布局则可以无需引入style.css
import 'v-el-table/dist/style.css'


const app = createApp(App)

// 完整引入
// app.use(ElementPlus)
// app.use(VElTable)
app.mount('#app')
```
