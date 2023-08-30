import React, { createContext, useContext, useState } from 'react'

export const Context = createContext()

export const useCustomContext = () => useContext(Context)

export default function ContextProvider({ children }) {
	const [day, setDay] = useState(1)
	const [place, setPlace] = useState(1)

	return (
		<Context.Provider value={{ day, setDay, place, setPlace }}>
			{children}
		</Context.Provider>
	)
}
