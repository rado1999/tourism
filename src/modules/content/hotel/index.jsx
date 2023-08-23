import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { hotels } from '../../../data/hotels'
import { Image } from 'antd'
import VanillaTilt from 'vanilla-tilt'
import './index.css'

export default function Hotel() {
	const { city, id } = useParams()

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
		<div className='hotel_container content_container'>
			<div className='hotel_title'>{hotels[city][id].title}</div>
			<div className='hotel_description'>
				{hotels[city][id].description}
			</div>
			<div className='hotel_images_container'>
				{hotels[city][id].images.map((img, index) => (
					<div key={index} className='hotel_image_container card'>
						<Image width={300} src={img} />
					</div>
				))}
			</div>
		</div>
	)
}
