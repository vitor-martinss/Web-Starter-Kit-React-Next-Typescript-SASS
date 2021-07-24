import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html>
				<Head>
					<meta name="description" content="Project Static" />
					<meta name="theme-color" content="#000000" />
					<meta
						name="msapplication-navbutton-color"
						content="#000000"
					/>
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="black-translucent"
					/>
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
					<meta name="application-name" content="undefined " />
					<meta name="msapplication-TileColor" content="#FFFFFF" />
					<meta
						name="msapplication-TileImage"
						content="mstile-144x144.png"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
