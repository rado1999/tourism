import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Base from './modules'
import Main from './modules/content/main'
import Tours from './modules/content/tours'
import Tour from './modules/content/tour'
import NotFound from './modules/notFound'
import Hotels from './modules/content/hotels'
import Hotel from './modules/content/hotel'
import Visa from './modules/content/visa'
import About from './modules/content/about'
import './index.css'

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<Base content={<Main />} />} />
			<Route path='/tour/:id' element={<Base content={<Tour />} />} />
			<Route path='/tours' element={<Base content={<Tours />} />} />
			<Route path='/hotels' element={<Base content={<Hotels />} />} />
			<Route path='/visa' element={<Base content={<Visa />} />} />
			<Route path='/about' element={<Base content={<About />} />} />
			<Route
				path='/hotel/:city/:id'
				element={<Base content={<Hotel />} />}
			/>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
