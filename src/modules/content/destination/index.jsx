import { Image } from 'antd'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../../data/destinations'
import VanillaTilt from 'vanilla-tilt'

export default function Destination() {
	const { id } = useParams()

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
		<div className='destination_container'>
			<div className='destinations_background'>
				<Image
					preview={false}
					width={'100%'}
					src='/visa_background.webp'
				/>
				<div className='destinations_title'>{data[id].title}</div>
			</div>
			<div className='destination_images_container'>
				{data[id].images.map((img, index) => (
					<div
						key={index}
						className='destination_image_container card'
					>
						<Image width={300} src={img} />
					</div>
				))}
			</div>
		</div>
	)
}
