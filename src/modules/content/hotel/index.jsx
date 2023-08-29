import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { hotels } from '../../../data/hotels'
import { Image } from 'antd'
import VanillaTilt from 'vanilla-tilt'
import { useTranslation } from 'react-i18next'
import './index.css'

export default function Hotel() {
	const { city, id } = useParams()
	const { t, i18n } = useTranslation()

	useEffect(() => {
		const lang = localStorage.getItem('lang')
		if (lang) i18n.changeLanguage(lang)

		const card = document.querySelectorAll('.card')

		VanillaTilt.init(card, {
			max: 25,
			speed: 400,
			glare: true,
			'max-glare': 1,
		})
	}, [])

	return (
		<div className='hotel_container content_container'>
			<div className='hotel_background'>
				<Image
					preview={false}
					width={'100%'}
					src='/hotels/background.webp'
				/>
				<div className='hotel_title'>
					{t(`hotels.${hotels[city][id].key}.title`)}
				</div>
			</div>
			<div className='hotel_description'>
				{t(`hotels.${hotels[city][id].key}.text`)}
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
