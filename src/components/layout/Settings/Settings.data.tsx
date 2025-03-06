const workMarks = [
	{
		value: 5,
		label: '5 min'
	},
	{
		value: 25,
		label: '25 min'
	},
	{
		value: 60,
		label: '60 min'
	}
]
const breakMarks = [
	{
		value: 1,
		label: '1 min'
	},
	{
		value: 5,
		label: '5 min'
	},
	{
		value: 30,
		label: '30 min'
	}
]
const sessionMarks = [
	{
		value: 2,
		label: '2'
	},
	{
		value: 4,
		label: '4'
	},
	{
		value: 15,
		label: '15'
	}
]

export const sliderItemData = [
	{
		title: 'Work duration',
		defaultValue: 25,
		marks: workMarks,
		max: 60,
		min: 5
	},
	{
		title: 'Break duration',
		defaultValue: 5,
		marks: breakMarks,
		max: 30,
		min: 1
	},
	{
		title: 'Sessions',
		defaultValue: 4,
		marks: sessionMarks,
		max: 15,
		min: 2
	}
]
