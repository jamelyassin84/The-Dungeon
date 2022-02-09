import { Route } from '@angular/router'
import { WeightLiftingSection1Component } from './pages/weight-lifting-section1/weight-lifting-section1.component'
import { WeightLiftingSection2Component } from './pages/weight-lifting-section2/weight-lifting-section2.component'
import { WeightLiftingSection3Component } from './pages/weight-lifting-section3/weight-lifting-section3.component'
import { WeightLiftingSection4Component } from './pages/weight-lifting-section4/weight-lifting-section4.component'

export const WeightLiftingRoutes: Route[] = [
	{
		path: '1',
		component: WeightLiftingSection1Component,
	},
	{
		path: '2',
		component: WeightLiftingSection2Component,
	},
	{
		path: '3',
		component: WeightLiftingSection3Component,
	},

	{
		path: '4',
		component: WeightLiftingSection4Component,
	},
]