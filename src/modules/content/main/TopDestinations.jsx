import React, { useState } from 'react'
import { first, second, third, fourth, base } from '../../../data/cards'

export default function TopDestinations({ t }) {
	const [size, setSize] =
		window.innerWidth <= 768 ? useState(base) : useState(first)

	const slide = order => {
		if (window.innerWidth > 768) setSize(order)
	}

	return (
		<div className='top_destination_container'>
			<div className='top_destination_title'>
				{t('main.destinations')}
			</div>
			<div className='top_destination_card_container'>
				<div
					className='top_destination_card dc1'
					style={{ width: size[1].lg }}
					onMouseMove={() => slide(first)}
					onClick={() => (location.href = '/destination/1')}
				>
					<div
						className='top_destination_card_image'
						style={{
							backgroundImage: `url('/places/abu-sagyt/6.webp')`,
						}}
					></div>
					<div
						className='top_destination_card_title'
						style={{ display: size[1].display }}
					>
						{t('destinations.sagyt.title')}
					</div>
				</div>
				<div
					className='top_destination_card dc2'
					style={{ width: size[2].md }}
					onMouseMove={() => slide(second)}
					onClick={() => (location.href = '/destination/18')}
				>
					<div
						className='top_destination_card_image'
						style={{
							backgroundImage: `url('/places/soltan/11.webp')`,
						}}
					></div>
					<div
						className='top_destination_card_title'
						style={{ display: size[2].display }}
					>
						{t('destinations.sanjar.title')}
					</div>
				</div>
				<div
					className='top_destination_card dc3'
					style={{ width: size[3].sm }}
					onMouseMove={() => slide(third)}
					onClick={() => (location.href = '/destination/13')}
				>
					<div
						className='top_destination_card_image'
						style={{
							backgroundImage: `url('/places/gyz-gala/5.webp')`,
						}}
					></div>
					<div
						className='top_destination_card_title'
						style={{ display: size[3].display }}
					>
						{t('destinations.gyzgala.title')}
					</div>
				</div>
				<div
					className='top_destination_card dc4'
					style={{ width: size[4].xs }}
					onMouseMove={() => slide(fourth)}
					onClick={() => (location.href = '/destination/10')}
				>
					<div
						className='top_destination_card_image'
						style={{
							backgroundImage: `url('/places/dehistan/6.webp')`,
						}}
					></div>
					<div
						className='top_destination_card_title'
						style={{ display: size[4].display }}
					>
						{t('destinations.dehistan.title')}
					</div>
				</div>
			</div>
			<div
				className='top_destination_view_all'
				onClick={() => (location.href = '/destinations')}
			>
				{t('main.view_destinations')}
			</div>
		</div>
	)
}
