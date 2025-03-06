import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Moon, Settings, Sun, Timer } from 'lucide-react'
import { NavLink } from 'react-router'

import { useTheme } from '../contexts/ThemeContext'
import { useAppSelector } from '../store/hooks'

const drawerWidth = 290

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

export default function DesktopDrawer() {
	const { isDark, toggleTheme } = useTheme()
	const { isRunning } = useAppSelector(state => state.timer)

	return (
		<Box
			sx={{
				bgcolor: 'background.default',
				color: 'primary.main',
				display: 'flex',
				'.MuiPaper-root': {
					justifyContent: 'center',
					gap: '15px'
				},
				'.MuiTypography-root': {
					fontSize: '1.5rem'
				}
			}}
		>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
			>
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
					>
						Pomodoro App
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box'
					}
				}}
				variant="permanent"
				anchor="left"
			>
				<Toolbar />

				<Divider />
				<List>
					{navItems.map(item => (
						<ListItem
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
						padding: '0 15px'
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
			</Drawer>
		</Box>
	)
}
