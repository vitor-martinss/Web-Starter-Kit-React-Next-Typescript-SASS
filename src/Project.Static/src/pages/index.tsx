import React from 'react'
import SEO from '@/components/Shared/SEO'

// all functions in pages of Next must have export default
const Home: React.FC = () => {
	return (
		<>
			<SEO
				title="Homepage"
				image="https://via.placeholder.com/500"
				shouldExcludeTitleSuffix
			/>
			<h2>Body - Main</h2>
		</>
	)
}

export default Home
