import React from 'react'
import { Segmented } from 'antd'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../../context/AppContext'
import { tours } from '../../../data/tours'

export default function Tour() {
	const { id } = useParams()
	const { setDay } = useCustomContext()

	let options = []
	const len = Object.keys(tours.en[id]).length - 2

	for (let i = 0; i < len; i++) {
		options.push(`Day ${i + 1}`)
	}

	return (
		<div className='tour_segment_container'>
			<Segmented
				size='large'
				options={options}
				onChange={day => setDay(day)}
			/>
		</div>
	)
}
