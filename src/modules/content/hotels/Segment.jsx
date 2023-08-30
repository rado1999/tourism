import { Segmented } from 'antd'
import React from 'react'
import { useCustomContext } from '../../../context/AppContext'

export default function Segment({ t }) {
	const { setPlace } = useCustomContext()

	let options = [
		{
			label: t('langs.ashgabat'),
			value: 1,
		},
		{
			label: t('langs.mary'),
			value: 2,
		},
		{
			label: t('langs.lebap'),
			value: 3,
		},
		{
			label: t('langs.dashoguz'),
			value: 4,
		},
		{
			label: t('langs.balkan'),
			value: 5,
		},
	]

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
