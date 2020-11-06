export default {
  widgets: [
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
                  buildHookId: '5fa56260e0a7c3008844d343',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-hhtngp5s',
                  apiId: '88b09eb5-b27b-4245-a8a6-4f1529359939'
                },
                {
                  buildHookId: '5fa562617265c801315738db',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-27r218wa',
                  apiId: '02566ab0-7d02-4936-a6d0-685e81bb68ac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/icekapuchino/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-27r218wa.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
