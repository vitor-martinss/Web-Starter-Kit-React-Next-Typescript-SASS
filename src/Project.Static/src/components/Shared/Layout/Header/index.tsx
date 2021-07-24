import React from 'react'
import styles from './styles.module.scss'

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<a href="/">Eu sou o header</a>
		</header>
	)
}

export default Header
