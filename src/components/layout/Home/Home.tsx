import { CircleArrowRight, CirclePlay, Pause, RotateCcw } from 'lucide-react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { useTheme } from '../../../contexts/ThemeContext'
import { setIsRunning } from '../../../store/features/timer.slice'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { ControlButton } from '../../../ui-build/ControlButton'
import { formatTime } from '../../../utils/formatTime'

type TimerMode = 'work' | 'break'

function Home() {
	const { WORK, BREAK, SESSIONS_IN_ROUND, isRunning } = useAppSelector(
		state => state.timer
	)
	const dispatch = useAppDispatch()
	const [mode, setMode] = useState<TimerMode>('work')
	const [currentSession, setCurrentSession] = useState(1)
	const [timeLeft, setTimeLeft] = useState(WORK)
	const { isDark } = useTheme()

	const currentTimeLimit = mode === 'work' ? WORK : BREAK

	const progress = useMemo(
		() => (timeLeft / currentTimeLimit) * 100,
		[timeLeft, currentTimeLimit]
	)

	const handleTimerEnd = useCallback(() => {
		if (mode === 'work') {
			setMode('break')
			setTimeLeft(BREAK)
		} else {
			setMode('work')
			setTimeLeft(WORK)
			setCurrentSession(prev => (prev >= SESSIONS_IN_ROUND ? 1 : prev + 1))
		}
	}, [mode])

	const resetTimer = useCallback(() => {
		dispatch(setIsRunning(false))
		setTimeLeft(currentTimeLimit)
	}, [mode])

	const toggleTimer = useCallback(() => dispatch(setIsRunning(!isRunning)), [])

	const skipSession = useCallback(() => {
		handleTimerEnd()
	}, [handleTimerEnd, mode, resetTimer])

	useEffect(() => {
		if (!isRunning || timeLeft <= 0) return

		const timer = setInterval(() => {
			setTimeLeft(prev => prev - 1)
		}, 1000)

		return () => clearInterval(timer)
	}, [isRunning, timeLeft])

	useEffect(() => {
		if (timeLeft === 0) {
			handleTimerEnd()
		}
	}, [timeLeft, handleTimerEnd])

	const headerText = useMemo(() => {
		if (!isRunning) return 'PRESS START'
		return mode === 'work' ? 'Focus now!' : 'Break time!'
	}, [isRunning, mode])

	return (
		<div className="flex h-full flex-col items-center justify-center gap-6 pt-32 pl-[290px] max-lg:py-10 max-lg:pl-0">
			<h1
				className={`text-5xl font-bold uppercase ${!isDark ? 'text-[#3e98c7]' : 'text-white'}`}
			>
				{headerText}
			</h1>
			<div className={`relative ${!isDark ? 'text-[#3e98c7]' : 'text-white'}`}>
				<CircularProgressbar
					value={progress}
					text={formatTime(timeLeft)}
					className="mb-4"
					styles={buildStyles({
						textColor: !isDark ? '#3e98c7' : '#ffffff'
					})}
				/>

				<div className="mt-4 flex justify-center gap-4">
					<ControlButton
						icon={RotateCcw}
						onClick={resetTimer}
					/>
					<ControlButton
						icon={isRunning ? Pause : CirclePlay}
						onClick={toggleTimer}
					/>
					<ControlButton
						icon={CircleArrowRight}
						onClick={skipSession}
					/>
				</div>
			</div>

			<div className="text-xl">
				Session {currentSession} of {SESSIONS_IN_ROUND}
			</div>
		</div>
	)
}

export default Home
