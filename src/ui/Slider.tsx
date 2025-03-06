import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

import {
	changeBreakTime,
	changeSessions,
	changeWorkTime
} from '../store/features/timer.slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { Marks } from '../types/Slider'

function valuetext(value: number) {
	return `${value}`
}

interface CustomSliderProps {
	defaultValue: number
	marks: Marks[]
	max: number
	min: number
	name: string
}

export default function CustomSlider({
	defaultValue,
	marks,
	max,
	min,
	name
}: CustomSliderProps) {
	const { WORK, BREAK, SESSIONS_IN_ROUND } = useAppSelector(
		state => state.timer
	)
	const dispatch = useAppDispatch()

	const onSliderChange = (_event: Event, value: number | number[]) => {
		if ((_event.target as HTMLInputElement)?.name === 'Work duration') {
			dispatch(changeWorkTime(value as number))
		}
		if ((_event.target as HTMLInputElement)?.name === 'Break duration') {
			dispatch(changeBreakTime(value as number))
		}
		if ((_event.target as HTMLInputElement)?.name === 'Sessions') {
			dispatch(changeSessions(value as number))
		}
	}

	return (
		<Box
			sx={{
				width: 300,
				'.MuiSlider-track': {
					background: '#3e98c7'
				},
				'.MuiSlider-valueLabel': {
					background: '#3e98c7',
					borderRadius: '10%'
				}
			}}
		>
			<Slider
				aria-label="Custom marks"
				defaultValue={defaultValue}
				value={
					name === 'Work duration'
						? WORK / 60
						: name === 'Break duration'
							? BREAK / 60
							: SESSIONS_IN_ROUND
				}
				getAriaValueText={valuetext}
				step={1}
				valueLabelDisplay="auto"
				marks={marks}
				max={max}
				min={min}
				onChange={onSliderChange}
				name={name}
			/>
		</Box>
	)
}
