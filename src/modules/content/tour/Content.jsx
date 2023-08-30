import React from 'react'
import { useParams } from 'react-router-dom'
import { tours } from '../../../data/tours'
import { useCustomContext } from '../../../context/AppContext'

export default function Content({ t }) {
	const { id } = useParams()
	let { day } = useCustomContext()

	return (
		<div className='tour_content_container'>
			<div className='tour_content_title'>
				{t(`tours.${tours[id].key}.${day}.title`)}
			</div>
			<div className='tour_content'>
				{t(`tours.${tours[id].key}.${day}.text`)}
			</div>
		</div>
	)
}
