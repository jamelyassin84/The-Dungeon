import { Route } from '@angular/router'
import { WeightLiftingSecondSectionComponent } from './pages/weight-lifting-second-section/weight-lifting-second-section.component'
import { WeightLiftingSection1Component } from './pages/weight-lifting-section1/weight-lifting-section1.component'
import { WeightLiftingSection2Component } from './pages/weight-lifting-section2/weight-lifting-section2.component'
import { WeightLiftingSection3Component } from './pages/weight-lifting-section3/weight-lifting-section3.component'
import { WeightLiftingSection4Component } from './pages/weight-lifting-section4/weight-lifting-section4.component'

export const WeightLiftingRoutes: Route[] = [
	{
		path: '',
		redirectTo: '1',
		pathMatch: 'full',
	},
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
		component: WeightLiftingSecondSectionComponent,
	},
	{
		path: '4',
		component: WeightLiftingSection3Component,
	},

	{
		path: '5',
		component: WeightLiftingSection4Component,
	},
]
