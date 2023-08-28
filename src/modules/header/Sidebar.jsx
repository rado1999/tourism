import React, { useEffect, useState } from 'react'
import { menu } from './../../data/menu'
import { FloatButton } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

export default function Sidebar() {
	const [toggle, setToggle] = useState('-100%')
	const [menuOn, setMenuOn] = useState()

	useEffect(() => {
		if (window.innerWidth <= 768) setMenuOn('display')
		else setMenuOn('none')
	})

	return (
		<>
			<FloatButton
				style={{ display: menuOn }}
				onClick={() =>
					toggle === '0%' ? setToggle('-100%') : setToggle('0%')
				}
				icon={<MenuOutlined />}
			/>
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
