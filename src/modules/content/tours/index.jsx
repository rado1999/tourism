import React, { useEffect } from 'react'
import { tours } from '../../../data/tours'
import './index.css'

export default function Tours() {
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
		<div className='tours_container content_container'>
			<div className='tours_content_container'>
				{tours.en.map((tour, index) => (
					<div
						key={index}
						className='tours_card card'
						onClick={() => (location.href = `/tour/${index}`)}
					>
						<div className='tours_card_image_container'>
							<img
								className='tours_card_image'
								src={tour.image}
							/>
						</div>
						<div className='tours_card_title'>{tour.title}</div>
					</div>
				))}
			</div>
		</div>
	)
}
