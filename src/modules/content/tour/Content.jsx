import React from 'react'
import { useParams } from 'react-router-dom'
import { tours } from '../../../data/tours'
import { useCustomContext } from '../../../context/AppContext'

export default function Content() {
	const { id } = useParams()
	let { day } = useCustomContext()

	day = day.split(' ')[1]

	return (
		<div className='tour_content_container'>
			<div className='tour_content_title'>{tours.en[id].title}</div>
			<div className='tour_content_sub_title'>
				{tours.en[id][day].title}
			</div>
			<div className='tour_content'>{tours.en[id][day].text}</div>
		</div>
	)
}
