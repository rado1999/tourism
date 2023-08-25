import React from 'react'
import Header from './header'
import Footer from './footer'
import './index.css'
import { Outlet } from 'react-router-dom'

export default function Base() {
	return (
		<div className='main_container'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}
