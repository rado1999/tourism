import React, { useEffect } from 'react'
import { Col, Row } from 'antd'
import { menu } from '../../data/menu'
import { topDestinations } from '../../data/main'
import { useTranslation } from 'react-i18next'
import './index.css'

export default function Footer() {
	const { t, i18n } = useTranslation()

	useEffect(() => {
		const lang = localStorage.getItem('lang')
		if (lang) i18n.changeLanguage(lang)
	}, [])

	return (
		<footer>
			<div className='footer_container'>
				<div className='footer_logo'>
					<img src='/logo.webp' />
				</div>
				<Row>
					<Col className='col1' flex={'1 0 25%'}>
						<div className='footer_title'>{t('footer.call')}</div>
						<div className='contact'>+993 12 346471</div>
						<div className='contact'>+993 12 346472</div>
						<div className='contact'>+993 61 013448</div>
						<div className='contact'>+993 61 013449</div>
						<div className='contact'>+993 61 013456</div>
						<div className='contact'>+993 61 013457</div>
						<div className='footer_title'>{t('footer.mail')}</div>
						<div className='contact mail1'>
							marketing@tilsimat-alemi.com
						</div>
						<div className='contact'>
							director@tilsimat-alemi.com
						</div>
					</Col>
					<Col className='col2' flex={'1 0 25%'}>
						<div className='footer_title'>{t('footer.links')}</div>
						<Row>
							{menu.map(({ key, url }, index) => (
								<Col
									style={{ marginBottom: 10 }}
									key={index}
									xs={24}
									sm={12}
									md={12}
									lg={12}
								>
									<a className='footer_links' href={url}>
										{t(`menu.${key}`)}
									</a>
								</Col>
							))}
						</Row>
					</Col>
					<Col className='col3' flex={'1 0 50%'}>
						<div className='footer_title'>
							{t('footer.destinations')}
						</div>
						<Row>
							{topDestinations.map(({ key, url }, index) => (
								<Col
									style={{ marginBottom: 10 }}
									key={index}
									xs={12}
									sm={12}
									md={12}
									lg={12}
								>
									<a className='footer_links' href={url}>
										{t(`destinations.${key}.title`)}
									</a>
								</Col>
							))}
						</Row>
					</Col>
				</Row>
				<div className='copyright'>{t('footer.rights')}</div>
			</div>
		</footer>
	)
}
