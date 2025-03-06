import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Menu, Moon, Settings, Sun, Timer } from 'lucide-react'
import * as React from 'react'
import { NavLink } from 'react-router'

import { useTheme } from '../contexts/ThemeContext'
import { useAppSelector } from '../store/hooks'

const navItems = [
	{
		text: 'Timer',
		icon: <Timer />,
		path: '/'
	},
	{
		text: 'Settings',
		icon: <Settings />,
		path: '/settings'
	}
]

export default function MobileDrawer() {
	const [state, setState] = React.useState(false)
	const { isDark, toggleTheme } = useTheme()
	const { isRunning } = useAppSelector(state => state.timer)

	const toggleDrawer =
		(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return
			}

			setState(open)
		}

	const list = () => (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				{navItems.map(item => (
					<ListItem
						sx={{
							color: 'secondary.main',
							'&.active': {
								color: 'primary.main'
							},
							'&.active .MuiListItemIcon-root': {
								color: 'primary.main'
							}
						}}
						key={item.text}
						disablePadding
					>
						<ListItemButton
							disabled={
								item.text === 'Settings' && isRunning
									? true
									: item.text === 'Settings' && !isRunning
										? false
										: false
							}
							component={NavLink}
							to={item.path}
							sx={{
								color: 'secondary.main',
								'&.active': {
									color: 'primary.main'
								},
								'&.active .MuiListItemIcon-root': {
									color: 'primary.main'
								}
							}}
						>
							<ListItemIcon
								sx={{
									color: 'secondary.main'
								}}
							>
								{item.icon}
							</ListItemIcon>
							<ListItemText
								sx={{
									'.MuiListItemIcon-root': {
										color: 'secondary.main'
									}
								}}
								primary={item.text}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List
				sx={{
					padding: '0 15px',
					marginTop: '10px'
				}}
			>
				<ListItem
					className="transition active:scale-95"
					sx={{
						border: '1px solid #3e98c7',
						borderRadius: '15px',
						background: '#3e98c7',
						color: 'white'
					}}
					disablePadding
				>
					<ListItemButton onClick={toggleTheme}>
						<ListItemIcon>
							{isDark ? <Moon color="blue" /> : <Sun color="yellow" />}
						</ListItemIcon>
						<ListItemText primary={'Change theme'} />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	)

	return (
		<div>
			<Button onClick={toggleDrawer(true)}>
				<Menu size={40} />
			</Button>
			<Drawer
				sx={{
					'.MuiPaper-root': {
						bgcolor: 'background.default',
						justifyContent: 'center'
					},
					'.MuiTypography-root': {
						fontSize: '1.2rem'
					}
				}}
				anchor="right"
				open={state}
				onClose={toggleDrawer(false)}
			>
				{list()}
			</Drawer>
		</div>
	)
}
