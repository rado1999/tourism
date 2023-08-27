import React from 'react'
import { topTours } from '../../../data/main'
import { Col, Image, Row } from 'antd'

export default function TopTours() {
	return (
		<div className='top_tours_container'>
			<div className='top_tours_title'>Trending tours</div>
			<Row justify={'start'} align={'middle'}>
				{topTours.map(({ title, image, url }, index) => (
					<Col
						className='card'
						style={{ padding: '10px 7.5px', textAlign: 'center' }}
						xs={12}
						sm={8}
						md={6}
						lg={6}
						key={index}
						onClick={() => (location.href = url)}
					>
						<Image preview={false} src={image}></Image>
						<div className='top_tours_image_title'>{title}</div>
					</Col>
				))}
			</Row>
		</div>
	)
}
