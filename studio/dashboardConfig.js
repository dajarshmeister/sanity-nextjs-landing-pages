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
                  buildHookId: '6212f502d58b3f38570f4f6c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-m2abiab8',
                  apiId: '059b7313-9d19-4ccd-89a0-82a5fa784231'
                },
                {
                  buildHookId: '6212f50285be32a60c0b5dac',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ihhypzmz',
                  apiId: '387d7c55-fd62-4024-ad02-cc2fd2b39692'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dajarshmeister/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ihhypzmz.netlify.app', category: 'apps' }
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
