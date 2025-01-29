import rss from '@astrojs/rss'
import { formatProjectPost } from '../ts/utils'

const postImportResult = import.meta.glob('./projects/**/*.md', {
  eager: true,
})
const posts = formatProjectPost(Object.values(postImportResult))

export async function GET(context) {
  return rss({
    stylesheet: '/rss/styles.xsl',
    title: 'My Design Projects',
    description: 'Interior works',
    site: 'http://localhost:4321',
    items: posts.map((post) => ({
      title: post.frontmatter.title,
      pubDate: post.frontmatter.date,
      description: post.frontmatter.description,
      // Compute RSS link from post `id`
      // This example assumes all posts are rendered as `/blog/[id]` routes
      // link: `/projects/${post.id}/`,
      customData: `<author>${post.frontmatter.author}</author>`,
    })),
  })
}
