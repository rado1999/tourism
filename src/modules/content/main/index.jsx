import { Button, Carousel, Divider, Image } from 'antd'
import React, { useEffect } from 'react'
import { data, topTours } from '../../../data/main'
import './index.css'
import VanillaTilt from 'vanilla-tilt'

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
			<Carousel autoplay>
				{data.map(({ title, image }, index) => (
					<div key={index} className='content_image_container'>
						<div className='image_title'>{title}</div>
						<Image src={image} />
					</div>
				))}
			</Carousel>
			<Divider
				style={{
					margin: '100px 0px 30px 0px',
					fontSize: '24px',
				}}
				className='main_top_tours_title'
			>
				«TA Travel»
			</Divider>
			<div className='main_about_us'>
				The purpose and objective of the touristic company "TA Travel" -
				is a qualitative increase in the development of tourism
				infrastructure both internal and international in the territory
				of Turkmenistan as well as in the whole World. Professional
				approach of «TA Travel» company employees to their duties, and
				provide a full package of tourist services to foreign tourists
				served in Turkmenistan contributes to a favorable exchange of
				information between tourists from different countries.
				Orientation and the participation of foreign tourists in many
				national holiday of Turkmenistan.
			</div>
			<Button
				style={{ marginTop: '30px' }}
				onClick={() => (location.href = '/about')}
				type='primary'
			>
				Read more
			</Button>
			<Divider
				style={{
					margin: '100px 0px 30px 0px',
					fontSize: '24px',
				}}
				className='main_top_tours_title'
			>
				Top Tours
			</Divider>
			<div className='main_top_tours_container'>
				{topTours.map(({ title, image }, index) => (
					<div
						key={index}
						className='main_tours_card card'
						onClick={() => (location.href = `/tour/${0}`)}
					>
						<div className='main_tours_card_image_container'>
							<img
								className='main_tours_card_image'
								src={image}
							/>
						</div>
						<div className='main_tours_card_title'>{title}</div>
					</div>
				))}
			</div>
		</div>
	)
}
