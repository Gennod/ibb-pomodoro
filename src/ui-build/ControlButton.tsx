export const ControlButton = ({
	icon: Icon,
	onClick,
	disabled = false
}: {
	icon: React.ComponentType
	onClick: () => void
	disabled?: boolean
}) => (
	<button
		onClick={onClick}
		disabled={disabled}
		className="rounded-full border p-2 transition-all hover:scale-110 active:scale-95 disabled:opacity-50"
	>
		<Icon />
	</button>
)
