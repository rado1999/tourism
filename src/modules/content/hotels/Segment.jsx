import { Segmented } from 'antd'
import React from 'react'
import { useCustomContext } from '../../../context/AppContext'

export default function Segment() {
	const { setPlace } = useCustomContext()

	const options = ['Ashgabat', 'Mary', 'Lebap', 'Dashoguz', 'Balkan']

	return (
		<div className='hotels_segment_container'>
			<Segmented
				size='large'
				options={options}
				onChange={place => setPlace(place)}
			/>
		</div>
	)
}
