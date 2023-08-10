const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  flexsearch: {
	codeblocks: false
  },
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en'
  },
  defaultShowCopyCode: true
})

module.exports = withNextra()
