import React from 'react'
import { columns, data } from '../../../data/visa'
import './index.css'
import { Table } from 'antd'

export default function Visa() {
	return (
		<div className='visa_container content_container'>
			<div className='visa_text'>
				To obtain the tourist visa, all foreign nationals need a visa
				support letter (LOI) from “TA Travel” Travel Agent. Visa support
				application is submitted by the travel agency to the Immigration
				Service of Turkmenistan. The approval period is about 10 working
				days.Consular fee to be paid when submitting forms to the
				embassy is ranging from 51 US dollars to 131 US dollars,
				depending on duration of stay and citizenship. Also, visa can be
				obtained at any border of Turkmenistan and in Ashgabat
				International Airport.
			</div>
			<Table
				title={() =>
					'Information we need for filing documents for the invitation'
				}
				showHeader={false}
				pagination={false}
				bordered
				columns={columns}
				dataSource={data}
			/>
			<div className='visa_text warning'>
				We are not responsible for the untimely issuance of visas to
				consular departments of embassies, or for refuse of your
				invitation letter.
			</div>
		</div>
	)
}
