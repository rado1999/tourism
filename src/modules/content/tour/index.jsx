import React, { useEffect } from 'react'
import Segment from './Segment'
import Content from './Content'
import { Image } from 'antd'
import { tours } from '../../../data/tours'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './index.css'

export default function Tour() {
	const { id } = useParams()
	const { t, i18n } = useTranslation()

	useEffect(() => {
		const lang = localStorage.getItem('lang')
		if (lang) i18n.changeLanguage(lang)
	}, [])

	return (
		<div className='tour_container content_container'>
			<div className='tour_background'>
				<Image
					preview={false}
					width={'100%'}
					src='/tours/background.webp'
				/>
				<div className='tour_title'>
					{t(`tours.${tours[id].key}.title`)}
				</div>
			</div>
			<Segment t={t} />
			<Content t={t} />
		</div>
	)
}
