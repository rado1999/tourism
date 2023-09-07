import React from 'react'
import { Carousel as Caro, Image } from 'antd'
import { data } from '../../../data/main'

export default function Carousel({ t }) {
	return (
		<Caro effect='fade' autoplay pauseOnHover={false} dots={false}>
			{data.map(({ key, image }, index) => (
				<div key={index} className='carousel_card'>
					<div className='carousel_title'>
						{t(`destinations.${key}.title`)}
					</div>
					<Image preview={false} width={'100%'} src={image} />
				</div>
			))}
		</Caro>
	)
}
