import React from 'react'
import Footer from '@/components/Shared/Layout/Footer'
import Header from '@/components/Shared/Layout/Header'

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<a
				className="skip-content sr-only sr-only-focusable"
				href="#content-page"
				title="Saltar para o conteúdo principal"
			>
				ir para o conteúdo principal
			</a>
			<Header />
			<main className="wrapper" role="main" id="content-page">
				<h1 className="sr-only">StarterKit Next Typescript SASS</h1>
				{children}
			</main>
			<Footer />
		</>
	)
}

export default Layout
