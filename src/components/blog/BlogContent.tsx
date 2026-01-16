'use client'

import { useMemo } from 'react'

interface BlogContentProps {
  content: unknown // Lexical content from Payload
}

// Simplified Lexical renderer for basic content
// In production, you'd use @payloadcms/richtext-lexical/client
export function BlogContent({ content }: BlogContentProps) {
  const htmlContent = useMemo(() => {
    if (!content) return ''

    // Check if content is already serialized HTML
    if (typeof content === 'string') {
      return content
    }

    // Handle Lexical JSON format
    if (typeof content === 'object' && content !== null) {
      const lexicalContent = content as { root?: { children?: unknown[] } }
      if (lexicalContent.root?.children) {
        return serializeLexical(lexicalContent.root.children)
      }
    }

    return ''
  }, [content])

  return (
    <div
      className="prose prose-lg dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}

// Basic Lexical serializer
function serializeLexical(nodes: unknown[]): string {
  return nodes
    .map((node) => {
      const typedNode = node as {
        type?: string
        tag?: string
        children?: unknown[]
        text?: string
        format?: number
        url?: string
        listType?: string
      }

      if (typedNode.type === 'paragraph') {
        const children = typedNode.children ? serializeLexical(typedNode.children) : ''
        return `<p>${children}</p>`
      }

      if (typedNode.type === 'heading') {
        const tag = typedNode.tag || 'h2'
        const children = typedNode.children ? serializeLexical(typedNode.children) : ''
        return `<${tag}>${children}</${tag}>`
      }

      if (typedNode.type === 'text') {
        let text = typedNode.text || ''
        const format = typedNode.format || 0

        // Apply formatting
        if (format & 1) text = `<strong>${text}</strong>` // Bold
        if (format & 2) text = `<em>${text}</em>` // Italic
        if (format & 8) text = `<u>${text}</u>` // Underline
        if (format & 4) text = `<s>${text}</s>` // Strikethrough
        if (format & 16) text = `<code>${text}</code>` // Code

        return text
      }

      if (typedNode.type === 'link') {
        const url = typedNode.url || '#'
        const children = typedNode.children ? serializeLexical(typedNode.children) : ''
        return `<a href="${url}" class="text-primary hover:underline">${children}</a>`
      }

      if (typedNode.type === 'list') {
        const tag = typedNode.listType === 'number' ? 'ol' : 'ul'
        const children = typedNode.children ? serializeLexical(typedNode.children) : ''
        return `<${tag}>${children}</${tag}>`
      }

      if (typedNode.type === 'listitem') {
        const children = typedNode.children ? serializeLexical(typedNode.children) : ''
        return `<li>${children}</li>`
      }

      if (typedNode.type === 'quote') {
        const children = typedNode.children ? serializeLexical(typedNode.children) : ''
        return `<blockquote>${children}</blockquote>`
      }

      // Handle linebreak
      if (typedNode.type === 'linebreak') {
        return '<br />'
      }

      // Fallback: try to serialize children if they exist
      if (typedNode.children) {
        return serializeLexical(typedNode.children)
      }

      return ''
    })
    .join('')
}
