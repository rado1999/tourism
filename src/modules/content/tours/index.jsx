import React, { useEffect } from 'react'
import { tours } from '../../../data/tours'
import { Col, Image, Row } from 'antd'
import './index.css'
import { useTranslation } from 'react-i18next'

export default function Tours() {
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
		<div className='tours_container content_container'>
			<div className='tours_background'>
				<Image
					preview={false}
					width={'100%'}
					src='/tours/background.webp'
				/>
				<div className='tours_title'>{t('others.tour_list')}</div>
			</div>
			<Row justify={'start'} align={'middle'} className='tours_row'>
				{tours.map(({ key, image }, index) => (
					<Col
						key={index}
						className='tours_card card'
						onClick={() => (location.href = `/tour/${index}`)}
						xs={12}
						sm={12}
						md={8}
						lg={6}
					>
						<div
							style={{ backgroundImage: `url(${image})` }}
							className='tours_card_image'
						></div>
						<div className='tours_card_title'>
							{t(`tours.${key}.title`)}
						</div>
					</Col>
				))}
			</Row>
		</div>
	)
}
