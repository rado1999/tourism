import React from 'react'
import { Image, List } from 'antd'
import { data } from '../../../data/about'
import Transports from './Transports'
import './index.css'

export default function About() {
	return (
		<div className='about_container content_container'>
			<div className='about_background'>
				<Image preview={false} width={'100%'} src='/about.webp' />
				<div className='about_background_title'>About Us</div>
			</div>
			<div className='about_content_container'>
				<div className='about_title'>
					«TA Travel» TOURS ALONG THE GREAT SILK ROAD
				</div>
				<div className='about_text'>
					The purpose and objective of the touristic company "TA
					Travel" - is a qualitative increase in the development of
					tourism infrastructure both internal and international in
					the territory of Turkmenistan as well as in the whole World.
					Professional approach of «TA Travel» company employees to
					their duties, and provide a full package of tourist services
					to foreign tourists served in Turkmenistan contributes to a
					favorable exchange of information between tourists from
					different countries. Orientation and the participation of
					foreign tourists in many national holiday of Turkmenistan.
				</div>
				<div className='about_services'>
					«TA Travel» offers you the following services
				</div>
				{data.map((value, index) => (
					<div key={index} className='info'>
						<div className='info_text id'>{index + 1}</div>
						<div className='info_text'>{value}</div>
					</div>
				))}
				<div className='about_text under_list'>
					Specificity of the national culture of Turkmenistan is
					multifaceted and has deep historical roots, a fascinating
					journey through ancient historical and cultural monuments of
					Turkmenistan, comfortable accommodation, attracting foreign
					tourists.
				</div>
				<div className='about_text'>
					TA Travel will provide you with professional language and
					cultural assistance, will take care of your time management
					and logistics. For more information contact our team member
					by phone or by our web site:
					<a className='about_link' href='#'>
						{' '}
						tilsimat-alemi.com
					</a>
				</div>
				<div className='about_text'>
					You'll be pleasantly surprised by the quality of our
					service. We look forward to joint cooperation in the field
					of tourism.
				</div>
			</div>
		</div>
	)
}
