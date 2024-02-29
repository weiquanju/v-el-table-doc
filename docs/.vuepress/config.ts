import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import path from 'path'
import demoBlock from 'vuepress-plugin-demo-code-block'

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {
      configFile: path.resolve(__dirname, './vite.config.ts'),
      // envFile?: false;F
    },
    vuePluginOptions: {},
  }),
  // 主题和它的配置
  theme: {

    logo: '/assets/images/logo.png',
    repo: 'weiquanju/v-el-table',
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: '文档',
        link: '/guide',
      },
      {
        text: '组件',
        link: '/component',
      },
      // {
      //   text: '文档',
      //   children: [
      //     {
      //       text: 'Always active',
      //       link: '/',
      //       // 该元素将一直处于激活状态
      //       activeMatch: '/',
      //     },
      //     {
      //       text: 'Active on /foo/',
      //       link: '/not-foo/',
      //       // 该元素在当前路由路径是 /foo/ 开头时激活
      //       // 支持正则表达式
      //       activeMatch: '^/foo/',
      //     },
      //   ],
      // },
    ],
    locales: {
      '/': {
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
    },
  },

  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'V-El-Table',
      description: '一个基于Vue 3、Element-Plus，富有表现力的表格组件。打造你的的生产力！',
    },
    '/en/': {
      lang: 'en-US',
      title: 'V-El-Table',
      description: 'An expressive form component based on element plus. Build your productivity!',
    },
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
  plugins: [
    [
      demoBlock({
        componentsDir: path.resolve(__dirname, './../examples'),
        githubEditLinkPath: 'https://github.com/weiquanju/v-el-table-doc/edit/main/docs/examples/',
      })
    ]
  ],
})