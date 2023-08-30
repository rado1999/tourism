import React, { useEffect } from 'react'
import { data } from '../../../data/visa'
import { Image } from 'antd'
import { useTranslation } from 'react-i18next'
import './index.css'

export default function Visa() {
	const { t, i18n } = useTranslation()

	useEffect(() => {
		const lang = localStorage.getItem('lang')
		if (lang) i18n.changeLanguage(lang)
	}, [])

	return (
		<div className='visa_container content_container'>
			<div className='visa_background'>
				<Image
					preview={false}
					width={'100%'}
					src='/visa_background.webp'
				/>
				<div className='visa_title'>{t('visa.title')}</div>
			</div>
			<div className='visa_content_container'>
				<div className='visa_text text1'>{t('visa.text1')}</div>
				<div className='visa_text text2'>{t('visa.text2')}</div>
				{data.map((value, index) => (
					<div key={index} className='info'>
						<div className='info_text id'>{index + 1}</div>
						<div className='info_text'>
							{t(`visa.documents.${value}`)}
						</div>
					</div>
				))}
				<div className='visa_text warning'>{t('visa.warning')}</div>
			</div>
		</div>
	)
}
