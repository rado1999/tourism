import React, { useEffect } from 'react'
import { Image } from 'antd'
import { data } from '../../../data/about'
import { useTranslation } from 'react-i18next'
import './index.css'

export default function About() {
	const { t, i18n } = useTranslation()

	useEffect(() => {
		const lang = localStorage.getItem('lang')
		if (lang) i18n.changeLanguage(lang)
	}, [])

	return (
		<div className='about_container content_container'>
			<div className='about_background'>
				<Image preview={false} width={'100%'} src='/about.webp' />
				<div className='about_background_title'>
					{t('about.back_title')}
				</div>
			</div>
			<div className='about_content_container'>
				<div className='about_title'>{t('about.title')}</div>
				<div className='about_text'>{t('about.text1')}</div>
				<div className='about_services'>{t('about.text2')}</div>
				{data.map((value, index) => (
					<div key={index} className='info'>
						<div className='info_text id'>{index + 1}</div>
						<div className='info_text'>
							{t(`about.services.${value}`)}
						</div>
					</div>
				))}
				<div className='about_text under_list'>{t('about.text3')}</div>
				<div className='about_text'>
					{t('about.text4')}
					<a className='about_link' href='#'>
						{' '}
						tilsimat-alemi.com
					</a>
				</div>
				<div className='about_text'>{t('about.text5')}</div>
			</div>
		</div>
	)
}
