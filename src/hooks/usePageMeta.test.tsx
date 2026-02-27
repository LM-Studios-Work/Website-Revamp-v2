import { renderHook } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { usePageMeta, DEFAULT_TITLE, DEFAULT_DESCRIPTION, DEFAULT_URL } from './usePageMeta'

describe('usePageMeta', () => {
  const initialTitle = 'Initial Title'
  const initialDescription = 'Initial Description'
  const initialUrl = 'https://example.com'

  // Helper to create required meta tags
  const createMeta = (name: string, content: string) => {
    const meta = document.createElement('meta')
    meta.setAttribute('name', name)
    meta.setAttribute('content', content)
    document.head.appendChild(meta)
  }

  const createPropertyMeta = (property: string, content: string) => {
    const meta = document.createElement('meta')
    meta.setAttribute('property', property)
    meta.setAttribute('content', content)
    document.head.appendChild(meta)
  }

  const createLink = (rel: string, href: string) => {
    const link = document.createElement('link')
    link.setAttribute('rel', rel)
    link.setAttribute('href', href)
    document.head.appendChild(link)
  }

  beforeEach(() => {
    // Setup initial DOM state
    document.title = initialTitle
    createMeta('description', initialDescription)
    createPropertyMeta('og:title', initialTitle)
    createPropertyMeta('og:description', initialDescription)
    createPropertyMeta('og:url', initialUrl)
    createMeta('twitter:title', initialTitle)
    createMeta('twitter:description', initialDescription)
    createLink('canonical', initialUrl)
  })

  afterEach(() => {
    // Cleanup DOM
    document.head.innerHTML = ''
    document.title = ''
  })

  it('updates document title and meta description', () => {
    const props = {
      title: 'New Page Title',
      description: 'New page description'
    }

    renderHook(() => usePageMeta(props))

    expect(document.title).toBe(props.title)
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', props.description)
  })

  it('updates Open Graph tags with specific values', () => {
    const props = {
      title: 'Page Title',
      description: 'Page Description',
      ogTitle: 'OG Title',
      ogDescription: 'OG Description',
      ogUrl: 'https://example.com/og'
    }

    renderHook(() => usePageMeta(props))

    expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute('content', props.ogTitle)
    expect(document.querySelector('meta[property="og:description"]')).toHaveAttribute('content', props.ogDescription)
    expect(document.querySelector('meta[property="og:url"]')).toHaveAttribute('content', props.ogUrl)
  })

  it('falls back to standard title/description for Open Graph tags', () => {
    const props = {
      title: 'Page Title',
      description: 'Page Description'
    }

    renderHook(() => usePageMeta(props))

    expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute('content', props.title)
    expect(document.querySelector('meta[property="og:description"]')).toHaveAttribute('content', props.description)
  })

  it('updates Twitter card tags', () => {
    const props = {
      title: 'Page Title',
      description: 'Page Description',
      ogTitle: 'Twitter Title',
      ogDescription: 'Twitter Description'
    }

    renderHook(() => usePageMeta(props))

    expect(document.querySelector('meta[name="twitter:title"]')).toHaveAttribute('content', props.ogTitle)
    expect(document.querySelector('meta[name="twitter:description"]')).toHaveAttribute('content', props.ogDescription)
  })

  it('updates canonical URL', () => {
    const props = {
      title: 'Page Title',
      description: 'Page Description',
      canonicalUrl: 'https://example.com/canonical'
    }

    renderHook(() => usePageMeta(props))

    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', props.canonicalUrl)
  })

  it('uses canonical URL for og:url fallback', () => {
    const props = {
      title: 'Page Title',
      description: 'Page Description',
      canonicalUrl: 'https://example.com/canonical'
    }

    renderHook(() => usePageMeta(props))

    expect(document.querySelector('meta[property="og:url"]')).toHaveAttribute('content', props.canonicalUrl)
  })

  it('reverts to default values on unmount', () => {
    const props = {
      title: 'Temporary Title',
      description: 'Temporary Description',
      canonicalUrl: 'https://temp.com'
    }

    const { unmount } = renderHook(() => usePageMeta(props))

    // Verify changes applied
    expect(document.title).toBe(props.title)

    unmount()

    // Verify revert to defaults (values from usePageMeta implementation)
    expect(document.title).toBe(DEFAULT_TITLE)
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      DEFAULT_DESCRIPTION
    )
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', DEFAULT_URL)
  })
})
