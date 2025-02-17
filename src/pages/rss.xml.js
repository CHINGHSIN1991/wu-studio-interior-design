import rss from '@astrojs/rss'
import { formatProjectPost } from '../ts/utils'

const postImportResult = import.meta.glob('../content/projects/*.json', {
  eager: true,
})

const posts = Object.values(postImportResult)

export async function GET(context) {
  return rss({
    stylesheet: '/rss/styles.xsl',
    title: 'My Design Projects',
    description: 'Interior works',
    site: 'http://localhost:4321',
    items: posts.map((post) => ({
      title: post.title,
      pubDate: post.date ?? '2014/01/01',
      description: post.description ?? 'unknown',
      customData: `<designer>${post.designer}</designer>`,
    })),
  })
}
