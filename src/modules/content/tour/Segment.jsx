import React from 'react'
import { Segmented } from 'antd'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../../context/AppContext'
import { tours } from '../../../data/tours'

export default function Segment({ t }) {
	const { id } = useParams()
	const { setDay } = useCustomContext()

	let options = []

	for (let i = 0; i < tours[id].days; i++) {
		options.push({
			label: t(`days.${i + 1}`),
			value: i + 1,
		})
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
