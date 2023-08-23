import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { tours } from '../../../data/tours'
import { useCustomContext } from '../../../context/AppContext'
import { Image } from 'antd'
import VanillaTilt from 'vanilla-tilt'

export default function Content() {
	const { id } = useParams()
	let { day } = useCustomContext()

	day = day.split(' ')[1]

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
		<div className='tour_content_container'>
			<div className='tour_content_title'>{tours.en[id].title}</div>
			<div className='tour_content_sub_title'>
				{tours.en[id][day].title}
			</div>
			<div className='tour_content'>{tours.en[id][day].text}</div>
			<div className='tour_images_container'>
				{tours.en[id][day].images.map((img, index) => (
					<div key={index} className='tour_image_container card'>
						<Image width={300} src={img} />
					</div>
				))}
			</div>
		</div>
	)
}
