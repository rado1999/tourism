import React, { useEffect } from 'react'
import Segment from './Segment'
import { hotels } from '../../../data/hotels'
import { useCustomContext } from '../../../context/AppContext'
import VanillaTilt from 'vanilla-tilt'
import { Col, Image, Row } from 'antd'
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
			<div className='hotels_background'>
				<Image
					preview={false}
					width={'100%'}
					src='/hotels/background.webp'
				/>
				<div className='hotels_title'>Hotels</div>
			</div>
			<Segment />
			<Row justify={'start'} align={'middle'} className='hotels_row'>
				{hotels[place].map(({ title, image }, index) => (
					<Col
						key={index}
						className='hotels_card card'
						onClick={() =>
							(location.href = `/hotel/${place}/${index}`)
						}
						xs={24}
						sm={24}
						md={12}
						lg={8}
					>
						<div
							style={{ backgroundImage: `url(${image})` }}
							className='hotels_card_image'
						></div>
						<div className='hotels_card_title'>{title}</div>
					</Col>
				))}
			</Row>
		</div>
	)
}
