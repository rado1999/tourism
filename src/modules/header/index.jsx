import React, { useEffect } from 'react'
import { Select } from 'antd'
import { langs } from '../../data/languages'
import Sidebar from './Sidebar'
import { menu } from '../../data/menu'
import './index.css'

export default function Header() {
	useEffect(() => {
		const header = document.querySelector('header')

		window.addEventListener('scroll', () => {
			if (window.scrollY > 0) header.classList.add('solid-header')
			else header.classList.remove('solid-header')
		})
	})

	return (
		<>
			<header>
				<div
					className='logo_container'
					onClick={() => (location.href = '/')}
				>
					<img className='logo' src='/vite.svg' />
				</div>
				<ul className='header_ul'>
					{menu.map(({ title, url }, index) => (
						<li key={index} className='header_li'>
							<a className='header_a' href={url}>
								{title}
							</a>
						</li>
					))}
				</ul>
				<Select bordered={false} defaultValue={'en'} options={langs} />
			</header>
			<Sidebar />
		</>
	)
}
