import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface BlogCardProps {
  title: string
  slug: string
  excerpt?: string
  featuredImage?: {
    url?: string
    alt?: string
  }
  publishedAt?: string
  author?: {
    name?: string
  }
  categories?: Array<{ category?: string }>
}

export function BlogCard({
  title,
  slug,
  excerpt,
  featuredImage,
  publishedAt,
  author,
  categories,
}: BlogCardProps) {
  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/blog/${slug}`} className="block">
        {featuredImage?.url && (
          <div className="relative h-48 w-full">
            <Image
              src={featuredImage.url}
              alt={featuredImage.alt || title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            {formattedDate && <time dateTime={publishedAt}>{formattedDate}</time>}
            {author?.name && (
              <>
                <span>•</span>
                <span>{author.name}</span>
              </>
            )}
          </div>
          <h3 className="text-xl font-semibold line-clamp-2 hover:text-primary transition-colors">
            {title}
          </h3>
        </CardHeader>
        <CardContent>
          {excerpt && <p className="text-muted-foreground line-clamp-3">{excerpt}</p>}
          {categories && categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((cat, index) =>
                cat.category ? (
                  <span
                    key={index}
                    className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
                  >
                    {cat.category}
                  </span>
                ) : null
              )}
            </div>
          )}
        </CardContent>
      </Link>
    </Card>
  )
}
