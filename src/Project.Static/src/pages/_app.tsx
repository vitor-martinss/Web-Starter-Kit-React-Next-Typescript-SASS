import React from 'react'
import { AppProps } from 'next/app'
import Layout from '@/components/Shared/Layout'
import '@/styles/global.scss'

const MyApp: React.FC<AppProps> = ({ Component, pageProps, ...rest }) => {
	return (
		<>
			<Layout {...rest}>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
