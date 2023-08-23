import React, { useEffect } from 'react'
import Segment from './Segment'
import { hotels } from '../../../data/hotels'
import { useCustomContext } from '../../../context/AppContext'
import VanillaTilt from 'vanilla-tilt'
import './index.css'

export default function Hotels() {
	const { place } = useCustomContext()

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
		<div className='hotels_container content_container'>
			<Segment />
			<div className='hotels_content_container'>
				{hotels[place].map(({ title, image }, index) => (
					<div
						key={index}
						className='hotels_card card'
						onClick={() =>
							(location.href = `/hotel/${place}/${index}`)
						}
					>
						<div className='hotels_card_image_container'>
							<img className='hotels_card_image' src={image} />
						</div>
						<div className='hotels_card_title'>{title}</div>
					</div>
				))}
			</div>
		</div>
	)
}
