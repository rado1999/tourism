import React, { useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
import Carousel from './Carousel'
import TopTours from './TopTours'
import Visa from './Visa'
import Hotels from './Hotels'
import Transports from './Transports'
import TopDestinations from './TopDestinations'
import './index.css'

export default function Main() {
	useEffect(() => {
		const card = document.querySelectorAll('.card')

		VanillaTilt.init(card, {
			max: 25,
			speed: 400,
			glare: true,
			'max-glare': 1,
		})
	})

	return (
		<div className='main_content_container content_container'>
			<Carousel />
			<TopDestinations />
			<TopTours />
			<Hotels />
			<Transports />
			<Visa />
		</div>
	)
}
