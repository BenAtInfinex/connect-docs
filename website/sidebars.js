const sidebar = {
  build: [
    'index',
    {
      type: 'category',
      label: 'Introduction',
      collapsed: true,
      className: 'sidebar-main-category',
      link: { type: 'doc', id: 'introduction/why-infinex' },
      items: [
        {
          type: 'link',
          href: '/introduction/why-infinex',
          label: 'Why Infinex',
        },
        {
          type: 'link',
          label: 'Installation',
          href: '/introduction/installation',
        },
        {
          type: 'link',
          label: 'Getting Started',
          href: '/introduction/getting-started',
        },
        {
          type: 'link',
          label: 'Comparisons',
          href: '/introduction/comparisons',
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      className: 'sidebar-main-category',
      link: { type: 'doc', id: 'guides/rainbowkit' },
      items: [
        {
          type: 'link',
          label: 'RainbowKit',
          href: '/guides/rainbowkit',
        },
      ],
    },
  ],
};

export default sidebar;
