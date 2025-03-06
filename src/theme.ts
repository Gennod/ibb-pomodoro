import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#3f51b5'
		},
		secondary: {
			main: '#808080'
		},
		background: {
			default: '#f5f5f5'
		}
	}
})

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#3f51b5'
		},
		secondary: {
			main: '#808080'
		},
		background: {
			default: '#121212'
		}
	}
})
