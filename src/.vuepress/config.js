const { description, version } = require('../../package')
const webpack = require('webpack');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Scane SMP',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['link', { rel: 'icon', href: '/images/icon.png' }],
    ['link', { rel: "apple-touch-icon", href: '/images/launcher-icon.png'}],
  ],

  theme: 'default-prefers-color-scheme',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    smoothScroll: true,
    nav: [
      {
        text: 'Rules',
        link: '/rules/'
      },
      {
        text: 'Commands',
        link: '/commands/'
      },
      {
        text: 'Updates',
        link: '/UpdateLog/'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/commands/': [
        {
          title: 'Commands',
          collapsable: false,
          children: [
            'LandOwnership',
            'WorldTravel',
          ]
        }
      ],
      '/UpdateLog/': [
        {
          title: 'Updates',
          collapsable: false,
          children: [
            'V1.1.2',
            'V1.1.1',
            'V1.1.0'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ],

  dest: './dist',
  base: '/InScane-SMP/',

  configureWebpack: () => ({
    plugins: [
      new webpack.DefinePlugin({
        GIT_COMMIT_HASH: JSON.stringify(
          require('child_process')
            .execSync('git rev-parse HEAD')
            .toString()
            .trim(),
        ),
        PACKAGE_VERSION: JSON.stringify(version),
        BUILT_AT: JSON.stringify(Date.now()),
      }),
    ],
  }),
}
