import React from 'react'
import { transports } from '../../../data/main'

export default function Transports({ t }) {
	return (
		<div className='transport_container'>
			<div className='transport_title'>{t('main.transports')}</div>
			<div className='transport_card_container'>
				{transports.map(({ key, image, seats }, index) => (
					<div key={index} className='transport_card'>
						<div
							className='transport_card_image'
							style={{ backgroundImage: `url(${image})` }}
						></div>
						<div className='transport_card_title'>
							{t(`transports.${key}`)}
						</div>
						<div className='transport_card_title seats'>
							{t('transports.seats')}: {seats}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
