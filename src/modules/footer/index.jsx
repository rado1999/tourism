import React from 'react'
import './index.css'

export default function Footer() {
	return (
		<div className='footer_container'>
			<div className='contacts'>
				<div className='footer_title center'>Contact Us</div>
				<div className='footer_content center'>+993 62845400</div>
				<div className='footer_content center'>+993 62845400</div>
				<div className='footer_content center last'>
					dova.jarvis@gmail.com
				</div>
			</div>
			<div className='addresses center'>
				<div className='footer_title center'>Visit Us</div>
				<div className='footer_content center'>
					207 Oguzkhan Street, Office №
				</div>
				<div className='footer_content center last'>
					335, 744027 Ashgabat, Turkmenistan
				</div>
			</div>
		</div>
	)
}
