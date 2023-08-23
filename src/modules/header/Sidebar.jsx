import React, { useState } from 'react'
import { menu } from './../../data/menu'

export default function Sidebar() {
	const [toggle, setToggle] = useState('-100%')

	return (
		<>
			<div className='iphone_btn_container'>
				<div
					className='iphone_btn'
					onClick={() =>
						toggle === '-25%'
							? setToggle('-100%')
							: setToggle('-25%')
					}
				>
					<div className='iphone_btn_circle'></div>
				</div>
			</div>
			<div className='sidebar' style={{ bottom: toggle }}>
				<ul>
					{menu.map(({ title, url }, index) => (
						<li key={index} className='sidebar_li'>
							<a className='sidebar_a' href={url}>
								{title}
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
