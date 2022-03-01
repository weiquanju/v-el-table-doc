import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: 'V-El-Table',
  description: '一个基于Element-Plus，富有表现力的表格组件。打造你的的生产力！',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/assets/images/logo.png',
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        sizes: '16x16',
        href: '/assets/images/icons/favicon-16x16.png',
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        sizes: '32x32',
        href: '/assets/images/icons/favicon-32x32.png',
      }
    ],
    ['meta', { name: "application-name", content: "V-El-Table" }],
    ['meta', { name: "apple-mobile-web-app-title", content: "V-El-Table" }],
    ['meta', { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ['link', { rel: "apple-touch-icon", href: "/assets/images/icons/apple-app.png" }],
  ],
})