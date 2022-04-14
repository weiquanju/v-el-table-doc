import { defineClientAppEnhance } from "@vuepress/client";


import 'element-plus/dist/index.css'
import 'v-el-table/dist/style.css'
import ElementPlus from 'element-plus'
import VElTable from 'v-el-table'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(ElementPlus)
  app.use(VElTable)
});