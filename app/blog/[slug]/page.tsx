import { FadeLeft } from 'app/components/Animations'
import { Mdx } from 'app/components/mdx'
import { allBlogs } from 'contentlayer/generated'
import { getViewsForRoute } from 'lib/metrics'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import Balancer from 'react-wrap-balancer'
import ViewCounter from '../view-counter'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  const { title, publishedAt: publishedTime, summary: description, image, slug } = post
  const ogImage = image ? `https://michaelangelo.io${image}` : `https://michaelangelo.io/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://michaelangelo.io/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

function formatDate(date: string) {
  const currentDate = new Date()
  const targetDate = new Date(date)

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  const daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return `${fullDate} (${formattedDate})`
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const post = allBlogs.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const ViewComponent = async () => {
    const viewsCount = await getViewsForRoute(`/blog/${post.slug}`)
    return <ViewCounter count={viewsCount} route={`/blog/${post.slug}`} trackView />
  }

  return (
    <section>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(post.structuredData)}
      </script>
      <FadeLeft delay={0.3}>
        <h1 className="font-bold text-2xl tracking-tighter max-w-[650px]">
          <Balancer>{post.title}</Balancer>
        </h1>
      </FadeLeft>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{formatDate(post.publishedAt)}</p>
        <Suspense fallback={<div />}>
          <ViewComponent />
        </Suspense>
      </div>
      <Mdx code={post.body.code} />
    </section>
  )
}
