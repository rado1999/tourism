import React from 'react'
import { hotels_example } from '../../../data/main'

export default function Hotels() {
	return (
		<div className='main_hotels_container'>
			<div className='main_hotels_title'>Hotels</div>
			<div className='main_hotels_card_container'>
				{hotels_example.map(({ title, image, url }, index) => (
					<div
						key={index}
						className='main_hotel_card'
						onClick={() => (location.href = url)}
					>
						<div
							className='main_hotel_card_image'
							style={{ backgroundImage: `url(${image})` }}
						></div>
						<div className='main_hotels_card_title'>{title}</div>
					</div>
				))}
			</div>
			<div
				className='main_hotels_view_all'
				onClick={() => (location.href = '/hotel')}
			>
				View all Organized Trips
			</div>
		</div>
	)
}
