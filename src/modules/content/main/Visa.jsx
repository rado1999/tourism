import React from 'react'

export default function Visa({ t }) {
	return (
		<div className='main_visa_container'>
			<img src='/visa.webp' />
			<div className='main_visa_title'>{t('main.visa')}</div>
			<a href='/visa'>{t('main.learn')}</a>
		</div>
	)
}
