// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'XlideJs',
  tagline: 'Créez des sliders sur votre site web à la volée',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets:[
    {
      href:"/font-awesome.all.min.css"
    },
    {
      href:"/xlide.css"
    }
  ],

  scripts:[
    {src:"/xlide.js"}
    ,{src:"/process_menu_links.js"}
    ,{src:"/exemples.js"}
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        style: 'dark',
        title: 'XlideJs',
        logo: {
          alt: 'XLIDEJS',
          src: 'img/xlide.png',
        },
        items: [
          {
            type: 'search',
            position: 'right',
          },
          {
            label: 'Accueil',
            href: '/',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/dev0ps221/xlidejs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'xlidejs',
            items: [
              {
                label: 'Accueil',
                href: '/',
              },
              {
                label: 'Documentation',
                href: '/docs/xlidejs',
              }
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'Bien commencer',
                to: '/docs/category/xlidejs---commencer',
              },
              {
                label: 'Les bases',
                to: '/docs/category/xlidejs---les-bases',
              },
              {
                label: 'Les options',
                to: '/docs/category/les-options',
              }
            ],
          },
          {
            title: 'Plus',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/dev0ps221/xlidejs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} xlidejs, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    })
};

module.exports = config;
