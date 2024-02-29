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

组件对应配置，更聚焦业务，快速实现需求，完成交付。



## 起步



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


### 引入组件

```ts
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import VElTable from 'v-el-table'
import App from './App.vue'

import 'element-plus/dist/index.css'

//不需要默认布局则可以无需引入style.css
import 'v-el-table/style.css'


const app = createApp(App)

// 完整引入
// app.use(ElementPlus)
// app.use(VElTable)
app.mount('#app')
```

### 开始使用


使用请参考 [组件页面](/component)


## 使用TSX/JSX

推荐使用TSX/JSX，项目工程配置可参考如下配置，启用TSX

### 安装jsx插件

```shell
npm install @vue/babel-plugin-jsx -D
```
### tsconfig.json

关键配置

```json
{
  "jsx": "preserve"
}
```

### vite.config.ts

参考配置

```ts
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJsx({
      transformOn: true,
    }),
  ],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
})
```

### JSX语法上手

JSX语法介绍请移步, [官方JSX介绍](https://github.com/vuejs/babel-plugin-jsx#installation)