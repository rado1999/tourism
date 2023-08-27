import React from 'react'
import Segment from './Segment'
import Content from './Content'
import { Image } from 'antd'
import { tours } from '../../../data/tours'
import { useParams } from 'react-router-dom'
import './index.css'

export default function Tour() {
	const { id } = useParams()

	return (
		<div className='tour_container content_container'>
			<div className='tour_background'>
				<Image
					preview={false}
					width={'100%'}
					src='/tours/background.webp'
				/>
				<div className='tour_title'>{tours.en[id].title}</div>
			</div>
			<Segment />
			<Content />
		</div>
	)
}
