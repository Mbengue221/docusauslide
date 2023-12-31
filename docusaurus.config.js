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
  url: 'https://mbengue221.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docusauslide/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Mbengue221', // Usually your GitHub org/user name.
  projectName: 'docusauslide', // Usually your repo name.


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  
  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr', 'fa'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      fa: {
        direction: 'rtl',
      },
    },
  },

  stylesheets:[
    {
      href:"/docusauslide/font-awesome.all.min.css"
    },
    {
      href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    },
    {
      href:"/docusauslide/xlide.css"
    }
  ],

  scripts:[
    {src:"/docusauslide/xlide.js"}
    ,{src:"/docusauslide/process_menu_links.js"}
    ,{src:"/docusauslide/exemples.js"}
    ,{src:"https://polyfill.io/v3/polyfill.min.js?features=Promise%2CObject.entries%2CObject.assign"}
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
            'https://https://mbengue221.github.io/docusauslide/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://https://mbengue221.github.io/docusauslide/tree/master',
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
            type: 'localeDropdown',
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
      algolia:{
        apiKey:"661638666fa8d46fd3a17b39dd1618a3",
        appId:"29AP32OC5X",
        contextualSearch: true,
        indexName:"my_first_index"
      },
    })
};

module.exports = config;
