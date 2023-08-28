import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Provider from './modules/Provider'
import Base from './modules'
import Main from './modules/content/main'
import Tours from './modules/content/tours'
import Tour from './modules/content/tour'
import NotFound from './modules/notFound'
import Hotels from './modules/content/hotels'
import Hotel from './modules/content/hotel'
import Visa from './modules/content/visa'
import About from './modules/content/about'
import Destinations from './modules/content/destinations'
import Destination from './modules/content/destination'
import './index.css'

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<Provider outlet={<Base />} />}>
				<Route path='' element={<Main />} />
				<Route path='tour' element={<Tours />} />
				<Route path='tour/:id' element={<Tour />} />
				<Route path='hotel' element={<Hotels />} />
				<Route path='hotel/:city/:id' element={<Hotel />} />
				<Route path='visa' element={<Visa />} />
				<Route path='about' element={<About />} />
				<Route path='destinations' element={<Destinations />} />
				<Route path='destination/:id' element={<Destination />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
