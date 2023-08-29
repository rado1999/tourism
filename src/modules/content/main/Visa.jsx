import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Visa() {
	const { t } = useTranslation()

	return (
		<div className='main_visa_container'>
			<img src='/visa.webp' />
			<div className='main_visa_title'>{t('main.visa')}</div>
			<a href='/visa'>{t('main.learn')}</a>
		</div>
	)
}
