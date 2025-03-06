import CustomSlider from '../../../ui/Slider'

import { sliderItemData } from './Settings.data'

export default function Settings() {
	return (
		<div className="flex h-screen flex-col items-center justify-center pl-[290px] max-lg:py-10 max-lg:pl-0">
			<div className="text-center">
				<ul className="flex flex-col gap-5">
					{sliderItemData.map((item, idx) => (
						<li key={idx}>
							<h2 className="mb-2 text-left text-xl">{item.title}</h2>
							<CustomSlider
								defaultValue={item.defaultValue}
								marks={item.marks}
								max={item.max}
								min={item.min}
								name={item.title}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
