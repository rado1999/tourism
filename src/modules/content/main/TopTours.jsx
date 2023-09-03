import React from 'react'
import { topTours } from '../../../data/main'
import { Col, Image, Row } from 'antd'

export default function TopTours({ t }) {
	return (
		<div className='top_tours_container'>
			<div className='top_tours_title'>{t('main.tours')}</div>
			<Row justify={'start'} align={'middle'}>
				{topTours.map(({ key, image, url }, index) => (
					<Col
						className='card top_tours_card'
						xs={12}
						sm={8}
						md={6}
						lg={6}
						key={index}
						onClick={() => (location.href = url)}
					>
						<Image
							style={{ borderRadius: 8 }}
							preview={false}
							src={image}
						></Image>
						<div className='top_tours_image_title'>
							{t(`tours.${key}.title`)}
						</div>
					</Col>
				))}
			</Row>
		</div>
	)
}
