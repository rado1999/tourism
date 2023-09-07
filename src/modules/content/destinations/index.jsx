import { Col, Image, Row } from 'antd'
import React, { useEffect } from 'react'
import { data } from '../../../data/destinations'
import VanillaTilt from 'vanilla-tilt'
import { useTranslation } from 'react-i18next'

export default function Destinations() {
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
		<div className='destinations_container'>
			<div className='destinations_background'>
				<Image
					preview={false}
					width={'100%'}
					src='/visa_background.webp'
				/>
				<div className='destinations_title'>
					{t('others.destination')}
				</div>
			</div>
			<Row
				justify={'start'}
				align={'middle'}
				className='destinations_row'
			>
				{data.map(({ key, image }, index) => (
					<Col
						key={index}
						className='destinations_card card'
						onClick={() =>
							(location.href = `/destination/${index}`)
						}
						xs={12}
						sm={12}
						md={8}
						lg={6}
					>
						<div
							style={{ backgroundImage: `url(${image})` }}
							className='destinations_card_image'
						></div>
						<div className='destinations_card_title'>
							{t(`destinations.${key}.title`)}
						</div>
					</Col>
				))}
			</Row>
		</div>
	)
}
