import cn from 'clsx'
import type { Metadata } from 'next'
import { Layout, Link, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { FC, ReactNode } from 'react'
import './globals.scss'
import Logo from '@components/logo'
import { Roboto_Slab, Barlow_Condensed } from 'next/font/google'

const mainFont = Roboto_Slab({
  subsets: ['latin'],
  weight: '200',
  variable: '--main-font'
})

const titleFont = Barlow_Condensed({
  subsets: ['latin'],
  weight: '700',
  variable: '--title-font'
})

export const metadata: Metadata = {
  description: '',
  metadataBase: new URL('https://luz.to'),
  keywords: [
    'luz',
    'politics',
    'news',
    'current affairs',
    'analysis',
    'switzerland',
    'europe',
    'uk',
    'ukraine',
    'russia'
  ],
  generator: 'Next.js',
  applicationName: 'luz',
  appleWebApp: {
    title: 'luz'
  },
  title: {
    default: 'luz.to',
    template: '%s | luz.to'
  },
  openGraph: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    url: './',
    siteName: 'luz.to',
    locale: 'en_GB',
    type: 'website'
  },
  other: {
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://luz.to'
  },
  alternates: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    canonical: './'
  }
}

const navbar = (
  <Navbar
    logo={
      <Logo
        height="20"
        className={cn(
          'hover:transition-all hover:duration-1000 motion-reduce:hover:transition-none',
          '[mask-image:linear-gradient(60deg,#000_25%,rgba(0,0,0,.2)_50%,#000_75%)] [mask-position:0] [mask-size:400%]',
          'hover:[mask-position:100%]'
        )}
      />
    }
    // projectLink="https://github.com/shuding/nextra"
    children={
      <>
        <Link href="/docs">Docs</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </>
    }
  />
)

const RootLayout: FC<{
  children: ReactNode
}> = async ({ children }) => {
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={cn(mainFont.variable, titleFont.variable)}
    >
      <Head />
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={pageMap}
          // docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          editLink={null}
          feedback={{ content: null }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={<></>}
        >
          {children}
        </Layout>
      </body>
    </html >
  )
}

export default RootLayout
