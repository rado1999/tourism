import { Segmented } from 'antd'
import React from 'react'
import { useCustomContext } from '../../../context/AppContext'

export default function Segment() {
	const { setPlace } = useCustomContext()

	let options = ['Ashgabat', 'Mary', 'Lebap', 'Dashoguz', 'Balkan']

	// if (lang === 'ch') {
	// 	options = ['阿什哈巴德', '瑪麗', '勒巴普', '達紹古茲', '巴爾幹']
	// }

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
