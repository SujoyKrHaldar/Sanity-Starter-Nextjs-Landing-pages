export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '624561cd72fde91261744fd3',
                  title: 'Sanity Studio',
                  name: 'sanity-starter-nextjs-landing-pages-studio',
                  apiId: '60d6d638-3fce-423f-b43c-cbc6d85e3af3'
                },
                {
                  buildHookId: '624561cd77c6aa17d63d054f',
                  title: 'Landing pages Website',
                  name: 'sanity-starter-nextjs-landing-pages',
                  apiId: '143ad19f-8738-4d50-b31e-e044ab620990'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SujoyKrHaldar/Sanity-Starter-Nextjs-Landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-starter-nextjs-landing-pages.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
