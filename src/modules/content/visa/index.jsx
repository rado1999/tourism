import React from 'react'
import { data } from '../../../data/visa'
import { Image } from 'antd'
import './index.css'

export default function Visa() {
	return (
		<div className='visa_container content_container'>
			<div className='visa_background'>
				<Image
					preview={false}
					width={'100%'}
					src='/visa_background.webp'
				/>
				<div className='visa_title'>Visa</div>
			</div>
			<div className='visa_content_container'>
				<div className='visa_text text1'>
					To obtain the tourist visa, all foreign nationals need a
					visa support letter (LOI) from “TA Travel” Travel Agent.
					Visa support application is submitted by the travel agency
					to the Immigration Service of Turkmenistan. The approval
					period is about 10 working days.Consular fee to be paid when
					submitting forms to the embassy is ranging from 51 US
					dollars to 131 US dollars, depending on duration of stay and
					citizenship. Also, visa can be obtained at any border of
					Turkmenistan and in Ashgabat International Airport.
				</div>
				<div className='visa_text text2'>
					Information we need for filing documents for the invitation
				</div>
				{data.map((value, index) => (
					<div key={index} className='info'>
						<div className='info_text id'>{index + 1}</div>
						<div className='info_text'>{value}</div>
					</div>
				))}
				<div className='visa_text warning'>
					We are not responsible for the untimely issuance of visas to
					consular departments of embassies, or for refuse of your
					invitation letter.
				</div>
			</div>
		</div>
	)
}
