/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tianhao Zhou 🚀🚀🚀',
  tagline: 'GitHub profile ¯\\_(ツ)_/¯',
  url: 'https://tianhaoz95.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon/monhchi.ico',
  organizationName: 'tianhaoz95',
  projectName: 'tianhaoz95.github.io',
  themeConfig: {
    navbar: {
      title: 'GitHub Profile by @tianhaoz95',
      logo: {
        alt: 'Avatar @tianhaoz95',
        src: 'img/avatar/01.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'about_me',
          position: 'left',
          label: 'About Me',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/tianhaoz95/tianhaoz95.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
