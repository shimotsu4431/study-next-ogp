import Head from 'next/head'

export default function CommonMeta({ title = "Photo Application", description = "This is Photo Application!!!!" }) {

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${process.env.SITE_URL}/ogp_large.png`} />
      <meta name="twitter:card" content="summary_large_image"/>
    </Head>
  )
}
