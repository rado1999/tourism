import React from 'react'
import Header from './header'
import Footer from './footer'
import './index.css'

export default function Base({ content }) {
	return (
		<div className='main_container'>
			<Header />
			{content}
			<Footer />
		</div>
	)
}
