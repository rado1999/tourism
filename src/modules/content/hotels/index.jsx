import React, { useEffect } from 'react'
import Segment from './Segment'
import { hotels } from '../../../data/hotels'
import { useCustomContext } from '../../../context/AppContext'
import VanillaTilt from 'vanilla-tilt'
import { Col, Image, Row } from 'antd'
import { useTranslation } from 'react-i18next'
import './index.css'

export default function Hotels() {
	const { place } = useCustomContext()
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
		<div className='hotels_container content_container'>
			<div className='hotels_background'>
				<Image
					preview={false}
					width={'100%'}
					src='/hotels/background.webp'
				/>
				<div className='hotels_title'>{t('main.hotels')}</div>
			</div>
			<Segment t={t} />
			<Row justify={'start'} align={'middle'} className='hotels_row'>
				{hotels[place].map(({ key, image }, index) => (
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
						<div className='hotels_card_title'>
							{t(`hotels.${key}.title`)}
						</div>
					</Col>
				))}
			</Row>
		</div>
	)
}
