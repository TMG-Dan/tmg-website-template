import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'
import { BlogContent } from '@/components/blog/BlogContent'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string) {
  try {
    const payload = await getPayload({ config })
    const posts = await payload.find({
      collection: 'posts',
      where: {
        slug: {
          equals: slug,
        },
        status: {
          equals: 'published',
        },
      },
      depth: 2,
      limit: 1,
    })
    return posts.docs[0] || null
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} on our blog.`,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  const author = typeof post.author === 'object' && post.author ? post.author : null
  const featuredImage =
    typeof post.featuredImage === 'object' && post.featuredImage ? post.featuredImage : null

  return (
    <article>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Button variant="ghost" asChild className="mb-8 -ml-4">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{post.title}</h1>

            <div className="flex items-center gap-4 mt-6 text-muted-foreground">
              {formattedDate && <time dateTime={post.publishedAt || undefined}>{formattedDate}</time>}
              {author?.name && (
                <>
                  <span>•</span>
                  <span>By {author.name}</span>
                </>
              )}
            </div>

            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.categories.map((cat: { category?: string }, index: number) =>
                  cat.category ? (
                    <span
                      key={index}
                      className="text-sm bg-muted px-3 py-1 rounded-full text-muted-foreground"
                    >
                      {cat.category}
                    </span>
                  ) : null
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {featuredImage?.url && (
        <section className="container">
          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={featuredImage.url}
                alt={featuredImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <BlogContent content={post.content} />
          </div>
        </div>
      </section>
    </article>
  )
}
