import React from 'react'
import { Select } from 'antd'
import { langs } from '../../data/languages'
import Sidebar from './Sidebar'
import { menu } from '../../data/menu'
import './index.css'

export default function Header() {
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
				<Select defaultValue={'en'} options={langs} />
			</header>
			<Sidebar />
		</>
	)
}
