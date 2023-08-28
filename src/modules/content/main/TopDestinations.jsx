import React, { useState } from 'react'
import { first, second, third, fourth, base } from '../../../data/cards'

export default function TopDestinations() {
	const [size, setSize] =
		window.innerWidth <= 768 ? useState(base) : useState(first)

	const slide = order => {
		if (window.innerWidth > 768) setSize(order)
	}

	return (
		<div className='top_destination_container'>
			<div className='top_destination_title'>Popular Destinations</div>
			<div className='top_destination_card_container'>
				<div
					className='top_destination_card dc1'
					style={{ width: size[1].lg }}
					onMouseMove={() => slide(first)}
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
						Abu Sagyt
					</div>
				</div>
				<div
					className='top_destination_card dc2'
					style={{ width: size[2].md }}
					onMouseMove={() => slide(second)}
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
						Soltan Sanjar
					</div>
				</div>
				<div
					className='top_destination_card dc3'
					style={{ width: size[3].sm }}
					onMouseMove={() => slide(third)}
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
						Gyz Gala
					</div>
				</div>
				<div
					className='top_destination_card dc4'
					style={{ width: size[4].xs }}
					onMouseMove={() => slide(fourth)}
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
						Dehistan
					</div>
				</div>
			</div>
			<div
				className='top_destination_view_all'
				onClick={() => (location.href = '/')}
			>
				View all Popular Destinations
			</div>
		</div>
	)
}
