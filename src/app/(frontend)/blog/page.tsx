import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { BlogCard } from '@/components/blog/BlogCard'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Latest news, updates, and insights from our team.',
}

async function getPosts() {
  try {
    const payload = await getPayload({ config })
    const posts = await payload.find({
      collection: 'posts',
      where: {
        status: {
          equals: 'published',
        },
      },
      sort: '-publishedAt',
      limit: 12,
      depth: 2,
    })
    return posts.docs
  } catch {
    // Database may not exist yet during build
    return []
  }
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Latest news, updates, and insights from our team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  slug={post.slug}
                  excerpt={post.excerpt || undefined}
                  featuredImage={
                    typeof post.featuredImage === 'object' && post.featuredImage
                      ? {
                          url: post.featuredImage.url || undefined,
                          alt: post.featuredImage.alt || undefined,
                        }
                      : undefined
                  }
                  publishedAt={post.publishedAt || undefined}
                  author={
                    typeof post.author === 'object' && post.author
                      ? { name: post.author.name }
                      : undefined
                  }
                  categories={post.categories || undefined}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
