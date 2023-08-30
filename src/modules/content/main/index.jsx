import React, { useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
import Carousel from './Carousel'
import TopTours from './TopTours'
import Visa from './Visa'
import Hotels from './Hotels'
import Transports from './Transports'
import TopDestinations from './TopDestinations'
import { useTranslation } from 'react-i18next'
import './index.css'

export default function Main() {
	const { t, i18n } = useTranslation()

	useEffect(() => {
		const lang = localStorage.getItem('lang')
		if (lang) i18n.changeLanguage(lang)

		const card = document.querySelectorAll('.card')

		VanillaTilt.init(card, {
			max: 25,
			speed: 400,
			glare: true,
			'max-glare': 1,
		})
	}, [])

	return (
		<div className='main_content_container content_container'>
			<Carousel t={t} />
			<TopDestinations t={t} />
			<TopTours t={t} />
			<Hotels t={t} />
			<Transports t={t} />
			<Visa t={t} />
		</div>
	)
}
