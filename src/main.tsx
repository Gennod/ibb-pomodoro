import { ThemeProvider } from '@mui/material'
import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router'

import Home from './components/layout/Home/Home.tsx'
import Settings from './components/layout/Settings/Settings.tsx'
import { ThemeContext } from './contexts/ThemeContext.tsx'
import './index.css'
import { store } from './store'
import { darkTheme, lightTheme } from './theme.ts'
import DesktopDrawer from './ui/DesktopDrawer.tsx'
import MobileDrawer from './ui/MobileDrawer.tsx'

function AppWrapper() {
	const [isDark, setIsDark] = useState(() => {
		const savedTheme = localStorage.getItem('theme')
		return savedTheme ? JSON.parse(savedTheme) : false
	})

	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		document.body.classList.add(isDark ? 'dark-theme' : 'light-theme')
		document.body.classList.remove(isDark ? 'light-theme' : 'dark-theme')
		setIsMounted(true)

		return () => {
			document.body.classList.remove('dark-theme', 'light-theme')
		}
	}, [isDark])

	const toggleTheme = () => {
		setIsDark((prev: boolean) => {
			const newTheme = !prev
			localStorage.setItem('theme', JSON.stringify(newTheme))
			return newTheme
		})
	}

	if (!isMounted) {
		return null
	}

	return (
		<ThemeContext.Provider value={{ isDark, toggleTheme }}>
			<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
				<BrowserRouter>
					<div className="max-lg:hidden">
						<DesktopDrawer />
					</div>
					<div className="flex justify-end min-lg:hidden">
						<MobileDrawer />
					</div>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/settings"
							element={<Settings />}
						/>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</ThemeContext.Provider>
	)
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<AppWrapper />
		</Provider>
	</StrictMode>
)
