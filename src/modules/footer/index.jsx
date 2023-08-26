import React from 'react'
import { Col, Row } from 'antd'
import { menu } from '../../data/menu'
import { topDestinations } from '../../data/main'
import './index.css'

export default function Footer() {
	return (
		<footer>
			<div className='footer_container'>
				<div className='footer_logo'>
					<img src='../../../public/vite.svg' />
				</div>
				<Row>
					<Col className='col1' flex={'1 0 25%'}>
						<div className='footer_title'>Call Us</div>
						<div className='contact'>+423 5362 42365</div>
						<div className='footer_title'>Mail</div>
						<div className='contact'>marketing@yagty-osus</div>
						<div className='footer_title'>Follow us</div>
					</Col>
					<Col className='col2' flex={'1 0 25%'}>
						<div className='footer_title'>Links</div>
						<Row>
							{menu.map(({ title, url }, index) => (
								<Col
									style={{ marginBottom: 30 }}
									key={index}
									xs={24}
									sm={12}
									md={12}
									lg={12}
								>
									<a className='footer_links' href={url}>
										{title}
									</a>
								</Col>
							))}
						</Row>
					</Col>
					<Col className='col3' flex={'1 0 50%'}>
						<div className='footer_title'>Popular Destinations</div>
						<Row>
							{topDestinations.map(({ title, url }, index) => (
								<Col
									style={{ marginBottom: 30 }}
									key={index}
									xs={12}
									sm={12}
									md={12}
									lg={12}
								>
									<a className='footer_links' href={url}>
										{title}
									</a>
								</Col>
							))}
						</Row>
					</Col>
				</Row>
				<div className='copyright'>
					Copyright © 2023 StarDust All rights reserved.
				</div>
			</div>
		</footer>
	)
}
