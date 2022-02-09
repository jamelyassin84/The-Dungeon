import { CoachingSection1Component } from './pages/coaching-section1/coaching-section1.component'
import { Route } from '@angular/router'
import { CoachingSection2Component } from './pages/coaching-section2/coaching-section2.component'

export const CoachingRoutes: Route[] = [
	{
		path: '',
		redirectTo: '1',
		pathMatch: 'full',
	},
	{
		path: '1',
		component: CoachingSection1Component,
	},
	{
		path: '2',
		component: CoachingSection2Component,
	},
]
