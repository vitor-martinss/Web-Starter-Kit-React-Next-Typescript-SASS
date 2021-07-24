import React from 'react'
import Head from 'next/head'

interface SEOProps {
	title: string
	description?: string
	image?: string
	shouldExcludeTitleSuffix?: boolean
	shouldIndexPage?: boolean
}

const SEO: React.FC<SEOProps> = ({
	title,
	description,
	image,
	shouldExcludeTitleSuffix = false,
	shouldIndexPage = true
}: SEOProps) => {
	const pageTitle = `${title}${!shouldExcludeTitleSuffix ? '| Subtitle' : ''}`
	const pageImage = image
		? `${process.env.NEXT_PUBLIC_SITE_URL}/${image}`
		: null
	return (
		<Head>
			<title>{pageTitle}</title>

			{description && <meta name="description" content={description} />}
			{image && <meta name="image" content={pageImage} />}
			{!shouldIndexPage && (
				<meta name="robots" content="noindex/nofollow" />
			)}

			<meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="MobileOptimized" content="320" />
			<meta name="HandheldFriendly" content="True" />
			<meta name="theme-color" content="#121214" />
			<meta name="msapplication-TileColor" content="#121214" />
			<meta name="referrer" content="no-referrer-when-downgrade" />
			<meta name="google" content="notranslate" />
			<meta
				name="apple-mobile-web-app-status-bar-style"
				content="black-translucent"
			></meta>

			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:locale" content="pt_BR" />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={pageTitle} />
			<meta property="og:image" content={pageImage} />
			<meta property="og:image:secure_url" content={pageImage} />
			<meta property="og:image:alt" content="Thumbnail" />
			<meta property="og:image:type" content="image/png" />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />

			<meta name="msapplication-navbutton-color" content="#000000" />
			<meta name="mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta
				name="apple-mobile-web-app-status-bar-style"
				content="black-translucent"
			/>
			<meta name="application-name" content={pageTitle} />
			<meta name="msapplication-TileColor" content="#FFFFFF" />
			<meta name="msapplication-TileImage" content="mstile-144x144.png" />

			<link
				rel="apple-touch-icon-precomposed"
				sizes="57x57"
				href="/assets/img/favicon/apple-touch-icon-57x57.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="114x114"
				href="/assets/img/favicon/apple-touch-icon-114x114.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="72x72"
				href="/assets/img/favicon/apple-touch-icon-72x72.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="144x144"
				href="/assets/img/favicon/apple-touch-icon-144x144.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="120x120"
				href="/assets/img/favicon/apple-touch-icon-120x120.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="152x152"
				href="/assets/img/favicon/apple-touch-icon-152x152.png"
			/>
			<link
				rel="icon"
				type="image/png"
				href="/assets/img/favicon/favicon-32x32.png"
				sizes="32x32"
			/>
			<link
				rel="icon"
				type="image/png"
				href="/assets/img/favicon/favicon-16x16.png"
				sizes="16x16"
			/>
		</Head>
	)
}

export default SEO
