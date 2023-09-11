import React, { useEffect, useState } from 'react'
import { menu } from './../../data/menu'
import { FloatButton } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

export default function Sidebar() {
	const [toggle, setToggle] = useState('-100%')
	const [menuOn, setMenuOn] = useState()
	const { t } = useTranslation()

	useEffect(() => {
		if (window.innerWidth <= 850) setMenuOn('display')
		else setMenuOn('none')
	}, [])

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
					{menu.map(({ key, url }, index) => (
						<li key={index} className='sidebar_li'>
							<a className='sidebar_a' href={url}>
								{t(`menu.${key}`)}
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
