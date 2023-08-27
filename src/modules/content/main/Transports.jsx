import React from 'react'
import { transports } from '../../../data/main'

export default function Transports() {
	return (
		<div className='transport_container'>
			<div className='transport_title'>Our Transportation Vehicles</div>
			<div className='transport_card_container'>
				{transports.map(({ title, image, seats }, index) => (
					<div key={index} className='transport_card'>
						<div
							className='transport_card_image'
							style={{ backgroundImage: `url(${image})` }}
						></div>
						<div className='transport_card_title'>{title}</div>
						<div className='transport_card_title seats'>
							Seats: {seats}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
