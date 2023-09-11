import React, { useEffect } from 'react'
import { Select } from 'antd'
import { langs } from '../../data/languages'
import Sidebar from './Sidebar'
import { menu } from '../../data/menu'
import { useTranslation } from 'react-i18next'
import './index.css'

export default function Header() {
	const { t, i18n } = useTranslation()

	useEffect(() => {
		const lang = localStorage.getItem('lang')
		if (lang) i18n.changeLanguage(lang)

		const header = document.querySelector('header')

		window.addEventListener('scroll', () => {
			if (window.scrollY > 0) header.classList.add('solid-header')
			else header.classList.remove('solid-header')
		})
	}, [])

	const changeLang = lang => {
		i18n.changeLanguage(lang)
		localStorage.setItem('lang', lang)
	}

	return (
		<>
			<header>
				<div
					className='logo_container'
					onClick={() => (location.href = '/')}
				>
					<img className='logo' src='/logo.webp' />
				</div>
				<ul className='header_ul'>
					{menu.map(({ key, url }, index) => (
						<li key={index} className='header_li'>
							<a className='header_a' href={url}>
								{t(`menu.${key}`)}
							</a>
						</li>
					))}
				</ul>
				<Select
					onChange={lang => changeLang(lang)}
					bordered={false}
					defaultValue={
						localStorage.getItem('lang')
							? localStorage.getItem('lang')
							: 'en'
					}
					options={langs}
				/>
			</header>
			<Sidebar />
		</>
	)
}
