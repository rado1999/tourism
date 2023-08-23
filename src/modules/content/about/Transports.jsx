import React, { useEffect } from 'react'
import { transports } from '../../../data/about'
import VanillaTilt from 'vanilla-tilt'

export default function Transports() {
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
		<div className='about_cards_container'>
			{transports.map(({ title, image, seats }, index) => (
				<div key={index} className='about_card card'>
					<div className='about_card_image_container'>
						<img className='about_card_image' src={image} />
					</div>
					<div className='about_card_data'>{title}</div>
					<div className='about_card_data'>A/S</div>
					<div className='about_card_data'>Seats: {seats}</div>
				</div>
			))}
		</div>
	)
}
